"use client";

import { useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/556392920080?text=Ol%C3%A1!%20Prefiro%20falar%20direto%20em%20vez%20de%20preencher%20o%20formul%C3%A1rio.";

export default function FormularioDiagnostico() {
  useEffect(() => {
    const scriptId = "tally-embed-script";
    const existingScript = document.getElementById(scriptId);

    const loadEmbeds = () => {
      if (typeof window !== "undefined" && typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      }
    };

    if (existingScript) {
      loadEmbeds();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = loadEmbeds;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="diagnostico" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <span className="sf inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 md:mb-4">
            Diagnóstico grátis
          </span>
          <h2 className="sf section-title mt-3">
            Descubra o que seu negócio{" "}
            <span className="gradient-text-hybrid">precisa em 2 minutos.</span>
          </h2>
          <p className="sf section-subtitle mt-4">
            Responde 8 perguntas rápidas. Em até 24h você recebe no WhatsApp seu
            diagnóstico personalizado + recomendação do serviço que resolve seu
            caso.
          </p>
        </div>

        {/* Formulário Tally — SEM .sf (reveal bidirecional some elemento quando altura muda) */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl shadow-primary/20 overflow-hidden border border-white/10">
          <iframe
            data-tally-src="https://tally.so/embed/A76J90?alignLeft=1&hideTitle=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Descubra o que seu negócio precisa em 2 minutos"
            style={{ display: "block" }}
          />
        </div>

        {/* Alternativa */}
        <p className="sf text-center text-gray-500 text-sm mt-8">
          Prefere conversar direto?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-light hover:text-primary underline underline-offset-4 font-semibold transition-colors"
          >
            Manda mensagem no WhatsApp
          </a>
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
