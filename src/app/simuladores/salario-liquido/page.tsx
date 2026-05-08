import type { Metadata } from "next";
import SalarioSimulator from "./SalarioSimulator";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Simulador Salário Líquido 2025 — Calcule o Seu Salário em Portugal",
  description:
    "Calcule o seu salário líquido mensal em Portugal para 2025. Inclui desconto de IRS, Segurança Social e subsídios. Gratuito e atualizado.",
  alternates: { canonical: "/simuladores/salario-liquido" },
};

const faqs = [
  {
    question: "Como é calculado o salário líquido em Portugal?",
    answer:
      "O salário líquido resulta do salário bruto menos os descontos obrigatórios: 11% de Segurança Social e a retenção na fonte de IRS, que varia conforme o escalão de rendimento e situação familiar.",
  },
  {
    question: "Qual é a taxa de Segurança Social do trabalhador?",
    answer:
      "O trabalhador por conta de outrem desconta 11% do salário bruto para a Segurança Social. A entidade empregadora contribui com mais 23,75%.",
  },
  {
    question: "Como funciona o IRS em Portugal?",
    answer:
      "O IRS em Portugal é progressivo, com escalões que variam entre 13% e 48%. A retenção na fonte é aplicada mensalmente com base em tabelas publicadas pela AT.",
  },
  {
    question: "O subsídio de alimentação conta para o IRS?",
    answer:
      "O subsídio de alimentação em dinheiro até 6,00€/dia (ou 9,60€ em vales de refeição) está isento de IRS e Segurança Social.",
  },
];

export default function SalarioLiquidoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Simuladores", href: "/simuladores" },
          { label: "Salário Líquido" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Simulador Salário Líquido 2025</h1>
        <p className="text-gray-500 dark:text-gray-400">Calcule o salário líquido mensal a partir do seu salário bruto.</p>
      </div>

      <SalarioSimulator />

      <AdSlot format="horizontal" className="my-8" />

      <FAQ items={faqs} />
    </div>
  );
}
