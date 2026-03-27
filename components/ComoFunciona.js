"use client";

const WHATSAPP_URL =
  "https://wa.me/5599992065961?text=Ol%C3%A1!%20Quero%20iniciar%20meu%20projeto%20com%20a%20Impulso%20Digital.";

const etapas = [
  {
    numero: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    titulo: "Primeiro Contato",
    descricao:
      "Você nos manda uma mensagem pelo WhatsApp. Em até 2h, um especialista entra em contato para entender o seu negócio e suas metas.",
    destaque: false,
  },
  {
    numero: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    titulo: "Briefing & Proposta",
    descricao:
      "Coletamos todas as informações do projeto e enviamos uma proposta personalizada sem compromisso, com prazo e valor fechados.",
    destaque: false,
  },
  {
    numero: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    titulo: "Desenvolvimento",
    descricao:
      "Nossa equipe cria seu projeto com design exclusivo. Você acompanha o progresso e aprova cada etapa antes da publicação.",
    destaque: true,
  },
  {
    numero: "04",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    titulo: "Entrega & Suporte",
    descricao:
      "Publicamos seu site, entregamos os acessos e ficamos ao seu lado por 30 dias garantindo que tudo funcione perfeitamente.",
    destaque: false,
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-24 bg-dark-card relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-1">
            <img src="/images/icon-32.png" alt="" className="w-4 h-4 opacity-70" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Como Funciona</span>
            <img src="/images/icon-32.png" alt="" className="w-4 h-4 opacity-70" />
          </div>
          <h2 className="section-title mt-3">
            Do zero ao online{" "}
            <span className="gradient-text">sem enrolação</span>
          </h2>
          <p className="section-subtitle">
            Um processo direto e transparente, onde você acompanha cada etapa e recebe um projeto pronto para vender.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />

          {etapas.map((etapa, idx) => (
            <div key={etapa.numero} className="relative flex flex-col items-center text-center group">
              {/* Step circle */}
              <div
                className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 z-10 transition-all duration-300 group-hover:scale-110 ${
                  etapa.destaque
                    ? "bg-gradient-to-br from-primary to-primary-light shadow-xl shadow-primary/30 text-white"
                    : "bg-dark border border-dark-border text-gray-400 group-hover:border-primary/50 group-hover:text-primary-light group-hover:bg-primary/10"
                }`}
              >
                {etapa.icon}
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-black flex items-center justify-center ${
                    etapa.destaque ? "bg-accent text-white" : "bg-dark-border text-gray-500"
                  }`}
                >
                  {idx + 1}
                </div>
              </div>

              <h3 className="text-white font-bold text-base mb-3">{etapa.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{etapa.descricao}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <WhatsAppIcon />
            Iniciar meu projeto agora
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
