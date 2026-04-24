"use client";

const WHATSAPP_NUMBER = "556392920080";

function buildWhatsApp(servico) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no serviço de ${servico} da Impulso Digital. Podem me passar mais detalhes?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

const servicos = [
  {
    badge: "Identidade Digital",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    iconBg: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    dor: "Você existe, mas ninguém te acha online.",
    titulo: "Landing Page",
    subtitulo: "Alta Conversão",
    resultado: "Canal ativo de captação",
    resultadoNum: "5 dias",
    resultadoLabel: "do briefing ao ar",
    descricao: "Antes de criar sua página, entendemos quem é você. Sua identidade vira estrutura digital — e é o que vai te fazer se destacar hoje, amanhã e sempre.",
    preco: "A partir de R$ 499",
    precoOriginal: null,
    destaque: false,
    bonus: "Hospedagem vitalícia inclusa",
    bonusDesc: "Em 1 ano você recupera o investimento",
    cta: "Quero minha identidade digital",
    itens: [
      "Estudo de identidade e posicionamento",
      "Design exclusivo que reflete quem você é",
      "SEO técnico otimizado",
      "Integração WhatsApp + formulário",
      "Entrega em até 5 dias úteis",
      "Hospedagem vitalícia inclusa",
    ],
  },
  {
    badge: "Mais Popular",
    badgeClass: "bg-accent/10 text-accent border-accent/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <path d="M3 6h18"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    iconBg: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    dor: "Você quer vender online mas não sabe por onde começar.",
    titulo: "Loja Shopify",
    subtitulo: "Pronta para Vender",
    resultado: "Vendendo online",
    resultadoNum: "7 dias",
    resultadoLabel: "do zero ao primeiro pedido",
    descricao: "A forma mais rápida de estar vendendo. Checkout, frete inteligente e entrega no mesmo dia via motoboy — tudo integrado desde o primeiro pedido.",
    preco: "A partir de R$ 599",
    precoOriginal: null,
    destaque: true,
    bonus: "Entrega no mesmo dia",
    bonusDesc: "Motoboy integrado direto na sua loja",
    cta: "Quero minha loja no ar",
    itens: [
      "Checkout via Yampi (Pix, cartão, boleto)",
      "Melhor Envio — fretes 80% mais baratos",
      "Entrega no mesmo dia via motoboy",
      "Entregas para todo o Brasil",
      "Painel fácil de gerenciar sozinho",
      "Entrega em até 7 dias úteis",
    ],
  },
  {
    badge: "100% Seu",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    iconBg: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    dor: "Você quer independência total — sem mensalidade para sempre.",
    titulo: "Loja Next.js",
    subtitulo: "100% Sua · Zero Mensalidade",
    resultado: "Zero mensalidade",
    resultadoNum: "R$0",
    resultadoLabel: "de plataforma para sempre",
    descricao: "Estrutura 100% sua, sem depender de plataforma. Performance superior, SEO de alto nível e todas as integrações — sem nenhuma mensalidade.",
    preco: "A partir de R$ 799",
    precoOriginal: null,
    destaque: false,
    bonus: "Sem mensalidade de plataforma",
    bonusDesc: "O site é 100% seu, para sempre",
    cta: "Quero minha estrutura própria",
    itens: [
      "Checkout via Yampi (Pix, cartão, boleto)",
      "Melhor Envio — fretes 80% mais baratos",
      "Entrega no mesmo dia via motoboy",
      "Zero mensalidade de plataforma",
      "Performance e SEO superiores",
      "Entrega em até 12 dias úteis",
    ],
  },
  {
    badge: "⚡ Oferta Limitada",
    badgeClass: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
        <path d="M11 8v3l2 2"/>
      </svg>
    ),
    iconBg: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-400",
    dor: "Você sabe que algo está errado, mas não consegue identificar o quê.",
    titulo: "Consultoria Estratégica",
    subtitulo: "Diagnóstico Completo",
    resultado: "Plano de ação completo",
    resultadoNum: "1 call",
    resultadoLabel: "já com o diagnóstico pronto",
    descricao: "Antes da call, já estudei seu negócio. Analiso seu Instagram, sua comunicação, seus pontos cegos — e chego com soluções, não com perguntas.",
    preco: "R$ 499",
    precoOriginal: "R$ 999",
    destaque: false,
    bonus: "Vagas se esgotando",
    bonusDesc: "Oferta por tempo limitado",
    cta: "Garantir minha vaga agora",
    itens: [
      "Análise do negócio antes da call",
      "Estudo do Instagram e presença digital",
      "Diagnóstico de linguagem e comunicação",
      "Plano de ação personalizado",
      "Indicação da melhor estrutura digital",
      "30 dias de suporte pós-consultoria",
    ],
  },
];

export default function CardServico() {
  return (
    <section id="servicos" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="sf text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">
            O impulso certo para o seu momento
          </span>
          <h2 className="sf section-title mt-3">
            Escolha sua estrutura.{" "}
            <span className="gradient-text-hybrid">A gente coloca no ar.</span>
          </h2>
          <p className="sf section-subtitle">
            Cada negócio tem uma necessidade diferente. A gente ajuda você a identificar qual estrutura faz sentido agora —{" "}
            <span className="text-white font-semibold">e entrega rápido, sem enrolação.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
          {servicos.map((s) => (
            <div
              key={s.titulo}
              className={`sf relative rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col overflow-hidden ${
                s.destaque
                  ? "border-accent/40 shadow-xl shadow-accent/10"
                  : "border-dark-border hover:border-primary/30 hover:shadow-primary/5"
              }`}
            >
              {/* Card top gradient strip */}
              <div className={`h-1 w-full ${s.destaque ? "bg-gradient-to-r from-accent to-accent/50" : "bg-gradient-to-r from-primary/40 to-transparent"}`} />

              <div className="p-5 sm:p-6 md:p-7 flex flex-col flex-1 bg-dark-card">
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${s.badgeClass}`}>
                    {s.badge}
                  </span>
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.iconBg} flex items-center justify-center ${s.iconColor}`}>
                    {s.icon}
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-black text-white mb-1">{s.titulo}</h3>
                <p className="text-xs font-bold mb-2 uppercase tracking-wider" style={{ color: s.destaque ? "#10b981" : s.precoOriginal ? "#f87171" : "#10b981", opacity: 0.8 }}>
                  {s.subtitulo}
                </p>

                {/* Dor */}
                <p className="text-xs text-gray-500 italic mb-4 leading-relaxed">
                  "{s.dor}"
                </p>

                {/* Resultado com número */}
                <div className={`rounded-xl px-4 py-3 mb-4 flex items-center gap-3 ${
                  s.precoOriginal ? "bg-red-500/8 border border-red-500/15"
                  : s.destaque ? "bg-accent/8 border border-accent/15"
                  : "bg-primary/8 border border-primary/15"
                }`}>
                  <span className={`text-2xl font-black leading-none ${
                    s.precoOriginal ? "text-red-400" : s.destaque ? "text-accent" : "text-primary"
                  }`}>{s.resultadoNum}</span>
                  <div>
                    <p className="text-white text-xs font-bold">{s.resultado}</p>
                    <p className="text-gray-500 text-[11px]">{s.resultadoLabel}</p>
                  </div>
                </div>

                {/* Linha separadora */}
                <div className={`h-px w-full mb-4 ${s.destaque ? "bg-accent/20" : "bg-dark-border"}`} />

                {/* Descrição */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {s.descricao}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {s.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${s.destaque ? "text-accent" : "text-primary"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bonus pill */}
                {s.bonus && (
                  <div className={`flex items-start gap-2.5 rounded-xl px-3 py-2.5 mb-5 ${
                    s.precoOriginal
                      ? "bg-red-500/5 border border-red-500/15"
                      : s.destaque
                      ? "bg-accent/5 border border-accent/15"
                      : "bg-primary/5 border border-primary/15"
                  }`}>
                    <span className="text-lg leading-none mt-0.5">
                      {s.precoOriginal ? "🔥" : s.destaque ? "🚀" : "🎁"}
                    </span>
                    <div>
                      <p className={`text-xs font-bold ${s.precoOriginal ? "text-red-400" : s.destaque ? "text-accent" : "text-primary"}`}>
                        {s.bonus}
                      </p>
                      <p className="text-gray-500 text-[11px] mt-0.5">{s.bonusDesc}</p>
                    </div>
                  </div>
                )}

                {/* Preço */}
                <div className="mb-5">
                  {s.precoOriginal && (
                    <span className="text-gray-600 text-sm line-through mr-2">{s.precoOriginal}</span>
                  )}
                  <span className={`text-2xl font-black ${s.precoOriginal ? "text-red-400" : "text-white"}`}>
                    {s.preco}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={buildWhatsApp(s.titulo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center text-sm font-bold py-3 px-5 rounded-xl transition-all duration-200 hover:scale-105 inline-flex items-center justify-center gap-2 text-white ${
                    s.destaque
                      ? "bg-accent hover:bg-accent-dark shadow-lg shadow-accent/25"
                      : s.precoOriginal
                      ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20"
                      : "bg-primary hover:bg-primary-dark shadow-lg shadow-primary/20"
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-primary/40" />
          <p className="text-gray-500 text-sm italic">
            "O nosso melhor trabalho é sempre o próximo."
          </p>
        </div>
      </div>
    </section>
  );
}
