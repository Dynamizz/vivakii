import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { propertyData } from "@/data/propertyData";

const leadSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  whatsapp: z.string().min(8, "Informe um WhatsApp válido"),
  email: z.string().email("E-mail inválido"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function LeadForm() {
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { nome: "", whatsapp: "", email: "" },
  });

  const onSubmit = async (values: LeadFormValues) => {
    try {
      // 🔌 Automation hook — plug your Python / n8n / Make webhook here.
      // Example payload structure consumed by automation scripts:
      // { nome, whatsapp, email, source: "landing-vivakii", timestamp }
      await fetch(propertyData.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors", // remove when your endpoint sets proper CORS
        body: JSON.stringify({
          ...values,
          source: `landing-${propertyData.brand.name.toLowerCase()}`,
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success("Recebemos seu contato!", {
        description: "Em instantes um consultor falará com você.",
      });
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Não conseguimos enviar agora. Tente pelo WhatsApp.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/90">Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/90">WhatsApp</FormLabel>
              <FormControl>
                <Input placeholder="(11) 99999-9999" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/90">E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="voce@email.com" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full rounded-full bg-[#00C2A8] px-6 py-3 font-semibold text-[#12344D] transition-all hover:scale-[1.01] disabled:opacity-60"
        >
          {form.formState.isSubmitting ? "Enviando..." : "Quero receber a tabela"}
        </button>
      </form>
    </Form>
  );
}
