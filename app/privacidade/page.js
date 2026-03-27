export const metadata = {
  title: "Política de Privacidade — Impulso Digital",
  description: "Política de privacidade e proteção de dados da Impulso Digital, em conformidade com a LGPD.",
};

export default function Privacidade() {
  return (
    <main className="bg-dark min-h-screen text-white">
      <div className="container mx-auto px-6 py-24 max-w-3xl">

        <div className="mb-12">
          <a href="/" className="text-primary text-sm hover:text-primary-light transition-colors">
            ← Voltar ao site
          </a>
        </div>

        <h1 className="text-4xl font-black text-white mb-2">Política de Privacidade</h1>
        <p className="text-gray-500 text-sm mb-12">Última atualização: março de 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Quem somos</h2>
            <p>
              A <strong className="text-white">Impulso Digital</strong> é operada por Eduardo Barros,
              CNPJ 64.585.949/0001-83 (MEI), Palmas — TO. Esta política descreve como coletamos,
              usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção
              de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Dados que coletamos</h2>
            <p>Coletamos apenas os dados necessários para a prestação dos nossos serviços:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong className="text-white">Nome e contato</strong> — para identificação e comunicação (WhatsApp, e-mail)</li>
              <li><strong className="text-white">Dados do negócio</strong> — nome da empresa, segmento, necessidades do projeto</li>
              <li><strong className="text-white">Dados de navegação</strong> — via cookies e ferramentas de análise (Google Analytics), de forma anonimizada</li>
            </ul>
            <p className="mt-3">Não coletamos dados sensíveis como CPF, RG ou informações financeiras diretamente por este site.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Como usamos seus dados</h2>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Responder mensagens e orçamentos solicitados por você</li>
              <li>Executar o serviço contratado</li>
              <li>Enviar informações relevantes sobre o andamento do projeto</li>
              <li>Melhorar a experiência no site com base em dados de navegação anonimizados</li>
            </ul>
            <p className="mt-3">Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Base legal para o tratamento</h2>
            <p>
              O tratamento dos seus dados se baseia no seu <strong className="text-white">consentimento</strong> (ao entrar em contato conosco)
              e na <strong className="text-white">execução de contrato</strong> (quando há serviço contratado), nos termos do art. 7º da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
            <p>
              Este site pode utilizar cookies para melhorar a experiência de navegação e coletar dados
              estatísticos anonimizados (como páginas visitadas e tempo de sessão). Você pode desativar
              os cookies nas configurações do seu navegador, sem prejuízo ao acesso ao site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Armazenamento e segurança</h2>
            <p>
              Seus dados são armazenados em plataformas seguras (Google Workspace, WhatsApp Business) e
              mantidos apenas pelo tempo necessário para a prestação do serviço ou cumprimento de obrigação legal.
              Adotamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Seus direitos (LGPD)</h2>
            <p>Você tem direito a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Confirmar se tratamos seus dados pessoais</li>
              <li>Acessar, corrigir ou atualizar seus dados</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
              <li>Solicitar portabilidade dos dados</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo e-mail{" "}
              <a href="mailto:contato@impulsodigital.com.br" className="text-primary hover:text-primary-light transition-colors">
                contato@impulsodigital.com.br
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Links externos</h2>
            <p>
              Nosso site pode conter links para plataformas de terceiros (WhatsApp, Instagram, Shopify, etc.).
              A Impulso Digital não se responsabiliza pelas políticas de privacidade dessas plataformas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível
              nesta página, com a data da última atualização indicada no topo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contato</h2>
            <p>
              Para qualquer dúvida sobre esta política ou sobre o tratamento dos seus dados, entre em contato:{" "}
              <a href="mailto:contato@impulsodigital.com.br" className="text-primary hover:text-primary-light transition-colors">
                contato@impulsodigital.com.br
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
