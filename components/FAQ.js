"use client";

import { useState } from "react";

const perguntas = [
  {
    pergunta: "Quanto tempo leva para o meu site ficar pronto?",
    resposta:
      "Landing pages ficam prontas em até 5 dias úteis após o envio de todo o material (logo, textos e imagens). Lojas online levam de 7 a 10 dias úteis. Para projetos personalizados, o prazo é combinado na consulta inicial.",
  },
  {
    pergunta: "Preciso ter domínio e hospedagem para contratar?",
    resposta:
      "Não! Todos os nossos planos já incluem 1 ano de hospedagem gratuita e configuração do domínio. Você só precisa adquirir o domínio (.com.br custa cerca de R$40/ano) — nós cuidamos de tudo o mais.",
  },
  {
    pergunta: "Como funciona o processo de pagamento?",
    resposta:
      "Trabalhamos com 50% de entrada para iniciar o projeto e 50% na entrega final. Aceitamos Pix, cartão de crédito (em até 3x sem juros) e boleto bancário. Após a aprovação, o projeto entra na fila de produção.",
  },
  {
    pergunta: "Posso solicitar alterações depois da entrega?",
    resposta:
      "Sim! Todos os projetos incluem até 3 rodadas de revisão durante o desenvolvimento. Após a entrega, oferecemos 30 dias de suporte gratuito para pequenos ajustes. Para alterações maiores, temos planos de manutenção mensal.",
  },
  {
    pergunta: "O site vai aparecer no Google?",
    resposta:
      "Todos os projetos incluem SEO técnico básico: meta tags, sitemap, robots.txt, velocidade otimizada e integração com Google Search Console. Para resultados avançados em SEO, recomendamos nossa consultoria estratégica.",
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState(null);

  const toggle = (idx) => setAberto(aberto === idx ? null : idx);

  return (
    <section id="faq" className="py-24 bg-dark relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Dúvidas Frequentes
          </span>
          <h2 className="section-title mt-3">
            Ainda tem <span className="gradient-text">dúvidas?</span>
          </h2>
          <p className="section-subtitle">
            Respondemos as perguntas mais comuns dos nossos clientes. Não
            encontrou o que procura? Fale conosco no WhatsApp.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {perguntas.map((item, idx) => (
            <div
              key={idx}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                aberto === idx
                  ? "border-primary/50 bg-dark-card shadow-lg shadow-primary/10"
                  : "border-dark-border bg-dark-card hover:border-dark-border/80"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left gap-4 group"
                aria-expanded={aberto === idx}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300 ${
                      aberto === idx
                        ? "bg-primary text-white"
                        : "bg-dark-border text-gray-500 group-hover:bg-primary/20 group-hover:text-primary-light"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span
                    className={`font-semibold text-base transition-colors duration-300 ${
                      aberto === idx ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.pergunta}
                  </span>
                </div>
                <ChevronIcon open={aberto === idx} />
              </button>

              {/* Answer */}
              <div
                className={`accordion-content ${aberto === idx ? "open" : ""}`}
              >
                <div className="px-6 pb-6 pl-[4.5rem]">
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.resposta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-4 text-sm">
            Não encontrou sua resposta?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os%20da%20Impulso%20Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <WhatsAppIcon />
            Perguntar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
        open ? "rotate-180 text-primary-light" : "text-gray-600"
      }`}
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
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
