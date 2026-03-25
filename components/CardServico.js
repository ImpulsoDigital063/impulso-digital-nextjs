"use client";

const servicos = [
  {
    icon: "🚀",
    titulo: "Landing Page",
    preco: "R$ 499",
    descricao:
      "Página de alta conversão criada para capturar leads e vender seu produto ou serviço de forma profissional.",
    itens: [
      "Design responsivo e moderno",
      "Otimização SEO básica",
      "Formulário de contato",
      "Integração WhatsApp",
      "Entrega em 5 dias úteis",
    ],
    destaque: false,
    cor: "primary",
  },
  {
    icon: "🛍️",
    titulo: "Loja Online",
    preco: "R$ 599",
    descricao:
      "E-commerce completo para você vender seus produtos 24h por dia com pagamento integrado e gestão fácil.",
    itens: [
      "Catálogo ilimitado de produtos",
      "Checkout com Pix e cartão",
      "Painel de gestão intuitivo",
      "Integração Correios/frete",
      "Entrega em 10 dias úteis",
    ],
    destaque: true,
    cor: "accent",
  },
  {
    icon: "💡",
    titulo: "Consultoria Digital",
    preco: "R$ 299",
    descricao:
      "Sessão estratégica 1:1 para mapear oportunidades e criar um plano de ação para o seu negócio digital.",
    itens: [
      "2h de consultoria ao vivo",
      "Análise do seu mercado",
      "Plano de ação personalizado",
      "Gravação da sessão",
      "Suporte por 30 dias",
    ],
    destaque: false,
    cor: "primary",
  },
];

const WHATSAPP_NUMBER = "5511999999999";

function buildWhatsApp(servico) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no serviço de ${servico} da Impulso Digital. Podem me passar mais detalhes?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

export default function CardServico() {
  return (
    <section id="servicos" className="py-24 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="section-title mt-3">
            Soluções para cada{" "}
            <span className="gradient-text">etapa do seu negócio</span>
          </h2>
          <p className="section-subtitle">
            Do zero ao digital com preços acessíveis e resultados comprovados.
            Escolha o plano ideal para você.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
                s.destaque
                  ? "bg-gradient-to-b from-primary/20 to-dark-card border-primary/60 shadow-xl shadow-primary/10"
                  : "bg-dark-card border-dark-border hover:border-primary/40 hover:shadow-primary/10"
              }`}
            >
              {s.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  MAIS POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{s.icon}</div>

              {/* Title & Price */}
              <h3 className="text-xl font-bold text-white mb-1">{s.titulo}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span
                  className={`text-3xl font-black ${
                    s.destaque ? "text-accent" : "text-primary-light"
                  }`}
                >
                  {s.preco}
                </span>
                <span className="text-gray-500 text-sm">/ projeto</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {s.descricao}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {s.itens.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={buildWhatsApp(s.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  s.destaque
                    ? "bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/30"
                    : "bg-primary/10 hover:bg-primary text-primary-light hover:text-white border border-primary/30 hover:border-primary"
                }`}
              >
                Quero este plano
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-600 text-sm mt-10">
          * Todos os planos incluem hospedagem gratuita por 1 ano e certificado
          SSL.{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:underline"
          >
            Precisa de algo personalizado?
          </a>
        </p>
      </div>
    </section>
  );
}
