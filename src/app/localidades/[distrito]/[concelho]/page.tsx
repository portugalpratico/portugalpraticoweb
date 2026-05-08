import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import { getConcelho, getDistrito, portugal } from "@/lib/data/portugal";

interface Props {
  params: Promise<{ distrito: string; concelho: string }>;
}

export async function generateStaticParams() {
  return portugal.flatMap((d) =>
    d.concelhos.map((c) => ({ distrito: d.slug, concelho: c.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { distrito, concelho } = await params;
  const d = getDistrito(distrito);
  const c = getConcelho(distrito, concelho);
  if (!d || !c) return { title: "Concelho não encontrado" };
  return {
    title: `${c.nome} — Concelho do Distrito de ${d.nome} | Código Postal e Info`,
    description: `${c.descricao} ${c.populacao.toLocaleString("pt-PT")} habitantes, ${c.area} km², ${c.freguesias} freguesias. Código postal: ${c.cpPrefix}.`,
    alternates: { canonical: `/localidades/${distrito}/${concelho}` },
    keywords: [`${c.nome}`, `código postal ${c.nome}`, `${c.nome} ${d.nome}`, `${c.nome} freguesias`],
  };
}

export default async function ConcelhoPage({ params }: Props) {
  const { distrito, concelho } = await params;
  const d = getDistrito(distrito);
  const c = getConcelho(distrito, concelho);
  if (!d || !c) notFound();

  const faqs = [
    {
      question: `Qual é o código postal de ${c.nome}?`,
      answer: `Os códigos postais de ${c.nome} começam por ${c.cpPrefix}. Utilize a pesquisa de código postal para encontrar o código exato da sua rua.`,
    },
    {
      question: `Quantas freguesias tem o Concelho de ${c.nome}?`,
      answer: `O Concelho de ${c.nome} tem ${c.freguesias} freguesias, distribuídas por uma área de ${c.area} km².`,
    },
    {
      question: `Qual é a população de ${c.nome}?`,
      answer: `O Concelho de ${c.nome} tem aproximadamente ${c.populacao.toLocaleString("pt-PT")} habitantes.`,
    },
    {
      question: `Em que distrito fica ${c.nome}?`,
      answer: `${c.nome} pertence ao Distrito de ${d.nome}, na região ${getRegiao(d.slug)}.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: `Concelho de ${c.nome}`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: `Distrito de ${d.nome}`,
      url: `https://portugalpratico.pt/localidades/${distrito}`,
    },
    addressCountry: "PT",
    description: c.descricao,
    postalCode: c.cpPrefix,
  };

  // Concelhos vizinhos (same district, excluding current)
  const vizinhos = d.concelhos.filter((x) => x.slug !== c.slug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumbs
          crumbs={[
            { label: "Início", href: "/" },
            { label: "Localidades", href: "/localidades" },
            { label: `Distrito de ${d.nome}`, href: `/localidades/${distrito}` },
            { label: c.nome },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Concelho de {c.nome}</h1>
              <p className="text-gray-500 text-sm">
                Distrito de{" "}
                <Link href={`/localidades/${distrito}`} className="text-[#046A38] hover:underline font-medium">
                  {d.nome}
                </Link>
              </p>
            </div>
            <span className="badge bg-green-50 text-[#046A38] text-sm px-3 py-1.5 font-mono font-semibold">
              CP {c.cpPrefix}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <StatCard label="População" value={c.populacao.toLocaleString("pt-PT")} unit="hab." color="green" />
          <StatCard label="Área" value={c.area.toLocaleString("pt-PT")} unit="km²" color="blue" />
          <StatCard label="Freguesias" value={c.freguesias.toString()} unit="freg." color="purple" />
          <StatCard label="Cod. Postal" value={c.cpPrefix} unit="prefixo" color="orange" />
        </div>

        {/* Description */}
        <section className="card mb-6">
          <h2 className="font-semibold text-gray-900 mb-2">Sobre {c.nome}</h2>
          <p className="text-sm text-gray-600 leading-relaxed">{c.descricao}</p>
        </section>

        {/* Notable places */}
        {c.notaveis && c.notaveis.length > 0 && (
          <section className="card mb-6">
            <h2 className="font-semibold text-gray-900 mb-3">Pontos de Interesse</h2>
            <div className="flex flex-wrap gap-2">
              {c.notaveis.map((n) => (
                <span key={n} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-[#046A38] rounded-lg text-xs font-medium">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  {n}
                </span>
              ))}
            </div>
          </section>
        )}

        <AdSlot format="horizontal" className="mb-6" />

        {/* Postal code CTA */}
        <section className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Código Postal de {c.nome}
            </h3>
            <p className="text-sm text-gray-500">
              Os códigos postais de {c.nome} começam em <strong className="text-gray-700 font-mono">{c.cpPrefix}</strong>. Pesquise a sua rua.
            </p>
          </div>
          <Link href={`/codigo-postal?q=${encodeURIComponent(c.nome)}`} className="btn-primary shrink-0">
            Pesquisar CP de {c.nome}
          </Link>
        </section>

        {/* Concelhos vizinhos */}
        {vizinhos.length > 0 && (
          <section className="mb-8">
            <h2 className="section-title mb-4">Outros Concelhos do Distrito de {d.nome}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {vizinhos.map((v) => (
                <Link
                  key={v.slug}
                  href={`/localidades/${distrito}/${v.slug}`}
                  className="flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-gray-100 hover:border-[#046A38] hover:text-[#046A38] text-gray-700 text-sm font-medium transition-colors group"
                >
                  <span>{v.nome}</span>
                  <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#046A38] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
            {d.concelhos.length > 7 && (
              <Link href={`/localidades/${distrito}`} className="inline-flex items-center gap-1 text-sm text-[#046A38] hover:underline mt-3">
                Ver todos os {d.concelhos.length} concelhos de {d.nome}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </section>
        )}

        <AdSlot format="horizontal" className="mb-8" />

        <FAQ items={faqs} />
      </div>
    </>
  );
}

function StatCard({
  label, value, unit, color,
}: {
  label: string; value: string; unit: string; color: "green" | "blue" | "purple" | "orange";
}) {
  const colors = {
    green: "bg-green-50 text-[#046A38]",
    blue: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    orange: "bg-orange-50 text-orange-700",
  };
  return (
    <div className={`${colors[color]} rounded-2xl p-4 text-center`}>
      <p className="text-xs opacity-70 mb-1">{label}</p>
      <p className="font-bold text-lg leading-tight">{value}</p>
      <p className="text-xs opacity-60 mt-0.5">{unit}</p>
    </div>
  );
}

function getRegiao(slug: string): string {
  const map: Record<string, string> = {
    aveiro: "Litoral Centro", braga: "Minho", braganca: "Trás-os-Montes",
    "castelo-branco": "Beira Interior", coimbra: "Beira Litoral", evora: "Alentejo Central",
    faro: "Algarve", guarda: "Beira Interior", leiria: "Estremadura",
    lisboa: "Grande Lisboa", portalegre: "Alto Alentejo", porto: "Grande Porto",
    santarem: "Ribatejo", setubal: "Península de Setúbal", "viana-do-castelo": "Alto Minho",
    "vila-real": "Trás-os-Montes", viseu: "Beira Alta", acores: "Açores", madeira: "Madeira",
    beja: "Baixo Alentejo",
  };
  return map[slug] ?? "Portugal";
}
