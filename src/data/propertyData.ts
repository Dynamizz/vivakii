import logoAsset from "@/assets/vivakii-logo.asset.json";
import fachadaAsset from "@/assets/fachada.jpg.asset.json";
import piscinaAsset from "@/assets/piscina.jpg.asset.json";
import grillAsset from "@/assets/grill.jpg.asset.json";
import salaoAsset from "@/assets/salao-festas.jpg.asset.json";
import pomarAsset from "@/assets/pomar.jpg.asset.json";
import planta38Asset from "@/assets/planta-38.jpg.asset.json";
import planta44Asset from "@/assets/planta-44.jpg.asset.json";
import planta55Asset from "@/assets/planta-55.jpg.asset.json";

export type GalleryImage = { src: string; alt: string };
export type Planta = { src: string; label: string; desc: string };
export type Highlight = { title: string; desc: string };
export type Faq = { q: string; a: string };

export interface PropertyData {
  brand: { name: string; logoUrl: string };
  status: string;
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    priceFrom: string;
    ctaPrimary: string;
    ctaSecondary: string;
    coverImage: GalleryImage;
    stats: { value: string; label: string }[];
  };
  highlights: { title: string; subtitle: string; items: Highlight[] };
  affordability: { eyebrow: string; title: string; subtitle: string; items: Highlight[] };
  bureaucracy: { eyebrow: string; title: string; body: string; bullets: string[] };
  gallery: { eyebrow: string; title: string; subtitle: string; images: GalleryImage[] };
  location: {
    title: string;
    subtitle: string;
    items: string[];
    mapEmbedUrl: string;
  };
  plantas: { title: string; subtitle: string; items: Planta[]; tour3dUrl: string };
  faq: { title: string; items: Faq[] };
  finalCta: { title: string; subtitle: string; button: string; formTitle: string; successMessage: string };
  whatsapp: { phone: string; message: string };
  webhookUrl: string;
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}

/**
 * Central source of truth for the landing page content.
 * To clone for another launch (e.g. Lift, Átrio), copy this file
 * and update values — the page components consume everything from here.
 */
export const propertyData: PropertyData = {
  brand: { name: "Vivakii", logoUrl: logoAsset.url },
  status: "Lançamento",
  hero: {
    badge: "Lançamento • Freguesia do Ó",
    titlePrefix: "Apartamentos de",
    titleHighlight: "2 dormitórios",
    subtitle: "Na Freguesia do Ó, São Paulo. A partir de",
    priceFrom: "R$ 260.000",
    ctaPrimary: "Solicitar tabela de preços",
    ctaSecondary: "Resposta em minutos",
    coverImage: {
      src: fachadaAsset.url,
      alt: "Fachada do empreendimento Vivakii na Freguesia do Ó",
    },
    stats: [
      { value: "2", label: "Dormitórios" },
      { value: "R$ 260k", label: "A partir de" },
      { value: "FGTS", label: "Aceito" },
    ],
  },
  highlights: {
    title: "Tudo o que você precisa",
    subtitle: "Conforto, praticidade e condições facilitadas em um só lugar.",
    items: [
      { title: "2 dormitórios", desc: "Plantas inteligentes e bem distribuídas." },
      { title: "A partir de R$ 260.000", desc: "Condições especiais de lançamento." },
      { title: "Minha Casa Minha Vida", desc: "Condições especiais do programa." },
      { title: "Utilize FGTS", desc: "Use seu saldo na entrada ou parcelas." },
      { title: "Vaga opcional", desc: "Conforme disponibilidade." },
      { title: "Lazer completo", desc: "Piscina, salão de festas, grill e pomar." },
    ],
  },
  affordability: {
    eyebrow: "Cabe no seu bolso",
    title: "O sonho do apartamento próprio com condições que cabem no seu bolso",
    subtitle: "Sem precisar de uma entrada gigantesca para começar.",
    items: [
      {
        title: "Entrada Facilitada",
        desc: "Parcelamento flexível direto com a construtora. Você organiza a entrada no seu ritmo, sem aperto no orçamento.",
      },
      {
        title: "Uso do FGTS",
        desc: "Seu saldo de FGTS pode ser usado na entrada, na amortização ou para reduzir as parcelas do financiamento.",
      },
      {
        title: "Juros Baixos do Minha Casa Minha Vida",
        desc: "Acesso às menores taxas do mercado pelo programa MCMV, com subsídios e condições especiais da Caixa.",
      },
    ],
  },
  bureaucracy: {
    eyebrow: "Sem burocracia",
    title: "Aprovação de Crédito sem Complicações",
    body: "Fazemos toda a assessoria de crédito gratuitamente, inclusive para Autônomos, PJs e Profissionais Liberais. Sem burocracia, sem fila e sem complicação — você cuida do seu sonho, a gente cuida do papel.",
    bullets: [
      "Análise gratuita de perfil",
      "Atende autônomos, PJ e liberais",
      "Documentação simplificada",
    ],
  },
  gallery: {
    eyebrow: "Lazer completo",
    title: "Sua casa não termina na porta do apartamento",
    subtitle:
      "A área de lazer foi pensada para você viver mais — piscina, salão de festas, espaço gourmet e pomar ampliam (e muito) o seu metro quadrado.",
    images: [
      { src: fachadaAsset.url, alt: "Fachada do empreendimento Vivakii" },
      { src: piscinaAsset.url, alt: "Piscina com espreguiçadeiras" },
      { src: salaoAsset.url, alt: "Salão de festas" },
      { src: grillAsset.url, alt: "Espaço gourmet com churrasqueira" },
      { src: pomarAsset.url, alt: "Pomar e área verde" },
    ],
  },
  location: {
    title: "Localização privilegiada",
    subtitle: "Freguesia do Ó, zona norte de São Paulo. Tudo perto de você.",
    items: [
      "3 min da Estação Freguesia do Ó",
      "Próximo ao Terminal Pirituba",
      "Em frente ao Assaí",
      "Fácil acesso às Marginais",
    ],
    mapEmbedUrl:
      "https://www.google.com/maps?q=Freguesia%20do%20%C3%93%2C%20S%C3%A3o%20Paulo&output=embed",
  },
  plantas: {
    title: "Plantas",
    subtitle: "Opções de planta pensadas para o seu dia a dia.",
    items: [
      { src: planta38Asset.url, label: "38 m²", desc: "2 dormitórios" },
      { src: planta44Asset.url, label: "44 m²", desc: "2 dormitórios" },
      { src: planta55Asset.url, label: "55 m²", desc: "3 dormitórios" },
    ],
    // Replace with Matterport / Kuula embed URL when ready
    tour3dUrl: "https://my.matterport.com/show/?m=zEWsxhZpGba",
  },
  faq: {
    title: "Perguntas frequentes",
    items: [
      {
        q: "Posso usar FGTS?",
        a: "Sim. O empreendimento aceita o uso do saldo do FGTS como entrada ou para amortização do financiamento, conforme as regras da Caixa Econômica Federal.",
      },
      {
        q: "Tem vaga?",
        a: "Vaga opcional, conforme disponibilidade. Consulte nosso time no WhatsApp para verificar as unidades com vaga disponíveis.",
      },
      {
        q: "Como funciona a entrada?",
        a: "Trabalhamos com condições facilitadas: entrada parcelada direto com a construtora, possibilidade de uso do FGTS e financiamento pela Caixa via Minha Casa Minha Vida.",
      },
      {
        q: "Qual a previsão de entrega?",
        a: "Temos unidades a pronta entrega e lançamentos com entrega prevista entre 2026 e 2030. Fale com nosso consultor no WhatsApp para conferir as opções disponíveis.",
      },
    ],
  },
  finalCta: {
    title: "Solicite tabela atualizada e disponibilidade",
    subtitle: "Atendimento humano e rápido, direto pelo WhatsApp.",
    button: "Receber tabela de preços",
  },
  whatsapp: {
    phone: "5511920983075",
    message:
      "Olá! Quero a tabela de preços e disponibilidade do empreendimento Vivakii na Freguesia do Ó.",
  },
  // Plug your automation endpoint here (n8n, Make, Zapier, FastAPI, etc.)
  webhookUrl: "https://webhook.site/your-endpoint-id",
  seo: {
    title: "Vivakii — Apartamentos na Freguesia do Ó | São Paulo",
    description:
      "Apartamentos de 2 dormitórios na Freguesia do Ó a partir de R$ 260.000. Use FGTS e Minha Casa Minha Vida. Solicite a tabela no WhatsApp.",
    ogTitle: "Vivakii — Apartamentos na Freguesia do Ó",
    ogDescription:
      "Apartamentos de 2 dormitórios a partir de R$ 260.000 na Freguesia do Ó, São Paulo.",
  },
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const msg = encodeURIComponent(customMessage ?? propertyData.whatsapp.message);
  return `https://wa.me/${propertyData.whatsapp.phone}?text=${msg}`;
};
