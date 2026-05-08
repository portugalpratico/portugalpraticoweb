import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import { portugal } from "@/lib/data/portugal";

export const metadata: Metadata = {
  title: "Localidades de Portugal — Distritos, Concelhos e Freguesias",
  description:
    "Explore todos os distritos, concelhos e freguesias de Portugal. Informação geográfica completa com população, área e códigos postais.",
  alternates: { canonical: "/localidades" },
};

const totalConcelhos = portugal.reduce((s, d) => s + d.concelhos.length, 0);
const totalFreguesias = portugal.reduce((s, d) => s + d.concelhos.reduce((ss, c) => ss + c.freguesias, 0), 0);
const totalPop = portugal.reduce((s, d) => s + d.populacao, 0);

export default function LocalidadesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "Localidades" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Localidades de Portugal</h1>
        <p className="text-gray-500">Explore todos os distritos, concelhos e freguesias de Portugal continental e ilhas.</p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Distritos", value: portugal.length },
          { label: "Concelhos", value: totalConcelhos },
          { label: "Freguesias", value: totalFreguesias.toLocaleString("pt-PT") },
          { label: "População", value: `${(totalPop / 1_000_000).toFixed(1)}M` },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-card">
            <p className="text-2xl font-bold text-[#046A38]">{s.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <AdSlot format="horizontal" className="mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {portugal.map((d) => {
          const totalFreg = d.concelhos.reduce((s, c) => s + c.freguesias, 0);
          return (
            <Link
              key={d.slug}
              href={`/localidades/${d.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 p-5"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-bold text-gray-900 group-hover:text-[#046A38] transition-colors text-base">
                  {d.nome}
                </h2>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-[#046A38] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-50 rounded-lg py-1.5">
                  <p className="font-semibold text-gray-800 text-sm">{d.concelhos.length}</p>
                  <p className="text-xs text-gray-400">concelhos</p>
                </div>
                <div className="bg-gray-50 rounded-lg py-1.5">
                  <p className="font-semibold text-gray-800 text-sm">{totalFreg}</p>
                  <p className="text-xs text-gray-400">freg.</p>
                </div>
                <div className="bg-gray-50 rounded-lg py-1.5">
                  <p className="font-semibold text-gray-800 text-sm">
                    {d.populacao >= 1_000_000
                      ? `${(d.populacao / 1_000_000).toFixed(1)}M`
                      : `${Math.round(d.populacao / 1000)}k`}
                  </p>
                  <p className="text-xs text-gray-400">hab.</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Capital: {d.capital}</p>
            </Link>
          );
        })}
      </div>

      <section className="mt-10 card">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Sobre as Localidades de Portugal</h2>
        <div className="text-sm text-gray-600 space-y-2 leading-relaxed">
          <p>
            Portugal continental está dividido em <strong>18 distritos</strong> e as regiões autónomas dos <strong>Açores</strong> e <strong>Madeira</strong>.
            No total, o país conta com <strong>{totalConcelhos} municípios (concelhos)</strong> e mais de <strong>{totalFreguesias.toLocaleString("pt-PT")} freguesias</strong>.
          </p>
          <p>
            Os distritos mais populosos são <strong>Lisboa</strong> (2,2 milhões), <strong>Porto</strong> (1,8 milhões) e <strong>Setúbal</strong> (851 mil).
            Os menos populosos são <strong>Portalegre</strong> e <strong>Bragança</strong>.
          </p>
          <p>
            Cada página de concelho inclui informação detalhada sobre população, área, número de freguesias, código postal e pontos de interesse.
          </p>
        </div>
      </section>
    </div>
  );
}
