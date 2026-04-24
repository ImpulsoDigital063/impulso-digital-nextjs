"use client";

import { useState } from "react";

const Bold = ({ children }) => (
  <span className="text-white font-semibold">{children}</span>
);

const perguntas = [
  {
    pergunta: "Por que você e não uma agência maior?",
    resposta: (
      <>
        Agência grande trata seu projeto como 1 de 200 na fila — você manda e-mail e espera 3 dias. Aqui você fala direto comigo no WhatsApp, e é o mesmo número durante o projeto, na entrega e 3 meses depois se der pau. <Bold>Quem te responde é quem digita o código.</Bold> Sem "departamento de sucesso do cliente" pra enrolar.
      </>
    ),
  },
  {
    pergunta: "Por que não fazer no Wix, Canva ou alguma IA grátis?",
    resposta: (
      <>
        Usa. Se resolver, ótimo — você economizou. Mas já refiz 12 sites de cliente que vieram do Wix achando que ia dar conta. O problema não é a ferramenta, é o tempo que você gasta aprendendo a mexer — é o mesmo tempo que seu concorrente gasta vendendo. <Bold>Seu tempo de dono vale mais que R$59/mês de Wix.</Bold>
      </>
    ),
  },
  {
    pergunta: "E se eu não gostar do resultado?",
    resposta: (
      <>
        Não chega nesse ponto. No Dia 1-3 você recebe prévia visual — paleta, tipografia, mapa das páginas — <Bold>antes de eu escrever uma linha de código.</Bold> Se não for a cara do seu negócio, devolvo os 50% e a gente encerra sem drama. Depois que aprovar a prévia, são 3 rodadas de revisão durante a construção. Site só vai ao ar com seu OK final.
      </>
    ),
  },
  {
    pergunta: "Vou conseguir mexer sozinho depois? E se você sumir?",
    resposta: (
      <>
        Depende do serviço. Na <Bold>Loja Shopify</Bold>, você tem controle total — painel no seu nome, adiciona produto, edita preço, troca foto sem depender de mim. Entrega vem com treinamento em vídeo pra você mexer sem medo. Na <Bold>Landing Page</Bold>, o modelo é outro: LP é feita sob medida pra converter, não pra ser editada por leigo. Nos 30 dias após a entrega, qualquer alteração de texto, imagem ou seção eu faço sem cobrar — depois disso, se quiser mexer de novo, contratação pontual (mais barato que quebrar a LP tentando editar sozinho). Em qualquer cenário, <Bold>código, domínio e estrutura ficam no seu nome.</Bold> Se eu sumir amanhã, qualquer dev pega onde parei — uso Next.js e Shopify padrão, sem gambiarra proprietária.
      </>
    ),
  },
  {
    pergunta: "Tem custo escondido? Mensalidade?",
    resposta: (
      <>
        Zero mensalidade minha. Você paga uma vez e acabou. <Bold>Zero percentual sobre suas vendas.</Bold> Em outros devs é comum pagar mensalidade pro site continuar no ar — aqui, na <Bold>Landing Page</Bold>, a hospedagem é vitalícia de graça como bônus de lançamento (R$49,90/mês pra quem entrar depois, mas <Bold>quem contrata agora fica isento pra sempre</Bold>). O domínio (R$40-100/ano) você registra no seu nome e é seu pra sempre. Na <Bold>Loja Shopify</Bold>, são US$1/mês nos 3 primeiros meses, depois US$19/mês (direto com a Shopify, no seu cartão). Yampi e Melhor Envio entram sem mensalidade. Nenhum centavo volta pra mim depois da entrega.
      </>
    ),
  },
  {
    pergunta: "Em quanto tempo o site paga?",
    resposta: (
      <>
        <Bold>Quem promete prazo de retorno tá mentindo.</Bold> Não controlo seu produto, seu preço, seu tráfego nem seu atendimento. Entrego o que depende de mim: site rápido, claro, que converte quando o lead chega. Se você já vende no Instagram ou WhatsApp, o site multiplica isso. Se não vende ali também, nenhum site salva — e nessa hipótese a gente conversa antes de começar pra eu não te vender o que não vai resolver.
      </>
    ),
  },
  {
    pergunta: "E se eu desistir no meio do projeto?",
    resposta: (
      <>
        Regra clara desde o WhatsApp: 50% na entrada pra começar. Se desistir <Bold>antes de aprovar a prévia visual</Bold> (Dia 1-3), devolvo 100%. Se desistir <Bold>depois da aprovação</Bold> e a gente já estiver construindo, o que foi produzido é cobrado proporcional e você leva os arquivos. Nada de multa escondida, nada de "ah mas você assinou no contrato" — tá tudo na proposta, você lê antes de pagar.
      </>
    ),
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState(null);

  const toggle = (idx) => setAberto(aberto === idx ? null : idx);

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="sf text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest">
            Últimas objeções
          </span>
          <h2 className="sf section-title mt-3">
            Suas últimas dúvidas{" "}
            <span className="gradient-text-hybrid">antes de fechar.</span>
          </h2>
          <p className="sf section-subtitle">
            Essas são as objeções que aparecem toda semana no WhatsApp. Melhor
            resolver aqui e entrar na conversa já pronto pra fechar.
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
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-3 sm:gap-4 group"
                aria-expanded={aberto === idx}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span
                    className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors duration-300 ${
                      aberto === idx
                        ? "bg-primary text-white"
                        : "bg-dark-border text-gray-500 group-hover:bg-primary/20 group-hover:text-primary-light"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span
                    className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-300 ${
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
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pl-[3.4rem] sm:pl-[4.5rem]">
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.resposta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="sf text-center mt-12 md:mt-14">
          <p className="text-gray-400 mb-4 text-sm">
            Tudo respondido? O próximo passo é fechar.
          </p>
          <a
            href="https://wa.me/556392920080?text=Li%20tudo%20no%20site%20e%20quero%20come%C3%A7ar%20meu%20projeto%20com%20a%20Impulso%20Digital."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <WhatsAppIcon />
            Começar meu projeto
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
