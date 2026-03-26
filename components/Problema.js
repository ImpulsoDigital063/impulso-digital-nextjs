const pontos = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    texto: "Não tem um site profissional",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    texto: "Não consegue transformar visitas em vendas",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    texto: "Depende apenas do Instagram",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    texto: "Perde clientes por falta de estrutura",
  },
];

export default function Problema() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Linha separadora top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* Blob de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Label */}
          <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-widest mb-6">
            O Problema
          </span>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Seu negócio está{" "}
            <span className="text-red-400">perdendo clientes</span>{" "}
            todos os dias
          </h2>

          {/* Subtexto */}
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            A maioria dos negócios depende apenas do Instagram e não consegue
            transformar visitas em vendas.
          </p>

          {/* Lista de pontos */}
          <ul className="grid sm:grid-cols-2 gap-4 text-left mb-14">
            {pontos.map((p) => (
              <li
                key={p.texto}
                className="flex items-start gap-4 bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4"
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
          <p className="text-gray-500 text-base md:text-lg leading-relaxed border-t border-white/[0.06] pt-10">
            Enquanto isso, outros negócios estão vendendo todos os dias com uma
            estrutura bem definida.{" "}
            <span className="text-white font-semibold">
              A diferença não está no produto, está na forma como ele é
              apresentado.
            </span>
          </p>

        </div>
      </div>

      {/* Linha separadora bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
