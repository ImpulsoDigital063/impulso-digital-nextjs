"use client";

const servicos = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titulo: "Landing Page Profissional",
    precoMin: "R$ 499",
    precoMax: "R$ 2.990",
    descricao:
      "Página de alta conversão para capturar leads e vender seu produto ou serviço com design exclusivo e SEO otimizado.",
    itens: [
      "Design responsivo e exclusivo",
      "SEO técnico otimizado",
      "Formulário de contato + CRM",
      "Integração WhatsApp",
      "Entrega em 5 dias úteis",
    ],
    destaque: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    titulo: "Loja Online Completa",
    precoMin: "R$ 599",
    precoMax: "R$ 3.999",
    descricao:
      "E-commerce completo para vender 24h por dia com pagamento integrado, gestão de estoque e painel administrativo.",
    itens: [
      "Catálogo ilimitado de produtos",
      "Checkout com Pix e cartão",
      "Painel de gestão intuitivo",
      "Integração Correios/frete",
      "Entrega em 10 dias úteis",
    ],
    destaque: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    titulo: "Site Agência/Portfólio",
    precoMin: "R$ 799",
    precoMax: "R$ 4.999",
    descricao:
      "Site profissional multi-página para agências, freelancers e criativos que precisam impressionar e fechar contratos.",
    itens: [
      "Até 10 páginas customizadas",
      "Galeria de portfólio dinâmica",
      "Blog integrado",
      "Google Analytics + Search Console",
      "Entrega em 12 dias úteis",
    ],
    destaque: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    titulo: "Consultoria + Site",
    precoMin: "R$ 999",
    precoMax: "R$ 5.999",
    descricao:
      "Pacote completo com estratégia digital, site profissional e plano de ação personalizado para escalar seu negócio.",
    itens: [
      "2h de consultoria estratégica",
      "Site completo incluso",
      "Plano de ação personalizado",
      "Gravação da sessão em HD",
      "Suporte por 60 dias",
    ],
    destaque: false,
  },
];

const WHATSAPP_NUMBER = "5511999999999";

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className={`relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col ${
                s.destaque
                  ? "bg-gradient-to-b from-accent/10 to-dark-card border-accent/50 shadow-xl shadow-accent/10"
                  : "bg-dark-card border-dark-border hover:border-primary/40 hover:shadow-primary/10"
              }`}
            >
              {/* Badge MAIS POPULAR */}
              {s.destaque && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                  MAIS POPULAR
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  s.destaque
                    ? "bg-accent/20 text-accent"
                    : "bg-primary/10 text-[#1d4ed8]"
                }`}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3">{s.titulo}</h3>

              {/* Price range */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">
                  Investimento
                </div>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-xl font-black text-[#1d4ed8]">
                    {s.precoMin}
                  </span>
                  <span className="text-gray-600 text-sm">até</span>
                  <span className="text-xl font-black text-[#1d4ed8]">
                    {s.precoMax}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                {s.descricao}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {s.itens.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={buildWhatsApp(s.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center text-sm font-bold py-3 px-5 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 bg-[#ff6b35] hover:bg-[#e55a25] text-white shadow-lg shadow-[#ff6b35]/20"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm mb-2">
            * Todos os planos incluem hospedagem gratuita por 1 ano, certificado SSL e suporte pós-entrega.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Preciso%20de%20um%20projeto%20personalizado`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:underline text-sm"
          >
            Precisa de algo personalizado? Fale conosco →
          </a>
        </div>
      </div>
    </section>
  );
}
