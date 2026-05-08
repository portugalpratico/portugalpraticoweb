import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import { getDistrito, portugal } from "@/lib/data/portugal";

interface Props {
  params: Promise<{ distrito: string }>;
}

export async function generateStaticParams() {
  return portugal.map((d) => ({ distrito: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { distrito } = await params;
  const data = getDistrito(distrito);
  if (!data) return { title: "Distrito não encontrado" };
  return {
    title: `Distrito de ${data.nome} — ${data.concelhos.length} Concelhos e Códigos Postais`,
    description: `Informação completa sobre o Distrito de ${data.nome}: ${data.concelhos.length} concelhos, ${data.populacao.toLocaleString("pt-PT")} habitantes e ${data.area.toLocaleString("pt-PT")} km².`,
    alternates: { canonical: `/localidades/${distrito}` },
  };
}

const faqBase = (nome: string, concelhos: number, pop: string) => [
  {
    question: `Quantos concelhos tem o Distrito de ${nome}?`,
    answer: `O Distrito de ${nome} tem ${concelhos} concelhos.`,
  },
  {
    question: `Qual é a população do Distrito de ${nome}?`,
    answer: `O Distrito de ${nome} tem aproximadamente ${pop} habitantes, segundo os últimos censos.`,
  },
  {
    question: `Como pesquisar o código postal de uma localidade no Distrito de ${nome}?`,
    answer: `Utilize a ferramenta de pesquisa de código postal do Portugal Prático. Pode pesquisar por nome de rua, localidade ou concelho dentro do Distrito de ${nome}.`,
  },
];

export default async function DistritoPage({ params }: Props) {
  const { distrito } = await params;
  const data = getDistrito(distrito);
  if (!data) notFound();

  const totalFreguesias = data.concelhos.reduce((s, c) => s + c.freguesias, 0);
  const popFormatted = data.populacao.toLocaleString("pt-PT");

  const schema = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: `Distrito de ${data.nome}`,
    addressCountry: "PT",
    description: `Distrito de ${data.nome}, Portugal. ${data.concelhos.length} concelhos, ${popFormatted} habitantes.`,
    containsPlace: data.concelhos.map((c) => ({
      "@type": "AdministrativeArea",
      name: c.nome,
      url: `https://portugalpratico.pt/localidades/${distrito}/${c.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumbs
          crumbs={[
            { label: "Início", href: "/" },
            { label: "Localidades", href: "/localidades" },
            { label: `Distrito de ${data.nome}` },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">Distrito de {data.nome}</h1>
          <div className="flex flex-wrap gap-4">
            <Stat label="Concelhos" value={data.concelhos.length.toString()} />
            <Stat label="Freguesias" value={totalFreguesias.toLocaleString("pt-PT")} />
            <Stat label="População" value={popFormatted} />
            <Stat label="Área" value={`${data.area.toLocaleString("pt-PT")} km²`} />
            <Stat label="Capital" value={data.capital} />
          </div>
        </div>

        <AdSlot format="horizontal" className="mb-8" />

        {/* Concelhos grid */}
        <section className="mb-10">
          <h2 className="section-title mb-5">
            Concelhos do Distrito de {data.nome}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.concelhos.map((c) => (
              <Link
                key={c.slug}
                href={`/localidades/${distrito}/${c.slug}`}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#046A38] dark:group-hover:text-green-400 transition-colors truncate">
                      {c.nome}
                    </h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                      <span className="text-xs text-gray-400 dark:text-gray-500">{c.populacao.toLocaleString("pt-PT")} hab.</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{c.area} km²</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{c.freguesias} freg.</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed line-clamp-2">{c.descricao}</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-[#046A38] dark:group-hover:text-green-400 transition-colors shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Postal codes quick link */}
        <section className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Pesquisar Código Postal no Distrito de {data.nome}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Encontre qualquer código postal de {data.nome} por rua, localidade ou código.</p>
          </div>
          <Link href={`/codigo-postal?q=${encodeURIComponent(data.nome)}`} className="btn-primary shrink-0">
            Ver Códigos Postais
          </Link>
        </section>

        <AdSlot format="horizontal" className="mb-8" />

        <FAQ items={faqBase(data.nome, data.concelhos.length, popFormatted)} />
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl px-4 py-2.5 text-center shadow-card">
      <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
      <p className="font-bold text-gray-900 dark:text-gray-100 text-sm">{value}</p>
    </div>
  );
}
