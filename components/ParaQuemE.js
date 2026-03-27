"use client";

const perfis = [
  {
    emoji: "📱",
    titulo: "Vende pelo Instagram ou WhatsApp",
    dor: "Perde cliente todo dia por falta de um lugar profissional para mandar.",
    solucao: "Uma landing page ou loja que converte enquanto você dorme.",
    cor: "#10b981",
  },
  {
    emoji: "🏪",
    titulo: "Tem loja física",
    dor: "Ninguém te acha no Google. Quem passa na rua é tudo que você tem.",
    solucao: "Presença digital que traz cliente antes de ele sair de casa.",
    cor: "#3b82f6",
  },
  {
    emoji: "📦",
    titulo: "Quer montar um e-commerce",
    dor: "Não sabe por onde começar, tem medo de investir errado e travar.",
    solucao: "Do zero ao online em até 7 dias, sem dor de cabeça técnica.",
    cor: "#8b5cf6",
  },
  {
    emoji: "🔄",
    titulo: "Já tem site mas não converte",
    dor: "Recebe visita, mas ninguém compra. Parece que o site não faz nada.",
    solucao: "Diagnóstico + reestruturação focada em resultado real.",
    cor: "#f59e0b",
  },
];

export default function ParaQuemE() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Para quem é
          </span>
          <h2 className="section-title">
            Você se{" "}
            <span className="gradient-text">reconhece aqui?</span>
          </h2>
          <p className="section-subtitle">
            Se um desses cenários é o seu, a Impulso Digital foi feita para você.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {perfis.map((p) => (
            <div
              key={p.titulo}
              className="relative bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-300 hover:border-white/10"
            >
              {/* Linha colorida top */}
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60"
                style={{ backgroundColor: p.cor }}
              />

              {/* Emoji */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: p.cor + "15", border: `1px solid ${p.cor}25` }}
              >
                {p.emoji}
              </div>

              {/* Título */}
              <h3 className="text-white font-bold text-base leading-snug">
                {p.titulo}
              </h3>

              {/* Dor */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {p.dor}
              </p>

              {/* Divisor */}
              <div className="h-px bg-white/[0.06]" />

              {/* Solução */}
              <p className="text-sm font-semibold" style={{ color: p.cor }}>
                → {p.solucao}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
