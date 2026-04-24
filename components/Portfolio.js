"use client";

import { useState, useEffect, useRef } from "react";

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const cases = [
  {
    id: 2,
    categoria: "Landing Page",
    titulo: "EV Suplementos Injetáveis",
    url: "evsuplementosinjetaveis.com",
    descricao:
      "LP de farmacêutica em Palmas/TO — atendimento domiciliar e protocolos personalizados. Estrutura focada em captar avaliação gratuita via WhatsApp.",
    resultado: "Canal ativo de captação via WhatsApp",
    metricas: [
      { label: "Entrega", valor: "5 dias" },
      { label: "Stack", valor: "Next.js" },
      { label: "CTA", valor: "WhatsApp" },
    ],
    cor: "#b91c1c",
    tag: "Saúde",
    imagens: [
      "/cases/evsuplementos-novo-desktop-1.png",
      "/cases/evsuplementos-novo-mobile-1.png",
      "/cases/evsuplementos-novo-desktop-3.png",
      "/cases/evsuplementos-novo-desktop-4.png",
      "/cases/evsuplementos-novo-mobile-4.png",
      "/cases/evsuplementos-novo-desktop-5.png",
    ],
  },
  {
    id: 3,
    categoria: "Landing Page",
    titulo: "Criativos do Céu",
    url: "criativosdoceu.com",
    descricao:
      "LP de membership de templates editáveis para igrejas — venda recorrente via Kiwify em plano mensal/anual. Grid de artes com clima premium e CTA único.",
    resultado: "Canal de venda recorrente ativo",
    metricas: [
      { label: "Entrega", valor: "6 dias" },
      { label: "Stack", valor: "Next.js" },
      { label: "Modelo", valor: "Assinatura" },
    ],
    cor: "#d4af37",
    tag: "Igreja",
    imagens: [
      "/cases/criativosdoceu-desktop-1.png",
      "/cases/criativosdoceu-mobile-1.png",
      "/cases/criativosdoceu-desktop-2.png",
      "/cases/criativosdoceu-mobile-2.png",
      "/cases/criativosdoceu-desktop-3.png",
      "/cases/criativosdoceu-desktop-4.png",
    ],
  },
  {
    id: 1,
    categoria: "Loja Shopify",
    titulo: "GB Nutrition",
    url: "gbnutrition.online",
    descricao:
      "Loja completa com catálogo, carrinho inteligente, checkout Yampi e frete calculado via Melhor Envio. Cliente fecha sem sair da loja.",
    resultado: "Loja no ar e vendendo em 7 dias",
    metricas: [
      { label: "Entrega", valor: "7 dias" },
      { label: "Plataforma", valor: "Shopify" },
      { label: "Checkout", valor: "Yampi" },
    ],
    cor: "#10b981",
    tag: "Suplementos",
    imagens: [
      "/cases/gbnutrition-novo-desktop-1.png",
      "/cases/gbnutrition-novo-desktop-3.png",
      "/cases/gbnutrition-novo-flow-desktop-pdp.png",
      "/cases/gbnutrition-novo-flow-desktop-carrinho.png",
      "/cases/gbnutrition-novo-flow-desktop-checkout.png",
      "/cases/gbnutrition-novo-mobile-1.png",
      "/cases/gbnutrition-novo-flow-mobile-pdp.png",
    ],
  },
  {
    id: 4,
    categoria: "SaaS Next.js",
    titulo: "AgendaPRO",
    url: "agendapro.net.br",
    descricao:
      "Sistema completo de agenda para barbearia: painel do dono, agendamento público do cliente com pontos e painel do profissional comissionado com comissão calculada automática.",
    resultado: "3 painéis, 1 sistema — rodando em produção",
    metricas: [
      { label: "Stack", valor: "Next.js" },
      { label: "Painéis", valor: "3" },
      { label: "Pontos", valor: "Nativos" },
    ],
    cor: "#3b82f6",
    tag: "Barbearia",
    imagens: [
      "/cases/agendapro-admin-agenda-desktop.png",
      "/cases/agendapro-admin-financeiro-desktop.png",
      "/cases/agendapro-admin-clientes-desktop.png",
      "/cases/agendapro-cliente-lp-desktop.png",
      "/cases/agendapro-cliente-agendar-4-horario-desktop-selecionado.png",
      "/cases/agendapro-cliente-pontos-desktop.png",
      "/cases/agendapro-admin-config-desktop.png",
      "/cases/agendapro-cliente-lp-mobile.png",
    ],
  },
];

function CaseCard({ c }) {
  const [activeImg, setActiveImg] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardRef = useRef(null);

  const prev = () => setActiveImg((i) => (i === 0 ? c.imagens.length - 1 : i - 1));
  const next = () => setActiveImg((i) => (i === c.imagens.length - 1 ? 0 : i + 1));

  // Autoplay: avança 1 slide a cada 3s, pausa no hover e quando fora do viewport
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveImg((i) => (i === c.imagens.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(id);
  }, [isPaused, c.imagens.length]);

  // Pausa carrossel quando o card sai do viewport (economia + sincronia ao voltar)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setIsPaused((p) => (entry.isIntersecting ? false : true)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="bg-dark border border-dark-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30 group"
    >
      {/* Image gallery — fade transition */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-dark-card">
        {c.imagens.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${c.titulo} — print ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-out ${
              i === activeImg ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradiente top pra tags destacarem */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Imagem anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Próxima imagem"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Progress dots + contador */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {c.imagens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === activeImg ? "bg-white w-6" : "bg-white/40 w-1.5 hover:bg-white/70"
              }`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>

        {/* Tags */}
        <div
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm"
          style={{ backgroundColor: c.cor + "33", color: c.cor, border: `1px solid ${c.cor}55` }}
        >
          {c.tag}
        </div>
        <div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-dark/80 text-gray-200 backdrop-blur-sm">
          {c.categoria}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-white">{c.titulo}</h3>
          <span className="text-[11px] text-gray-600 font-medium truncate max-w-[45%]">{c.url}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{c.descricao}</p>

        {/* Result highlight */}
        <div
          className="rounded-xl px-4 py-3 mb-5 text-center"
          style={{ backgroundColor: c.cor + "15", border: `1px solid ${c.cor}30` }}
        >
          <span className="text-sm font-bold" style={{ color: c.cor }}>
            {c.resultado}
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {c.metricas.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-white font-bold text-sm">{m.valor}</div>
              <div className="text-gray-600 text-xs mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-dark-card relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="sf flex items-center justify-center gap-2 mb-1">
            <img src="/images/icon-32.png" alt="" className="w-4 h-4 opacity-70" />
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">Cases de Sucesso</span>
            <img src="/images/icon-32.png" alt="" className="w-4 h-4 opacity-70" />
          </div>
          <h2 className="sf section-title mt-3">
            Negócios que{" "}
            <span className="gradient-text-hybrid">deram o impulso.</span>
          </h2>
          <p className="sf section-subtitle">
            Casos reais de empreendedores que pararam de depender do improviso.{" "}
            <span className="text-white font-semibold">O próximo pode ser o seu.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 max-w-7xl mx-auto">
          {cases.map((c) => (
            <div key={c.id} className="sf">
              <CaseCard c={c} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="sf text-center mt-12 md:mt-14">
          <div className="inline-flex items-center gap-3 bg-dark border border-dark-border rounded-2xl px-6 sm:px-8 py-4 sm:py-5 mb-6 md:mb-8">
            <span className="text-2xl sm:text-3xl font-black gradient-text-hybrid">60+</span>
            <div className="text-left">
              <p className="text-white text-xs sm:text-sm font-semibold">negócios já deram o impulso</p>
              <p className="text-gray-500 text-[11px] sm:text-xs">o próximo pode ser o seu</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/556392920080?text=Quero%20ver%20mais%20cases%20da%20Impulso%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center"
            >
              Ver mais projetos
            </a>
            <a
              href="https://wa.me/556392920080?text=Quero%20iniciar%20meu%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn justify-center"
            >
              <WhatsAppIcon />
              Quero resultado assim
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
