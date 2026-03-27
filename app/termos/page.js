export const metadata = {
  title: "Termos de Uso — Impulso Digital",
  description: "Termos e condições de uso dos serviços da Impulso Digital.",
};

export default function TermosDeUso() {
  return (
    <main className="bg-dark min-h-screen text-white">
      <div className="container mx-auto px-6 py-24 max-w-3xl">

        <div className="mb-12">
          <a href="/" className="text-primary text-sm hover:text-primary-light transition-colors">
            ← Voltar ao site
          </a>
        </div>

        <h1 className="text-4xl font-black text-white mb-2">Termos de Uso</h1>
        <p className="text-gray-500 text-sm mb-12">Última atualização: março de 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Identificação</h2>
            <p>
              A <strong className="text-white">Impulso Digital</strong> é um serviço prestado por Eduardo Barros,
              inscrito no CNPJ 64.585.949/0001-83 (MEI), com sede em Palmas — TO.
              O acesso ao site e a contratação dos nossos serviços implica na aceitação integral destes Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Serviços oferecidos</h2>
            <p>A Impulso Digital presta os seguintes serviços:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Criação de landing pages (Impulso Page)</li>
              <li>Criação de lojas online na plataforma Shopify (Impulso Shop)</li>
              <li>Criação de lojas online em Next.js (Impulso Store)</li>
              <li>Consultoria estratégica digital (Impulso Radar)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Contratação e pagamento</h2>
            <p>
              Os serviços são contratados mediante acordo prévio via WhatsApp ou e-mail, com confirmação de proposta e pagamento.
              Os valores, prazos e escopo são definidos individualmente para cada projeto e confirmados antes do início dos trabalhos.
              O início da execução do serviço está condicionado ao pagamento da entrada acordada entre as partes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Prazos de entrega</h2>
            <p>
              Os prazos informados (ex: 5 dias para landing page, 7 dias para loja Shopify) são estimativas médias baseadas
              em projetos anteriores e dependem do fornecimento pontual de informações, materiais e aprovações pelo contratante.
              Atrasos causados pela falta de retorno do cliente não são de responsabilidade da Impulso Digital.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Revisões e alterações</h2>
            <p>
              Cada projeto inclui rodadas de revisão conforme acordado em proposta. Alterações de escopo solicitadas após
              o início do projeto poderão gerar custos adicionais, que serão informados previamente ao cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Propriedade intelectual</h2>
            <p>
              Após a quitação integral do pagamento, os arquivos entregues passam a ser de propriedade do cliente.
              A Impulso Digital reserva-se o direito de utilizar os projetos entregues como portfólio e material de divulgação,
              salvo solicitação expressa de confidencialidade pelo cliente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Limitação de responsabilidade</h2>
            <p>
              A Impulso Digital não se responsabiliza por resultados de vendas, tráfego ou faturamento do cliente,
              pois dependem de fatores externos como produto, preço, gestão e investimento em mídia.
              Nosso compromisso é entregar uma estrutura digital de qualidade dentro do escopo acordado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Cancelamento</h2>
            <p>
              O cancelamento após o início da execução do projeto poderá implicar na cobrança proporcional ao trabalho
              já realizado. Valores pagos como entrada não são reembolsáveis após o início dos trabalhos, salvo por
              falha comprovada da Impulso Digital no cumprimento do escopo acordado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Foro e legislação aplicável</h2>
            <p>
              Estes termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Palmas — TO
              para dirimir quaisquer controvérsias decorrentes deste instrumento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contato</h2>
            <p>
              Para dúvidas sobre estes termos, entre em contato pelo WhatsApp ou pelo e-mail{" "}
              <a href="mailto:contato@impulsodigital.com.br" className="text-primary hover:text-primary-light transition-colors">
                contato@impulsodigital.com.br
              </a>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
