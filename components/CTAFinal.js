"use client";

const WHATSAPP_URL =
  "https://wa.me/556392920080?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20garantir%20minha%20vaga%20na%20Impulso%20Digital.";

export default function CTAFinal() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent-cyan/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-5 md:px-6 text-center">
        {/* Urgency strip */}
        <div className="sf inline-flex items-center gap-2 sm:gap-3 bg-red-500/10 border border-red-500/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-8 md:mb-10 max-w-full">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
          <span className="text-red-400 text-xs sm:text-sm font-semibold leading-tight">
            3 vagas em abril — 1 já reservada
          </span>
        </div>

        {/* Headline */}
        <h2 className="sf text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 md:mb-6 leading-tight">
          Pronto para dar o seu{" "}
          <span className="gradient-text-hybrid">impulso digital?</span>
        </h2>

        <p className="sf text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Mais de 60 empreendedores já confiaram na Impulso Digital para existir online.{" "}
          <span className="text-white font-semibold">O nosso melhor trabalho é sempre o próximo — e o próximo pode ser o seu.</span>
        </p>

        {/* CTA Buttons */}
        <div className="sf flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 md:mb-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn text-sm sm:text-base px-6 sm:px-10"
          >
            <WhatsAppIcon />
            Quero garantir minha vaga
          </a>
          <a href="#servicos" className="btn-outline text-sm sm:text-base px-6 sm:px-10 justify-center">
            Ver quanto custa
          </a>
        </div>

        {/* Trust indicators */}
        <div className="sf flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:gap-10">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              ),
              text: "Hospedagem inclusa",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              ),
              text: "Sem mensalidades escondidas",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              text: "Entrega em até 10 dias",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              ),
              text: "Estrutura pronta para vender",
            },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="text-primary-light">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
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
