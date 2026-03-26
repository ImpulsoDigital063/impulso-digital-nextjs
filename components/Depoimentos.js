"use client";

const depoimentos = [
  {
    nome: "Mariana Costa",
    cargo: "Proprietária — Clínica Bella Vita",
    texto:
      "Em 7 dias meu site estava no ar e já na primeira semana recebi 23 leads qualificados. O investimento se pagou em menos de 30 dias. Recomendo demais!",
    nota: 5,
    avatar: "MC",
    cor: "#1d4ed8",
    servico: "Landing Page",
  },
  {
    nome: "Rafael Souza",
    cargo: "Fundador — Empório das Especiarias",
    texto:
      "Minha loja online foi entregue no prazo e superou todas as expectativas. No primeiro mês faturei R$45 mil. A equipe da Impulso Digital é incrível e muito atenciosa!",
    nota: 5,
    avatar: "RS",
    cor: "#ff6b35",
    servico: "Loja Online",
  },
  {
    nome: "João Menezes",
    cargo: "Arquiteto — Studio JM",
    texto:
      "A consultoria me abriu os olhos para oportunidades que eu não via. Em 2 meses fechei 5 contratos premium direto pelo site. Resultado real e comprovado.",
    nota: 5,
    avatar: "JM",
    cor: "#10b981",
    servico: "Consultoria",
  },
];

const trustStats = [
  { value: "200+", label: "Clientes atendidos" },
  { value: "4.9/5", label: "Avaliação média" },
  { value: "98%", label: "Satisfação" },
  { value: "30 dias", label: "Suporte pós-entrega" },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="section-title mt-3">
            O que nossos{" "}
            <span className="gradient-text">clientes dizem</span>
          </h2>
          <p className="section-subtitle">
            Mais de 200 empreendedores já transformaram seus negócios conosco.
            Veja histórias reais de quem já deu o próximo passo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {depoimentos.map((d, idx) => (
            <div
              key={idx}
              className="bg-dark-card border border-dark-border rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30 group"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: d.nota }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-dark-border group-hover:text-primary/20 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Text */}
              <blockquote className="text-gray-300 text-sm leading-relaxed flex-1">
                {d.texto}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${d.cor}, ${d.cor}99)`,
                  }}
                >
                  {d.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-semibold truncate">
                    {d.nome}
                  </div>
                  <div className="text-gray-500 text-xs truncate">{d.cargo}</div>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: d.cor + "20",
                    color: d.cor,
                    border: `1px solid ${d.cor}40`,
                  }}
                >
                  {d.servico}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
          {trustStats.map((item) => (
            <div key={item.label}>
              <div className="text-2xl md:text-3xl font-black gradient-text">
                {item.value}
              </div>
              <div className="text-gray-500 text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
