"use client";

const cases = [
  {
    id: 1,
    categoria: "Landing Page",
    titulo: "Clínica Estética Bella Vita",
    descricao:
      "Landing page de alta conversão para captação de leads de procedimentos estéticos com agendamento online integrado.",
    resultado: "+320% em agendamentos",
    metricas: [
      { label: "Taxa de conversão", valor: "8,4%" },
      { label: "Leads/mês", valor: "240+" },
      { label: "ROI", valor: "12x" },
    ],
    cor: "#1d4ed8",
    emoji: "💆‍♀️",
    tag: "Saúde & Estética",
  },
  {
    id: 2,
    categoria: "Loja Online",
    titulo: "Empório das Especiarias",
    descricao:
      "E-commerce completo para venda de temperos e especiarias artesanais, com integração de pagamento e logística.",
    resultado: "R$ 45k em vendas no 1º mês",
    metricas: [
      { label: "Pedidos/mês", valor: "380+" },
      { label: "Ticket médio", valor: "R$ 118" },
      { label: "Retorno", valor: "7x" },
    ],
    cor: "#ff6b35",
    emoji: "🌶️",
    tag: "Alimentação",
  },
  {
    id: 3,
    categoria: "Consultoria + Site",
    titulo: "Arquiteto João Menezes",
    descricao:
      "Estratégia digital completa com site portfólio profissional e presença nas redes sociais para captação de projetos premium.",
    resultado: "+5 contratos em 60 dias",
    metricas: [
      { label: "Visitas/mês", valor: "2.800+" },
      { label: "Projetos fechados", valor: "5" },
      { label: "Valor médio", valor: "R$ 18k" },
    ],
    cor: "#10b981",
    emoji: "🏛️",
    tag: "Arquitetura",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-dark-card relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Cases de Sucesso
          </span>
          <h2 className="section-title mt-3">
            Resultados reais de{" "}
            <span className="gradient-text">clientes reais</span>
          </h2>
          <p className="section-subtitle">
            Cada projeto é único. Conheça algumas histórias de transformação
            digital que ajudamos a construir.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className="bg-dark border border-dark-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              style={{ "--card-color": c.cor }}
            >
              {/* Image area */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${c.cor}22, ${c.cor}44)`,
                  borderBottom: `1px solid ${c.cor}33`,
                }}
              >
                <span className="text-7xl select-none group-hover:scale-110 transition-transform duration-300">
                  {c.emoji}
                </span>
                <div
                  className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: c.cor + "33",
                    color: c.cor,
                    border: `1px solid ${c.cor}55`,
                  }}
                >
                  {c.tag}
                </div>
                <div
                  className="absolute top-4 right-4 text-xs font-medium px-3 py-1.5 rounded-full bg-dark/80 text-gray-300 backdrop-blur-sm"
                >
                  {c.categoria}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{c.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {c.descricao}
                </p>

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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-6">
            Quer ver mais cases ou falar com algum cliente?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Quero%20ver%20mais%20cases%20da%20Impulso%20Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver mais projetos
          </a>
        </div>
      </div>
    </section>
  );
}
