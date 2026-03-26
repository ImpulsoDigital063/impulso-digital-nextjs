"use client";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vim pelo site e quero saber mais sobre os serviços da Impulso Digital."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(29,78,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(29,78,216,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in">
            {/* Badge urgência */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-accent font-semibold">
                Apenas 3 vagas disponíveis em abril
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Sites que vendem.{" "}
              <span className="gradient-text">Resultados reais.</span>{" "}
              Entrega em dias.
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Criamos landing pages, lojas online e sites institucionais que
              convertem visitantes em clientes — com design profissional,
              SEO e suporte inclusos.
            </p>

            {/* Service chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {[
                "Landing Page",
                "Loja Online",
                "Site Institucional",
                "Consultoria",
              ].map((s) => (
                <span
                  key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-dark-card border border-dark-border text-gray-400"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-btn text-center justify-center">
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
              <a href="#servicos" className="btn-outline text-center justify-center">
                Ver Planos e Preços
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-dark-border">
              {[
                { value: "200+", label: "Projetos entregues" },
                { value: "98%", label: "Satisfação" },
                { value: "7 dias", label: "Prazo médio" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-black gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hidden md:flex justify-center items-center animate-slide-up">
            <HeroIllustration />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-600 text-xs">role para baixo</span>
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
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

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md">
      {/* Main card */}
      <div className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-2xl">
        {/* Browser bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="flex-1 bg-dark rounded-md h-6 ml-2 flex items-center px-3">
            <span className="text-gray-600 text-xs">impulsodigital.com</span>
          </div>
        </div>

        {/* Fake website content */}
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-primary to-primary-light h-24 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">Sua Landing Page</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["#1d4ed8", "#ff6b35", "#10b981"].map((color, i) => (
              <div
                key={i}
                className="h-12 rounded-lg"
                style={{ backgroundColor: color + "33", border: `1px solid ${color}55` }}
              />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-dark-border rounded-full w-full" />
            <div className="h-3 bg-dark-border rounded-full w-3/4" />
            <div className="h-3 bg-dark-border rounded-full w-5/6" />
          </div>
          <div className="flex gap-2">
            <div className="flex-1 h-9 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center">
              <span className="text-accent text-xs font-medium">CTA</span>
            </div>
            <div className="flex-1 h-9 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
              <span className="text-primary-light text-xs font-medium">Saiba +</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg animate-pulse-slow">
        +340% vendas
      </div>
      <div className="absolute -bottom-4 -left-4 bg-dark-card border border-dark-border text-white text-xs font-medium px-4 py-2 rounded-xl shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs">✓</div>
          <span>Site entregue em 7 dias</span>
        </div>
      </div>
    </div>
  );
}
