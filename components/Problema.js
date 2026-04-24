const pontos = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    texto: "Seu cliente pesquisa no Google e não te acha — encontra o concorrente",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    texto: "Refém do algoritmo — quando o Instagram cai, suas vendas caem junto",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    texto: "Passa credibilidade errada — cliente desconfia antes de comprar",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    texto: "Perde horas respondendo direct e WhatsApp que poderiam estar no automático",
  },
];

export default function Problema() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Linha separadora top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* Blob de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <span className="sf inline-block text-red-400 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-5 md:mb-6">
            O Problema
          </span>

          {/* Título */}
          <h2 className="sf text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 md:mb-6">
            Você trabalha duro.{" "}
            <span className="text-red-400">O cliente não te acha.</span>
          </h2>

          {/* Subtexto */}
          <p className="sf text-gray-400 text-base sm:text-lg leading-relaxed mb-10 md:mb-12">
            Não é falta de esforço. É falta de estrutura.{" "}
            Todo dia, clientes prontos para comprar procuram o que você vende — e fecham com quem aparece primeiro.{" "}
            <span className="text-white font-semibold">Esse alguém poderia ser você.</span>
          </p>

          {/* Lista de pontos */}
          <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-left mb-12 md:mb-14">
            {pontos.map((p) => (
              <li
                key={p.texto}
                className="sf flex items-start gap-3 sm:gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 sm:px-5 py-4"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mt-0.5">
                  {p.icon}
                </span>
                <span className="text-gray-300 text-sm leading-relaxed pt-1.5">
                  {p.texto}
                </span>
              </li>
            ))}
          </ul>

          {/* Parágrafo final */}
          <p className="sf text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed border-t border-white/[0.06] pt-8 md:pt-10">
            A virada não acontece quando você trabalha mais.{" "}
            <span className="text-white font-semibold">
              Acontece quando você para de depender do improviso e começa a ter uma estrutura que vende por você.
            </span>
          </p>

        </div>
      </div>

      {/* Linha separadora bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
