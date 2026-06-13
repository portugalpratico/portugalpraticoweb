import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description: "Termos e condições de utilização do Portugal Prático.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  const updated = "13 de junho de 2026";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Termos de Utilização
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
        Última atualização: {updated}
      </p>

      <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">1. Aceitação dos termos</h2>
          <p>
            Ao aceder e utilizar o <strong>Portugal Prático</strong> (www.portugalpratico.pt), aceita ficar
            vinculado aos presentes Termos de Utilização. Se não concordar com estes termos, deverá
            abster-se de utilizar o site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">2. Descrição do serviço</h2>
          <p>
            O Portugal Prático disponibiliza gratuitamente um conjunto de ferramentas de utilidade para
            o dia a dia em Portugal, incluindo pesquisa de códigos postais, validação de NIF e IBAN,
            simuladores financeiros, consulta de feriados, localidades e notícias em alta.
          </p>
          <p className="mt-2">
            Todas as ferramentas são fornecidas a título indicativo e não constituem aconselhamento
            jurídico, fiscal ou financeiro.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">3. Exatidão da informação</h2>
          <p>
            Embora nos esforcemos por manter a informação atualizada e correta, o Portugal Prático
            não garante a exatidão, integralidade ou atualidade dos dados disponibilizados.
            Os simuladores financeiros produzem resultados estimados — para decisões financeiras
            importantes, consulte sempre um profissional qualificado.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">4. Publicidade</h2>
          <p>
            Este site é financiado através de publicidade pelo programa Google AdSense.
            Os anúncios são geridos pelo Google e podem ser personalizados com base no seu
            histórico de navegação. Consulte a nossa{" "}
            <a href="/privacidade" className="text-[#046A38] dark:text-green-400 hover:underline">
              Política de Privacidade
            </a>{" "}
            para mais detalhes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">5. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo original do Portugal Prático — incluindo textos, logótipo, design e código —
            é propriedade do Portugal Prático e está protegido por direitos de autor.
            É proibida a reprodução total ou parcial sem autorização prévia.
          </p>
          <p className="mt-2">
            As notícias exibidas na secção &quot;Em Alta em Portugal&quot; são agregadas de fontes externas
            (Google Trends) e pertencem às respetivas publicações.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">6. Links externos</h2>
          <p>
            O Portugal Prático contém links para sites de terceiros (ex: Portal das Finanças, Segurança Social).
            Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas desses sites.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">7. Limitação de responsabilidade</h2>
          <p>
            O Portugal Prático não se responsabiliza por quaisquer danos diretos ou indiretos resultantes
            da utilização ou impossibilidade de utilização do site, incluindo erros, omissões ou
            imprecisões na informação disponibilizada.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">8. Lei aplicável</h2>
          <p>
            Estes Termos de Utilização são regidos pela legislação portuguesa. Quaisquer litígios
            serão submetidos à jurisdição dos tribunais portugueses competentes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">9. Alterações</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos a qualquer momento. A utilização continuada
            do site após a publicação de alterações implica a aceitação dos novos termos.
          </p>
        </section>

      </div>
    </div>
  );
}
