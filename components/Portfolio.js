"use client";

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
          <p className="text-gray-500 mb-6 text-sm">
            Quer ver mais cases ou conversar com algum cliente nosso?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999?text=Quero%20ver%20mais%20cases%20da%20Impulso%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver mais projetos
            </a>
            <a
              href="https://wa.me/5511999999999?text=Quero%20iniciar%20meu%20projeto"
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
