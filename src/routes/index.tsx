import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { propertyData, getWhatsAppUrl } from "@/data/propertyData";
import { LeadForm } from "@/components/LeadForm";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WHATSAPP_URL = getWhatsAppUrl();
const data = propertyData;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: data.seo.title },
      { name: "description", content: data.seo.description },
      { property: "og:title", content: data.seo.ogTitle },
      { property: "og:description", content: data.seo.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:image", content: data.hero.coverImage.src },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: data.hero.coverImage.src },
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

function Tour3DDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#12344D] bg-white px-6 py-3 text-base font-semibold text-[#12344D] transition-all hover:bg-[#12344D] hover:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7" />
          </svg>
          Ver Tour Virtual 3D
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-[#12344D]">Tour Virtual 3D</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-secondary">
          {/* 🎥 Plug Matterport / Kuula / 360 viewer URL via propertyData.plantas.tour3dUrl */}
          <iframe
            src={data.plantas.tour3dUrl}
            title="Tour Virtual 3D"
            className="h-full w-full"
            allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground pb-16 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <img
            src={data.brand.logoUrl}
            alt={data.brand.name}
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
              {data.hero.badge}
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {data.hero.titlePrefix}{" "}
              <span className="text-[#00C2A8]">{data.hero.titleHighlight}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/80 md:text-xl">
              {data.hero.subtitle}{" "}
              <span className="font-semibold text-white">{data.hero.priceFrom}</span>.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTAButton>{data.hero.ctaPrimary}</CTAButton>
              <span className="text-sm text-white/60">{data.hero.ctaSecondary}</span>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm">
              {data.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-[#00C2A8]">{s.value}</div>
                  <div className="text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              className="overflow-hidden rounded-3xl border border-white/10"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img
                src={data.hero.coverImage.src}
                alt={data.hero.coverImage.alt}
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 text-foreground shadow-lg md:block">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {data.status}
              </div>
              <div className="text-lg font-bold text-[#12344D]">A partir de {data.hero.priceFrom}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 — Affordability narrative */}
      <section className="border-b border-border bg-secondary/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00C2A8]/30 bg-[#00C2A8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0a7d6e]">
              {data.affordability.eyebrow}
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#12344D] md:text-4xl">
              {data.affordability.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{data.affordability.subtitle}</p>
          </Reveal>
          <StaggerGroup className="grid gap-5 md:grid-cols-3" stagger={0.15}>
            {data.affordability.items.map((h) => (
              <StaggerItem key={h.title}>
                <div
                  className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00C2A8] hover:shadow-[0_20px_50px_-20px_rgba(0,194,168,0.5)]"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#00C2A8]/10 text-[#00C2A8] transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#12344D]">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Step 3 — Bureaucracy objection */}
      <section className="relative overflow-hidden py-16 text-white md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, rgba(0,194,168,0.35), transparent 45%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7FE7D8]">
              {data.bureaucracy.eyebrow}
            </div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              {data.bureaucracy.title}
            </h2>
            <p className="mt-4 text-white/85 md:text-lg">{data.bureaucracy.body}</p>
            <div className="mt-8">
              <CTAButton>Falar com nosso especialista</CTAButton>
            </div>
          </Reveal>
          <StaggerGroup className="space-y-3" stagger={0.1}>
            {data.bureaucracy.bullets.map((b) => (
              <StaggerItem key={b}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-[#00C2A8]/40 hover:bg-white/10">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00C2A8] text-[#12344D]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="font-medium">{b}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Step 4 — Gallery / Lazer */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mb-10 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00C2A8]/30 bg-[#00C2A8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0a7d6e]">
              {data.gallery.eyebrow}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
              {data.gallery.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{data.gallery.subtitle}</p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" stagger={0.08}>
            <StaggerItem className="col-span-2 row-span-2 overflow-hidden rounded-2xl">
              <img
                src={data.gallery.images[0].src}
                alt={data.gallery.images[0].alt}
                loading="lazy"
                width={1280}
                height={1280}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </StaggerItem>
            {data.gallery.images.slice(1).map((g, i) => (
              <StaggerItem key={i} className="overflow-hidden rounded-2xl">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-48 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-full"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Location */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
                {data.location.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{data.location.subtitle}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {data.location.items.map((t) => (
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
                title="Mapa"
                src={data.location.mapEmbedUrl}
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
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#12344D] md:text-4xl">
                {data.plantas.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{data.plantas.subtitle}</p>
            </div>
            <Tour3DDialog />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {data.plantas.items.map((p) => (
              <div
                key={p.label}
                className="overflow-hidden rounded-2xl border border-border bg-white p-4"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={p.src}
                  alt={`Planta ${p.label}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="mx-auto h-auto w-full max-w-md object-contain"
                />
                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold uppercase tracking-wider text-[#00C2A8]">
                    {p.label}
                  </div>
                  <div className="text-lg font-bold text-[#12344D]">{p.desc}</div>
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
              {data.faq.title}
            </h2>
          </div>
          <div className="space-y-3">
            {data.faq.items.map((f, i) => {
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

      {/* Final CTA + Lead Form */}
      <section
        id="contato"
        className="relative overflow-hidden py-20 text-white"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <Reveal className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              {data.finalCta.title}
            </h2>
            <p className="mt-4 text-white/80 md:text-lg">{data.finalCta.subtitle}</p>
            <div className="mt-8 flex justify-center md:justify-start">
              <CTAButton>{data.finalCta.button}</CTAButton>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="mb-4 text-xl font-bold">{data.finalCta.formTitle}</h3>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-3">
            <img src={data.brand.logoUrl} alt={data.brand.name} className="h-7 w-auto" />
          </div>
          <div>© {new Date().getFullYear()} {data.brand.name}. Imagens meramente ilustrativas.</div>
        </div>
      </footer>

      {/* Floating WhatsApp (desktop) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 md:inline-flex md:h-16 md:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      </a>

      {/* Sticky mobile CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center gap-3 bg-[#25D366] px-4 py-4 text-base font-semibold text-white shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.3)] md:hidden"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Falar com Corretor
      </a>
    </div>
  );
}
