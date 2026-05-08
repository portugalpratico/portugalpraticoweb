import type { Metadata } from "next";
import CreditoSimulator from "./CreditoSimulator";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Simulador Crédito Habitação 2025 — Calcule a Sua Prestação",
  description:
    "Simule a prestação mensal do seu crédito habitação. Calcule com base no capital, prazo e taxa de juro Euribor + spread.",
  alternates: { canonical: "/simuladores/credito-habitacao" },
};

const faqs = [
  {
    question: "O que é o spread no crédito habitação?",
    answer: "O spread é a margem de lucro do banco, adicionada à taxa Euribor para formar a taxa de juro total do crédito habitação.",
  },
  {
    question: "Qual é a Euribor atual?",
    answer: "A Euribor varia diariamente. A mais usada para crédito habitação é a Euribor a 6 meses ou a 12 meses. Consulte sempre o banco para obter a taxa atualizada.",
  },
  {
    question: "Posso fixar a taxa do meu crédito habitação?",
    answer: "Sim. Existem contratos a taxa variável (Euribor + spread), taxa mista (período inicial fixo e depois variável) e taxa fixa durante todo o prazo.",
  },
];

export default function CreditoHabitacaoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Simuladores", href: "/simuladores" },
          { label: "Crédito Habitação" },
        ]}
      />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Simulador Crédito Habitação</h1>
        <p className="text-gray-500">Calcule a prestação mensal do seu crédito habitação.</p>
      </div>
      <CreditoSimulator />
      <AdSlot format="horizontal" className="my-8" />
      <FAQ items={faqs} />
    </div>
  );
}
