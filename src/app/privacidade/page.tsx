import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade e cookies do Portugal Prático.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  const updated = "13 de junho de 2026";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Política de Privacidade
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
        Última atualização: {updated}
      </p>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">1. Quem somos</h2>
          <p>
            O <strong>Portugal Prático</strong> (disponível em <strong>www.portugalpratico.pt</strong>) é um portal
            de ferramentas gratuitas para o dia a dia em Portugal, que inclui pesquisa de códigos postais,
            validação de NIF e IBAN, simuladores financeiros, feriados e notícias em alta.
          </p>
          <p className="mt-2">
            Para questões relacionadas com privacidade, pode contactar-nos através de:{" "}
            <a href="mailto:portugalpratico@gmail.com" className="text-[#046A38] dark:text-green-400 hover:underline">
              portugalpratico@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">2. Dados que recolhemos</h2>
          <p>O Portugal Prático <strong>não recolhe dados pessoais identificáveis</strong> diretamente. No entanto, como a maioria dos sites, são automaticamente registados dados técnicos de acesso:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Endereço IP (anonimizado)</li>
            <li>Tipo de browser e sistema operativo</li>
            <li>Páginas visitadas e tempo de permanência</li>
            <li>Fonte de tráfego (motor de pesquisa, link direto, etc.)</li>
          </ul>
          <p className="mt-2">Estes dados são recolhidos exclusivamente para fins estatísticos e de melhoria do serviço.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">3. Cookies</h2>
          <p>
            Este site utiliza cookies — pequenos ficheiros de texto guardados no seu dispositivo — para
            as seguintes finalidades:
          </p>
          <div className="mt-3 space-y-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <p className="font-medium text-gray-900 dark:text-gray-100">Cookies essenciais</p>
              <p className="mt-1">Necessários para o funcionamento básico do site (ex: preferência de tema claro/escuro). Não podem ser desativados.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <p className="font-medium text-gray-900 dark:text-gray-100">Cookies de publicidade (Google AdSense)</p>
              <p className="mt-1">
                Utilizamos o <strong>Google AdSense</strong> (ID: ca-pub-8340172955044180) para exibir anúncios.
                O Google utiliza cookies, incluindo o cookie DoubleClick, para apresentar anúncios relevantes
                com base nas suas visitas a este e outros sites. Pode desativar a utilização do cookie DoubleClick
                em{" "}
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#046A38] dark:text-green-400 hover:underline">
                  Definições de anúncios do Google
                </a>.
              </p>
            </div>
          </div>
          <p className="mt-3">
            Pode gerir ou desativar cookies nas definições do seu browser. Note que a desativação de cookies
            pode afetar a funcionalidade do site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">4. Google AdSense e publicidade</h2>
          <p>
            Este site participa no programa Google AdSense. Fornecedores terceiros, incluindo o Google,
            utilizam cookies para apresentar anúncios com base nas visitas anteriores do utilizador a este
            ou a outros sites.
          </p>
          <p className="mt-2">
            A utilização de cookies de publicidade pelo Google permite-lhe e aos seus parceiros apresentar
            anúncios baseados na sua visita a este site e/ou a outros sites na Internet.
          </p>
          <p className="mt-2">
            Para mais informações sobre como o Google utiliza os dados quando visita sites que utilizam os
            serviços do Google, consulte:{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#046A38] dark:text-green-400 hover:underline">
              Como o Google utiliza os dados
            </a>.
          </p>
          <p className="mt-2">
            Pode optar por não participar em publicidade personalizada em{" "}
            <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#046A38] dark:text-green-400 hover:underline">
              www.aboutads.info
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">5. Base legal do tratamento (RGPD)</h2>
          <p>O tratamento de dados realizado neste site baseia-se nos seguintes fundamentos jurídicos ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679):</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Consentimento</strong> (Art.º 6.º, n.º 1, al. a) — para cookies de publicidade</li>
            <li><strong>Interesse legítimo</strong> (Art.º 6.º, n.º 1, al. f) — para dados técnicos de acesso e segurança</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">6. Os seus direitos</h2>
          <p>Ao abrigo do RGPD, tem os seguintes direitos:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Acesso</strong> — solicitar informação sobre os dados que tratamos</li>
            <li><strong>Retificação</strong> — corrigir dados incorretos</li>
            <li><strong>Apagamento</strong> — solicitar a eliminação dos seus dados</li>
            <li><strong>Oposição</strong> — opor-se ao tratamento baseado em interesse legítimo</li>
            <li><strong>Portabilidade</strong> — receber os seus dados em formato estruturado</li>
            <li><strong>Limitação</strong> — restringir o tratamento em certas circunstâncias</li>
          </ul>
          <p className="mt-2">
            Para exercer qualquer destes direitos, contacte-nos em{" "}
            <a href="mailto:portugalpratico@gmail.com" className="text-[#046A38] dark:text-green-400 hover:underline">
              portugalpratico@gmail.com
            </a>.
            Tem ainda o direito de apresentar reclamação junto da{" "}
            <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-[#046A38] dark:text-green-400 hover:underline">
              CNPD (Comissão Nacional de Proteção de Dados)
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">7. Retenção de dados</h2>
          <p>
            Os dados técnicos de acesso são conservados pelo período mínimo necessário para fins de segurança
            e estatística, não excedendo 12 meses.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">8. Alterações a esta política</h2>
          <p>
            Reservamo-nos o direito de atualizar esta Política de Privacidade. Alterações significativas
            serão comunicadas através de aviso visível no site. Recomendamos a consulta periódica desta página.
          </p>
        </section>

      </div>
    </div>
  );
}
