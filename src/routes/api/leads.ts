import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const leadSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  whatsapp: z.string().trim().min(8).max(40),
  email: z.string().trim().email().max(255),
  source: z.string().trim().max(120).optional(),
  timestamp: z.string().trim().max(64).optional(),
});

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = leadSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: "Invalid input", issues: parsed.error.flatten() },
            { status: 400 },
          );
        }

        const lead = {
          ...parsed.data,
          receivedAt: new Date().toISOString(),
        };

        // Forward to a private, server-configured webhook if provided.
        // Configure LEADS_WEBHOOK_URL (and optional LEADS_WEBHOOK_SECRET) as a
        // server secret — never embed third-party webhook URLs in client code.
        const webhookUrl = process.env.LEADS_WEBHOOK_URL;
        const webhookSecret = process.env.LEADS_WEBHOOK_SECRET;

        if (webhookUrl) {
          try {
            const res = await fetch(webhookUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                ...(webhookSecret ? { "X-Webhook-Secret": webhookSecret } : {}),
              },
              body: JSON.stringify(lead),
            });
            if (!res.ok) {
              console.error("Lead webhook failed", res.status);
              return Response.json(
                { error: "Upstream webhook rejected the lead" },
                { status: 502 },
              );
            }
          } catch (err) {
            console.error("Lead webhook error", err);
            return Response.json(
              { error: "Failed to deliver lead" },
              { status: 502 },
            );
          }
        } else {
          // No webhook configured — log server-side so the lead is not lost.
          console.info("New lead (no webhook configured)", lead);
        }

        return Response.json({ ok: true });
      },
    },
  },
});
