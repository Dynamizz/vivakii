import { useState } from "react";
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
import { propertyData, getWhatsAppUrl } from "@/data/propertyData";

const leadSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  whatsapp: z.string().min(8, "Informe um WhatsApp válido"),
  email: z.string().email("E-mail inválido"),
});

type LeadFormValues = z.infer<typeof leadSchema>;

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function LeadForm() {
  const [submitted, setSubmitted] = useState<{ nome: string } | null>(null);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { nome: "", whatsapp: "", email: "" },
  });

  const onSubmit = async (values: LeadFormValues) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          source: `landing-${propertyData.brand.name.toLowerCase()}`,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      toast.success("Simulação solicitada!", {
        description: "Clique no botão abaixo para falar agora com nosso consultor no WhatsApp.",
      });
      setSubmitted({ nome: values.nome });
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Não conseguimos enviar agora. Tente pelo WhatsApp.");
    }
  };

  if (submitted) {
    const personalized = `Olá! Sou ${submitted.nome} e acabei de solicitar uma simulação de financiamento personalizada do ${propertyData.brand.name}. Pode me enviar a tabela e disponibilidade?`;
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#00C2A8]/20 text-[#00C2A8]">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white">Recebemos seu pedido, {submitted.nome.split(" ")[0]}!</h4>
        <p className="text-sm text-white/80">
          Clique abaixo para falar agora com nosso consultor e adiantar sua simulação.
        </p>
        <a
          href={getWhatsAppUrl(personalized)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-all hover:scale-[1.02]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Falar agora no WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="text-xs text-white/60 underline-offset-2 hover:underline"
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

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
          {form.formState.isSubmitting ? "Enviando..." : "Quero minha simulação"}
        </button>
      </form>
    </Form>
  );
}
