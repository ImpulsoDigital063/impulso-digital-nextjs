export default function MPNPromo() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Label */}
          <div className="text-center mb-8 md:mb-10">
            <span className="sf inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-primary border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 md:mb-5">
              Para quem quer aprender a fazer
            </span>
            <h2 className="sf text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 md:mb-4">
              Prefere criar as lojas{" "}
              <span className="gradient-text-hybrid">você mesmo?</span>
            </h2>
            <p className="sf text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              O <span className="text-white font-bold">MPN-On</span> é o curso que ensina a criar lojas Shopify profissionais do zero — sem programar, em 29 aulas práticas. O mesmo método que a Impulso usa para entregar lojas em 7 dias.
            </p>
          </div>

          {/* Card principal */}
          <div className="sf rounded-3xl border border-dark-border bg-dark-card overflow-hidden">
            {/* Faixa top */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-light to-primary/40" />

            <div className="p-5 sm:p-7 md:p-10">
              <div className="grid md:grid-cols-2 gap-7 md:gap-10 items-center">

                {/* Esquerda — o que está incluso */}
                <div>
                  <p className="text-white font-bold text-base mb-5">O que você vai ter acesso:</p>
                  <ul className="space-y-3">
                    {[
                      "29 aulas práticas — cada clique na tela",
                      "Tema exclusivo de alta conversão (R$1.600 de valor)",
                      "Checkout Yampi + Melhor Envio configurados",
                      "Frete expresso via motoboy na sua loja",
                      "Módulo bônus: sua própria loja de calçados",
                      "Scripts de prospecção e fechamento",
                      "29 PDFs — um por aula",
                      "Garantia incondicional de 7 dias",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direita — preço e CTA */}
                <div className="flex flex-col items-center text-center">
                  {/* Resultado real */}
                  <div className="w-full rounded-2xl bg-primary/5 border border-primary/15 px-6 py-4 mb-6">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Caso real do método</p>
                    <p className="text-white font-bold text-sm">
                      GB Nutrition — loja no ar em 7 dias.
                    </p>
                    <p className="text-primary font-black text-2xl mt-1">R$1.000 no Pix.</p>
                    <p className="text-gray-500 text-xs mt-1">Uma loja. Um cliente. Uma semana.</p>
                  </div>

                  {/* Preço */}
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-1">Valor original</p>
                    <p className="text-gray-500 text-2xl font-bold line-through mb-2">R$ 997</p>
                    <p className="text-gray-400 text-sm mb-1">Preço atual</p>
                    <div className="flex items-end justify-center gap-2">
                      <span className="text-5xl font-black text-white">R$297</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">ou 3x de R$99 no cartão</p>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://pay.kiwify.com.br/JNVhxLE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/25 text-base inline-flex items-center justify-center gap-2"
                  >
                    Quero aprender a criar lojas
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>

                  <p className="text-gray-600 text-xs mt-3">
                    Acesso imediato · Garantia de 7 dias
                  </p>

                  {/* Botão conhecer a página */}
                  <a
                    href="https://meuprimeironegocio.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-3 border border-dark-border hover:border-primary/40 text-gray-400 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 text-sm inline-flex items-center justify-center gap-2"
                  >
                    Conhecer o MPN-On
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Nota de rodapé */}
          <p className="text-center text-gray-600 text-sm mt-8">
            Prefere que a gente faça por você?{" "}
            <a
              href="https://wa.me/556392920080?text=Quero%20contratar%20a%20Impulso%20Digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light underline underline-offset-2 transition-colors"
            >
              Fale com a Impulso Digital.
            </a>
          </p>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
