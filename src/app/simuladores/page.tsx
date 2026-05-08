import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { IconSalary, IconIva, IconInterest, IconHome } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Simuladores Financeiros para Portugal",
  description:
    "Simuladores financeiros gratuitos: salário líquido, IVA, juros compostos e crédito habitação. Calcule instantaneamente.",
  alternates: { canonical: "/simuladores" },
};

const sims = [
  {
    title: "Simulador Salário Líquido",
    description: "Calcule o salário líquido a partir do salário bruto, com desconto de IRS e Segurança Social (11%). Inclui tabelas de retenção na fonte atualizadas.",
    href: "/simuladores/salario-liquido",
    icon: <IconSalary />,
    badge: "Mais usado",
  },
  {
    title: "Calculadora IVA",
    description: "Adicione ou remova IVA a qualquer valor nas taxas portuguesas: 6% (reduzida), 13% (intermédia) e 23% (normal).",
    href: "/simuladores/iva",
    icon: <IconIva />,
    badge: "Rápido",
  },
  {
    title: "Juros Compostos",
    description: "Calcule o crescimento do seu investimento ao longo do tempo com juros compostos. Veja como o dinheiro cresce com aportes regulares.",
    href: "/simuladores/juros-compostos",
    icon: <IconInterest />,
  },
  {
    title: "Crédito Habitação",
    description: "Simule a prestação mensal do crédito habitação com base no capital, prazo e taxa de juro (Euribor + spread).",
    href: "/simuladores/credito-habitacao",
    icon: <IconHome />,
  },
];

export default function SimuladoresPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "Simuladores" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Simuladores Financeiros</h1>
        <p className="text-gray-500">Ferramentas de cálculo financeiro para Portugal — rápidas, gratuitas e sem registo.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sims.map((s) => (
          <Link key={s.href} href={s.href} className="card group hover:-translate-y-0.5 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-[#046A38] group-hover:bg-[#046A38] group-hover:text-white transition-colors shrink-0">
                {s.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-semibold text-gray-900 group-hover:text-[#046A38] transition-colors">{s.title}</h2>
                  {s.badge && (
                    <span className="badge bg-green-50 text-[#046A38]">{s.badge}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
