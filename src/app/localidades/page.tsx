import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Localidades de Portugal — Distritos, Concelhos e Freguesias",
  description:
    "Explore todos os distritos, concelhos e freguesias de Portugal. Informação geográfica completa com população e códigos postais.",
  alternates: { canonical: "/localidades" },
};

const distritos = [
  { nome: "Aveiro", slug: "aveiro", concelhos: 19, populacao: "714.200" },
  { nome: "Beja", slug: "beja", concelhos: 14, populacao: "152.758" },
  { nome: "Braga", slug: "braga", concelhos: 14, populacao: "848.185" },
  { nome: "Bragança", slug: "braganca", concelhos: 12, populacao: "136.252" },
  { nome: "Castelo Branco", slug: "castelo-branco", concelhos: 11, populacao: "196.264" },
  { nome: "Coimbra", slug: "coimbra", concelhos: 17, populacao: "430.104" },
  { nome: "Évora", slug: "evora", concelhos: 14, populacao: "166.726" },
  { nome: "Faro", slug: "faro", concelhos: 16, populacao: "451.006" },
  { nome: "Guarda", slug: "guarda", concelhos: 14, populacao: "160.939" },
  { nome: "Leiria", slug: "leiria", concelhos: 16, populacao: "470.930" },
  { nome: "Lisboa", slug: "lisboa", concelhos: 18, populacao: "2.250.533" },
  { nome: "Portalegre", slug: "portalegre", concelhos: 15, populacao: "118.506" },
  { nome: "Porto", slug: "porto", concelhos: 18, populacao: "1.817.174" },
  { nome: "Santarém", slug: "santarem", concelhos: 21, populacao: "453.638" },
  { nome: "Setúbal", slug: "setubal", concelhos: 13, populacao: "851.258" },
  { nome: "Viana do Castelo", slug: "viana-do-castelo", concelhos: 10, populacao: "244.836" },
  { nome: "Vila Real", slug: "vila-real", concelhos: 14, populacao: "206.661" },
  { nome: "Viseu", slug: "viseu", concelhos: 24, populacao: "377.653" },
  { nome: "Açores", slug: "acores", concelhos: 19, populacao: "246.772" },
  { nome: "Madeira", slug: "madeira", concelhos: 11, populacao: "255.082" },
];

export default function LocalidadesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "Localidades" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Localidades de Portugal</h1>
        <p className="text-gray-500">Explore todos os distritos, concelhos e freguesias de Portugal continental e ilhas.</p>
      </div>

      <AdSlot format="horizontal" className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {distritos.map((d) => (
          <Link
            key={d.slug}
            href={`/localidades/${d.slug}`}
            className="card group hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-900 group-hover:text-[#046A38] transition-colors">{d.nome}</h2>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-[#046A38] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>{d.concelhos} concelhos</span>
              <span>{d.populacao} hab.</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="section-title mb-4">Sobre as Localidades de Portugal</h2>
        <div className="card prose prose-sm text-gray-600 max-w-none">
          <p>
            Portugal continental está dividido em <strong>18 distritos</strong> e as regiões autónomas dos <strong>Açores</strong> e <strong>Madeira</strong>.
            No total, o país conta com <strong>308 municípios (concelhos)</strong> e mais de <strong>3.000 freguesias</strong>.
          </p>
          <p className="mt-3">
            Os distritos mais populosos são <strong>Lisboa</strong> (2,2 milhões de habitantes), <strong>Porto</strong> (1,8 milhões)
            e <strong>Setúbal</strong> (851 mil). Os menos populosos são <strong>Portalegre</strong> e <strong>Bragança</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
