"use client";

const bullets = [
  {
    titulo: "Cores e estilo",
    desc: "Você vê a paleta, a tipografia e o clima visual do site antes de a gente começar a montar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    titulo: "O que cada página vai ter",
    desc: "Um mapa simples, sem jargão: o que aparece no topo, no meio e no fim de cada tela.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    titulo: "Referências que vou usar",
    desc: "Mostro de onde vem cada decisão — você sabe exatamente o que esperar antes do projeto começar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
  },
];

export default function Guarantee() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="sf inline-flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-5 md:mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Garantia de Alinhamento
            </span>

            <h2 className="sf text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 md:mb-6">
              Você só segue se{" "}
              <span className="gradient-text-hybrid">for a cara do seu negócio.</span>
            </h2>

            <p className="sf text-gray-400 text-base sm:text-lg leading-relaxed">
              Nos <span className="text-white font-semibold">3 primeiros dias</span> você recebe uma prévia visual do site — cores, estilo, e o que vai aparecer em cada página.{" "}
              <span className="text-white font-semibold">Se não for a cara do seu negócio, devolvo 100% e paramos aí.</span>
            </p>
          </div>

          {/* Bullets */}
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {bullets.map((b) => (
              <div
                key={b.titulo}
                className="sf bg-dark-card border border-dark-border rounded-2xl p-5 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  {b.icon}
                </div>
                <h3 className="text-white text-base font-bold mb-2 leading-tight">{b.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Reforço */}
          <div className="sf mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Risco zero
            </span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span className="text-gray-500 text-sm">Devolução integral nos 3 primeiros dias</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
