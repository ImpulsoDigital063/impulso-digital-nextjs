"use client";

import { useState } from "react";

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const cases = [
  {
    id: 1,
    categoria: "Loja Shopify",
    titulo: "GB Nutrition",
    descricao:
      "Loja Shopify com estrutura completa de vendas: catálogo otimizado, checkout integrado via Yampi e foco total em conversão mobile.",
    resultado: "Loja no ar e vendendo em 7 dias",
    metricas: [
      { label: "Prazo de entrega", valor: "7 dias" },
      { label: "Plataforma", valor: "Shopify" },
      { label: "Checkout", valor: "Yampi" },
    ],
    cor: "#10b981",
    tag: "Suplementos",
    imagens: [
      "/cases/gbnutrition-1.png",
      "/cases/gbnutrition-2.png",
    ],
  },
  {
    id: 2,
    categoria: "Landing Page",
    titulo: "EV Suplementos Injetáveis",
    descricao:
      "Landing page de alta conversão para captação de clientes via WhatsApp. Estrutura focada em gerar contato direto e fechar vendas.",
    resultado: "Canal de captação ativo via WhatsApp",
    metricas: [
      { label: "Prazo de entrega", valor: "5 dias" },
      { label: "Stack", valor: "Next.js" },
      { label: "CTA", valor: "WhatsApp" },
    ],
    cor: "#ff6b35",
    tag: "Suplementos",
    imagens: [
      "/cases/evsuplementos-1.png",
      "/cases/evsuplementos-2.png",
    ],
  },
];

function CaseCard({ c }) {
  const [activeImg, setActiveImg] = useState(0);

  const prev = () => setActiveImg((i) => (i === 0 ? c.imagens.length - 1 : i - 1));
  const next = () => setActiveImg((i) => (i === c.imagens.length - 1 ? 0 : i + 1));

  return (
    <div
      className="bg-dark border border-dark-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
    >
      {/* Image gallery */}
      <div className="relative h-56 overflow-hidden bg-dark-card">
        <img
          src={c.imagens[activeImg]}
          alt={`${c.titulo} — imagem ${activeImg + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Prev / Next */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Imagem anterior"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Próxima imagem"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {c.imagens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeImg ? "bg-white scale-125" : "bg-white/40"}`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>

        {/* Tags */}
        <div
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: c.cor + "33", color: c.cor, border: `1px solid ${c.cor}55` }}
        >
          {c.tag}
        </div>
        <div className="absolute top-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full bg-dark/80 text-gray-300 backdrop-blur-sm">
          {c.categoria}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2">{c.titulo}</h3>
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
    <section id="portfolio" className="py-24 bg-dark-card relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src="/images/icon-32.png" alt="" className="w-4 h-4 opacity-70" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Cases de Sucesso</span>
            <img src="/images/icon-32.png" alt="" className="w-4 h-4 opacity-70" />
          </div>
          <h2 className="section-title mt-3">
            Negócios que{" "}
            <span className="gradient-text">deram o impulso.</span>
          </h2>
          <p className="section-subtitle">
            Casos reais de empreendedores que pararam de depender do improviso.{" "}
            <span className="text-white font-semibold">O próximo pode ser o seu.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cases.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex items-center gap-3 bg-dark border border-dark-border rounded-2xl px-8 py-5 mb-8">
            <span className="text-3xl font-black gradient-text">60+</span>
            <div className="text-left">
              <p className="text-white text-sm font-semibold">negócios já deram o impulso</p>
              <p className="text-gray-500 text-xs">o próximo pode ser o seu</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5599992065961?text=Quero%20ver%20mais%20cases%20da%20Impulso%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver mais projetos
            </a>
            <a
              href="https://wa.me/5599992065961?text=Quero%20iniciar%20meu%20projeto"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
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
