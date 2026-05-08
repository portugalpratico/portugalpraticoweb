import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

interface Props {
  params: Promise<{ distrito: string }>;
}

// Static data map for districts
const distritosData: Record<string, { nome: string; populacao: string; area: string; concelhos: { nome: string; slug: string; populacao: string }[] }> = {
  lisboa: {
    nome: "Lisboa",
    populacao: "2.250.533",
    area: "2.761 km²",
    concelhos: [
      { nome: "Lisboa", slug: "lisboa", populacao: "547.631" },
      { nome: "Sintra", slug: "sintra", populacao: "395.014" },
      { nome: "Cascais", slug: "cascais", populacao: "224.871" },
      { nome: "Loures", slug: "loures", populacao: "205.054" },
      { nome: "Amadora", slug: "amadora", populacao: "175.136" },
      { nome: "Almada", slug: "almada", populacao: "174.030" },
      { nome: "Oeiras", slug: "oeiras", populacao: "172.120" },
      { nome: "Seixal", slug: "seixal", populacao: "167.484" },
      { nome: "Vila Franca de Xira", slug: "vila-franca-de-xira", populacao: "136.886" },
      { nome: "Odivelas", slug: "odivelas", populacao: "144.549" },
    ],
  },
  porto: {
    nome: "Porto",
    populacao: "1.817.174",
    area: "2.395 km²",
    concelhos: [
      { nome: "Porto", slug: "porto", populacao: "237.591" },
      { nome: "Vila Nova de Gaia", slug: "vila-nova-de-gaia", populacao: "302.295" },
      { nome: "Matosinhos", slug: "matosinhos", populacao: "175.478" },
      { nome: "Gondomar", slug: "gondomar", populacao: "168.028" },
      { nome: "Maia", slug: "maia", populacao: "135.306" },
      { nome: "Valongo", slug: "valongo", populacao: "93.858" },
      { nome: "Braga", slug: "braga", populacao: "193.333" },
      { nome: "Guimarães", slug: "guimaraes", populacao: "158.124" },
    ],
  },
  braga: {
    nome: "Braga",
    populacao: "848.185",
    area: "2.673 km²",
    concelhos: [
      { nome: "Braga", slug: "braga", populacao: "193.333" },
      { nome: "Guimarães", slug: "guimaraes", populacao: "158.124" },
      { nome: "Barcelos", slug: "barcelos", populacao: "120.391" },
      { nome: "Vila Nova de Famalicão", slug: "vila-nova-de-famalicao", populacao: "133.832" },
    ],
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { distrito } = await params;
  const data = distritosData[distrito];
  const name = data?.nome ?? distrito.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title: `Distrito de ${name} — Concelhos, Freguesias e Códigos Postais`,
    description: `Informação completa sobre o Distrito de ${name}: concelhos, freguesias, população e códigos postais.`,
    alternates: { canonical: `/localidades/${distrito}` },
  };
}

export default async function DistritoPage({ params }: Props) {
  const { distrito } = await params;
  const data = distritosData[distrito];
  const name = data?.nome ?? distrito.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const schema = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: `Distrito de ${name}`,
    addressCountry: "PT",
    description: `Distrito de ${name}, Portugal`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumbs
          crumbs={[
            { label: "Início", href: "/" },
            { label: "Localidades", href: "/localidades" },
            { label: name },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Distrito de {name}</h1>
          {data && (
            <div className="flex gap-6 text-sm text-gray-500">
              <span>Populacao: <strong className="text-gray-700">{data.populacao} hab.</strong></span>
              <span>Área: <strong className="text-gray-700">{data.area}</strong></span>
            </div>
          )}
        </div>

        <AdSlot format="horizontal" className="mb-8" />

        {data?.concelhos ? (
          <section>
            <h2 className="section-title mb-4">Concelhos do Distrito de {name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.concelhos.map((c) => (
                <Link
                  key={c.slug}
                  href={`/localidades/${distrito}/${c.slug}`}
                  className="card group hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-[#046A38] transition-colors">{c.nome}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{c.populacao} hab.</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#046A38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : (
          <div className="card">
            <p className="text-sm text-gray-600">
              Informação detalhada sobre os concelhos de <strong>{name}</strong> em breve.{" "}
              <Link href="/localidades" className="text-[#046A38] hover:underline">Ver todos os distritos</Link>.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
