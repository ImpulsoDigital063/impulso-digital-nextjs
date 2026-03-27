export default function SobreEduardo() {
  return (
    <section id="sobre" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Foto */}
            <div className="relative flex justify-center md:justify-start">
              <div className="relative w-72 h-96 md:w-80 md:h-[420px]">
                {/* Borda decorativa */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent rotate-1" />
                <img
                  src="/images/foto-eduardo-sobre.jpg"
                  alt="Eduardo Barros — CEO e Fundador da Impulso Digital"
                  className="relative w-full h-full object-cover object-top rounded-xl"
                />
                {/* Badge */}
                <div className="absolute -bottom-4 -right-4 bg-dark-card border border-dark-border rounded-2xl px-4 py-3 shadow-xl">
                  <p className="text-white font-black text-lg leading-none">60+</p>
                  <p className="text-gray-500 text-xs mt-0.5">negócios impulsionados</p>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Quem está por trás
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                Eduardo Barros
              </h2>
              <p className="text-primary font-semibold text-sm mb-6">
                CEO e Fundador da Impulso Digital · Palmas, TO
              </p>

              <div className="space-y-4 text-gray-400 text-base leading-relaxed mb-8">
                <p>
                  Tenho o meu próprio e-commerce rodando há mais de 3 anos — então quando crio uma loja ou uma landing page para um cliente,{" "}
                  <span className="text-white font-semibold">eu sei na prática o que funciona e o que não funciona.</span>
                </p>
                <p>
                  Além de atender clientes pela Impulso Digital, criei o{" "}
                  <span className="text-white font-semibold">MPN-On</span> — um curso que ensina empreendedores a criarem o próprio negócio digital do zero, sem depender de agência.
                </p>
                <p>
                  A forma como penso cada projeto é simples:{" "}
                  <span className="text-white font-semibold">faço como se fosse para mim.</span>{" "}
                  Não entrego o mínimo viável. Entrego o que eu usaria.
                </p>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-primary/40 pl-5 mb-8">
                <p className="text-gray-300 italic text-base leading-relaxed">
                  "O nosso melhor trabalho é sempre o próximo."
                </p>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/5599992065961?text=Ol%C3%A1%20Eduardo%2C%20vim%20pelo%20site%20da%20Impulso%20Digital!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-primary/20 text-sm"
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
