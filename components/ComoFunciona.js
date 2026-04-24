"use client";

const WHATSAPP_URL =
  "https://wa.me/556392920080?text=Ol%C3%A1!%20Quero%20iniciar%20meu%20projeto%20com%20a%20Impulso%20Digital.";

const etapas = [
  {
    marco: "Dia 0-1",
    titulo: "Alinhamento profundo",
    descricao: "Questionário estruturado, call opcional de 30-40min e PDF com plano de negócio personalizado. Tudo antes de eu escrever uma linha de código.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    marco: "Dia 2-3",
    titulo: "Prévia visual",
    descricao: "Você recebe paleta, tipografia e o mapa de cada página antes da gente construir. Se não for a cara do seu negócio, devolvo 100%.",
    destaque: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    marco: "Dia 4 a 7",
    titulo: "Construção",
    descricao: "Site tomando forma com o que você aprovou. Você acompanha no link de prévia e pede ajustes com o projeto vivo, sem achismo.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    marco: "Dia 7",
    titulo: "No ar",
    descricao: "Site publicado, domínio configurado e acessos entregues no seu nome. A estrutura é sua, pra sempre, sem mensalidade de plataforma.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    marco: "+30 dias",
    titulo: "Suporte pós-entrega",
    descricao: "Ajuste fino, dúvidas, trocas de texto e monitoramento. 30 dias com a gente do seu lado pra garantir que o site está vendendo.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-dark-card relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="sf inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
            A trilha do seu projeto
          </span>
          <h2 className="sf text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4 md:mb-6">
            Do alinhamento ao ar em{" "}
            <span className="gradient-text-hybrid">7 dias</span>
            <span className="text-white">, com 30 dias de suporte.</span>
          </h2>
          <p className="sf text-gray-400 text-base sm:text-lg leading-relaxed">
            Cada etapa tem prazo. Você sabe o que vai acontecer amanhã e não precisa caçar ninguém pra saber em que pé está.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* ─── MOBILE: timeline vertical ─── */}
          <div className="md:hidden relative">
            {/* Linha vertical */}
            <div className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" />

            <div className="flex flex-col gap-5">
              {etapas.map((e) => (
                <div key={e.titulo} className="sf relative flex items-start gap-4">
                  {/* Bolha com ícone */}
                  <div className={`relative z-10 flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                    e.destaque
                      ? "bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/30"
                      : "bg-dark border border-dark-border text-primary-light"
                  }`}>
                    <div className="scale-75">{e.icon}</div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-xl p-4 border ${
                    e.destaque
                      ? "bg-primary/5 border-primary/30"
                      : "bg-dark border-dark-border"
                  }`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${e.destaque ? "text-primary-light" : "text-primary/70"}`}>
                        {e.marco}
                      </span>
                      {e.destaque && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-primary/20 text-primary-light px-1.5 py-0.5 rounded">
                          Ponto-chave
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1.5 leading-snug">{e.titulo}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{e.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── DESKTOP: timeline horizontal ─── */}
          <div className="hidden md:block relative">
            {/* Linha horizontal */}
            <div className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />

            <div className="grid grid-cols-5 gap-5">
              {etapas.map((e) => (
                <div key={e.titulo} className="sf relative flex flex-col items-center text-center group">
                  {/* Bolha */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                    e.destaque
                      ? "bg-gradient-to-br from-primary to-primary-light text-white shadow-xl shadow-primary/30"
                      : "bg-dark border border-dark-border text-primary-light group-hover:border-primary/50"
                  }`}>
                    {e.icon}
                  </div>

                  {/* Marco temporal */}
                  <span className={`text-[11px] font-bold uppercase tracking-widest mb-1.5 ${e.destaque ? "text-primary-light" : "text-primary/70"}`}>
                    {e.marco}
                  </span>

                  {/* Título */}
                  <h3 className="text-white font-bold text-base mb-2 leading-snug">
                    {e.titulo}
                    {e.destaque && (
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-primary-light mt-1">
                        Ponto-chave
                      </span>
                    )}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-500 text-xs leading-relaxed max-w-[18ch]">{e.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="sf text-center mt-12 md:mt-16">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn justify-center"
          >
            <WhatsAppIcon />
            Iniciar meu projeto agora
          </a>
          <p className="text-gray-600 text-xs sm:text-sm mt-4">
            Resposta em até 2h no horário comercial
          </p>
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
