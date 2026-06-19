import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/vivakii-logo.asset.json";
import img1 from "@/assets/empreendimento-1.jpg";
import img2 from "@/assets/empreendimento-2.jpg";
import img3 from "@/assets/empreendimento-3.jpg";
import img4 from "@/assets/empreendimento-4.jpg";
import img5 from "@/assets/empreendimento-5.jpg";
import planta1 from "@/assets/planta-1.jpg";
import planta2 from "@/assets/planta-2.jpg";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20no%20empreendimento%20Vivakii%20na%20Freguesia%20do%20%C3%93.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vivakii — Apartamentos na Freguesia do Ó | São Paulo" },
      {
        name: "description",
        content:
          "Seu novo apartamento na Freguesia do Ó. 2 dormitórios, vaga, lazer completo. Use FGTS e Minha Casa Minha Vida. Fale agora no WhatsApp.",
      },
      { property: "og:title", content: "Vivakii — Apartamentos na Freguesia do Ó" },
      {
        property: "og:description",
        content:
          "Apartamentos com vaga, lazer e condições facilitadas na Freguesia do Ó, São Paulo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: img1 },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: img1 },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const WhatsAppIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function CTAButton({
  children,
  size = "lg",
  className = "",
}: {
  children: React.ReactNode;
  size?: "lg" | "md";
  className?: string;
}) {
  const padding = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.8)] active:scale-[0.98] ${padding} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}

function LandingPage() {
  const gallery = [img1, img2, img3, img4, img5];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Posso usar FGTS?",
      a: "Sim. O empreendimento aceita o uso do saldo do FGTS como entrada ou para amortização do financiamento, conforme as regras da Caixa Econômica Federal.",
    },
    {
      q: "Tem vaga de garagem?",
      a: "Sim, todas as unidades acompanham 1 vaga de garagem coberta.",
    },
    {
      q: "Como funciona a entrada?",
      a: "Trabalhamos com condições facilitadas: entrada parcelada direto com a construtora, possibilidade de uso do FGTS e financiamento pela Caixa via Minha Casa Minha Vida.",
    },
    {
      q: "Qual a previsão de entrega?",
      a: "Fale com nosso consultor no WhatsApp para receber a tabela atualizada com prazo de entrega, plantas e disponibilidade.",
    },
  ];

  const highlights = [
    { title: "2 dormitórios", desc: "Plantas inteligentes e bem distribuídas." },
    { title: "Vaga de garagem", desc: "1 vaga coberta por unidade." },
    { title: "Minha Casa Minha Vida", desc: "Condições especiais do programa." },
    { title: "Utilize FGTS", desc: "Use seu saldo na entrada ou parcelas." },
    { title: "Transporte público", desc: "Próximo a ônibus e fácil acesso." },
    { title: "Lazer completo", desc: "Piscina, salão de festas e mais." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <img
            src={logoAsset.url}
            alt="Vivakii"
            className="h-8 w-auto md:h-10"
            width={160}
            height={40}
          />
          <CTAButton size="md" className="hidden sm:inline-flex">
            WhatsApp
          </CTAButton>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(0,194,168,0.4), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.15), transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-24 md:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#7FE7D8] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#00C2A8]" />
              Lançamento • Freguesia do Ó
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Seu novo apartamento na{" "}
              <span className="text-[#00C2A8]">Freguesia do Ó</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/80 md:text-xl">
              Apartamentos com vaga, lazer e condições facilitadas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton>Falar no WhatsApp</CTAButton>
              <span className="text-sm text-white/60">Resposta em minutos</span>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <div className="text-2xl font-bold text-[#00C2A8]">2</div>
                <div className="text-white/70">Dormitórios</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#00C2A8]">1</div>
                <div className="text-white/70">Vaga</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#00C2A8]">FGTS</div>
                <div className="text-white/70">Aceito</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="overflow-hidden rounded-3xl border border-white/10"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={img1}
                alt="Fachada do empreendimento Vivakii na Freguesia do Ó"
                width={1280}
                height={896}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 text-foreground shadow-lg md:block">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pronto para morar
              </div>
              <div className="text-lg font-bold text-[#12344D]">Tabela exclusiva</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-border bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
              Tudo o que você precisa
            </h2>
            <p className="mt-3 text-muted-foreground">
              Conforto, praticidade e condições facilitadas em um só lugar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-[#00C2A8]"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C2A8]/10 text-[#00C2A8]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-5 w-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#12344D]">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
              Conheça o empreendimento
            </h2>
            <p className="mt-3 text-muted-foreground">Fotos reais e imagens ilustrativas.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
              <img
                src={gallery[0]}
                alt="Fachada"
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {gallery.slice(1).map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Foto ${i + 2} do empreendimento`}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-48 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
                Localização privilegiada
              </h2>
              <p className="mt-3 text-muted-foreground">
                Freguesia do Ó, zona norte de São Paulo. Próximo ao transporte público,
                comércio, escolas e parques.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Acesso fácil à Marginal Tietê",
                  "Próximo ao Terminal Pirituba",
                  "Comércio e serviços a poucos passos",
                  "Escolas, hospitais e parques no entorno",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00C2A8]/15 text-[#00C2A8]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton>Falar com consultor</CTAButton>
              </div>
            </div>
            <div
              className="overflow-hidden rounded-2xl border border-border"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <iframe
                title="Mapa Freguesia do Ó"
                src="https://www.google.com/maps?q=Freguesia%20do%20%C3%93%2C%20S%C3%A3o%20Paulo&output=embed"
                className="h-[360px] w-full md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plantas */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
              Plantas
            </h2>
            <p className="mt-3 text-muted-foreground">
              Opções de planta pensadas para o seu dia a dia.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[planta1, planta2].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-border bg-white p-4"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={src}
                  alt={`Planta opção ${i + 1}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="mx-auto h-auto w-full max-w-md object-contain"
                />
                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold uppercase tracking-wider text-[#00C2A8]">
                    Opção {i + 1}
                  </div>
                  <div className="text-lg font-bold text-[#12344D]">2 dormitórios</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
              Perguntas frequentes
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={f.q}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-semibold text-[#12344D]">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#00C2A8]/10 text-[#00C2A8] transition-transform ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20 text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Solicite tabela de preços e disponibilidade
          </h2>
          <p className="mt-4 text-white/80 md:text-lg">
            Atendimento humano e rápido, direto pelo WhatsApp.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton>Falar no WhatsApp</CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Vivakii" className="h-7 w-auto" />
          </div>
          <div>© {new Date().getFullYear()} Vivakii. Imagens meramente ilustrativas.</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 md:h-16 md:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      </a>
    </div>
  );
}
