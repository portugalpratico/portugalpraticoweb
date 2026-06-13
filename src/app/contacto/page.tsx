import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Entre em contacto com a equipa do Portugal Prático.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        Contacto
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">
        Tem uma questão, sugestão ou encontrou um erro? Fale connosco.
      </p>

      <div className="space-y-4">

        <a
          href="mailto:portugalpratico@gmail.com"
          className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
        >
          <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/30 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#046A38] dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#046A38] dark:group-hover:text-green-400 transition-colors">
              Email
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">portugalpratico@gmail.com</p>
          </div>
        </a>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Tempo de resposta</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Respondemos normalmente em 1 a 3 dias úteis.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Privacidade e dados pessoais</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Para questões relacionadas com os seus dados pessoais ou para exercer os seus direitos ao abrigo do RGPD,
                consulte a nossa{" "}
                <a href="/privacidade" className="text-[#046A38] dark:text-green-400 hover:underline">
                  Política de Privacidade
                </a>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
