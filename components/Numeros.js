const stats = [
  {
    valor: "60+",
    label: "Negócios impulsionados",
    desc: "empreendedores que pararam de depender do improviso",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    valor: "7 dias",
    label: "Média de entrega",
    desc: "do briefing ao projeto no ar, sem enrolação",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    valor: "80%",
    label: "Mais barato no frete",
    desc: "via Melhor Envio integrado na sua loja",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    valor: "R$0",
    label: "Mensalidade de plataforma",
    desc: "na loja Next.js — o site é 100% seu, para sempre",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
];

export default function Numeros() {
  return (
    <section className="py-16 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="group relative bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                {s.icon}
              </div>

              {/* Número */}
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent leading-none mb-2">
                {s.valor}
              </div>

              {/* Label */}
              <div className="text-white text-sm font-bold mb-1">{s.label}</div>

              {/* Desc */}
              <div className="text-gray-600 text-xs leading-relaxed">{s.desc}</div>

              {/* Glow bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
