export default function SobreEduardo() {
  return (
    <section id="sobre" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

            {/* Foto */}
            <div className="sf relative flex justify-center md:justify-start">
              <div className="relative w-60 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px]">
                {/* Borda decorativa */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent rotate-1" />
                <img
                  src="/images/foto-eduardo-sobre.jpg"
                  alt="Eduardo Barros — CEO e Fundador da Impulso Digital"
                  className="relative w-full h-full object-cover object-top rounded-xl"
                />
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-dark-card border border-dark-border rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl">
                  <p className="text-white font-black text-base sm:text-lg leading-none">60+ · 1.600+</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5">negócios · vendas próprias</p>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div>
              <span className="sf inline-block text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
                Quem está por trás
              </span>

              <h2 className="sf text-3xl sm:text-4xl font-black text-white leading-tight mb-2">
                Eduardo Barros
              </h2>
              <p className="sf text-primary font-semibold text-xs sm:text-sm mb-5 md:mb-6">
                CEO e Fundador da Impulso Digital · Palmas, TO
              </p>

              <div className="sf space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
                <p>
                  Cheguei em Palmas sem equipe e sem audiência esperando — só com a necessidade de provar pra mim mesmo que ia dar certo. Comecei vendendo meu próprio produto pela internet:{" "}
                  <span className="text-white font-semibold">o UrbanFeet, minha loja Shopify, que em 3 anos passou de 1.600 pares vendidos pela internet.</span>{" "}
                  Eu sei o que funciona porque funciona pra mim todo dia.
                </p>
                <p>
                  Depois disso construí meus próprios produtos — o{" "}
                  <span className="text-white font-semibold">AgendaPRO</span>{" "}
                  (meu SaaS de agendamento, com billing e segurança auditada) e o{" "}
                  <span className="text-white font-semibold">MPN-On</span>{" "}
                  (curso pra quem quer criar negócio online do zero), além de ferramentas internas de IA que aceleram tudo por aqui.{" "}
                  <span className="text-white font-semibold">Não vendo o que vi em curso — vendo o que eu construo.</span>
                </p>
                <p>
                  Uso IA todo dia na construção — Claude, Gemini, modelos de geração visual.{" "}
                  <span className="text-white font-semibold">Não como atalho, como alavanca.</span>{" "}
                  É o que me faz entregar em 7 dias o que agência comum leva 2 meses. No seu projeto, você leva copy afiada, design padrão Impulso, velocidade de IA e um cara que{" "}
                  <span className="text-white font-semibold">testou antes de te vender</span>.{" "}
                  <span className="text-white font-semibold">60+ negócios já passaram por isso. O próximo é o seu.</span>
                </p>
              </div>

              {/* Quote */}
              <div className="sf border-l-2 border-primary/40 pl-4 sm:pl-5 mb-6 md:mb-8">
                <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed">
                  "Construo seu site do jeito que construo o meu — porque é o que eu uso todo dia."
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/556392920080?text=Eduardo%2C%20li%20tua%20hist%C3%B3ria%20e%20quero%20come%C3%A7ar%20meu%20projeto%20com%20a%20Impulso%20Digital."
                target="_blank"
                rel="noopener noreferrer"
                className="sf inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-5 sm:px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar com Eduardo
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
