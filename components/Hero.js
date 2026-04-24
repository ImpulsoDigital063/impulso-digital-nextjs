"use client";

import { useCounterOnView } from "@/hooks/useCounterOnView";

const WHATSAPP_NUMBER = "556392920080";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vim pelo site e quero saber mais sobre os serviços da Impulso Digital."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
      {/* ── DESKTOP: foto na metade direita ── */}
      <div className="hidden md:block absolute right-0 top-0 w-[58%] h-full pointer-events-none">
        <img src="/images/foto-eduardo.jpg" alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/20" />
      </div>

      {/* ── MOBILE: foto no topo, rosto nítido, apaga dos ombros pra baixo ── */}
      <div className="block md:hidden absolute top-0 left-0 right-0 h-[80vh] pointer-events-none">
        <img
          src="/images/foto-eduardo.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 5%" }}
        />
        {/* Gradiente suave: rosto nítido → corpo vai apagando devagar */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, transparent 20%, rgba(10,10,10,0.15) 38%, rgba(10,10,10,0.45) 55%, rgba(10,10,10,0.75) 70%, rgba(10,10,10,1) 88%)"
        }} />
      </div>

      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-5 md:px-6 pt-[44vh] sm:pt-[48vh] pb-10 md:py-32">
        <div className="max-w-xl">
            <h1 className="sf text-[2.1rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
              Seu negócio merece{" "}
              <span className="gradient-text-hybrid">ser encontrado.</span>
            </h1>

            <p className="sf text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-lg">
              Enquanto você vende pelo Instagram, pelo WhatsApp ou depende do movimento da loja física,{" "}
              <span className="text-white font-semibold">seu concorrente está sendo encontrado no Google — e fechando vendas enquanto dorme.</span>
            </p>

            {/* Service chips */}
            <div className="sf flex flex-wrap gap-1.5 sm:gap-2 mb-8 md:mb-10">
              {[
                "Landing Page",
                "Loja Shopify",
                "Site Next.js",
                "Consultoria",
              ].map((s) => (
                <span
                  key={s}
                  className="text-[11px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-dark-card border border-dark-border text-gray-400"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="sf flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="neon-btn text-center">
                <WhatsAppIcon />
                Quero garantir minha vaga
              </a>
              <a href="#servicos" className="btn-outline text-center justify-center">
                Ver como funciona
              </a>
            </div>

            {/* Stats */}
            <div className="sf grid grid-cols-3 gap-3 sm:gap-4 mt-10 md:mt-14 pt-8 md:pt-10 border-t border-dark-border">
              {[
                { value: "60+", label: "Negócios impulsionados", sub: "e crescendo" },
                { value: "7 dias", label: "Média de entrega", sub: "do briefing ao ar" },
                { value: "R$0", label: "Mensalidade", sub: "de plataforma" },
              ].map((stat) => (
                <HeroStat key={stat.label} stat={stat} />
              ))}
            </div>
        </div>
      </div>

      {/* Scroll indicator — só no mobile */}
      <div className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        <span className="text-gray-600 text-[11px] uppercase tracking-widest mb-1">deslize</span>
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
              opacity: 0.2 + i * 0.35,
              animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        ))}
      </div>
    </section>
  );
}

function HeroStat({ stat }) {
  const { ref, display } = useCounterOnView(stat.value);
  return (
    <div className="group">
      <div ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text-hybrid leading-none tabular-nums">
        {display}
      </div>
      <div className="text-white text-[11px] sm:text-xs font-semibold mt-1 leading-tight">{stat.label}</div>
      <div className="text-gray-600 text-[10px] sm:text-[11px] mt-0.5 leading-tight">{stat.sub}</div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
