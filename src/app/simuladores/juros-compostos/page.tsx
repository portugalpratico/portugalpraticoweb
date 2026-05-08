import type { Metadata } from "next";
import JurosSimulator from "./JurosSimulator";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Calculadora Juros Compostos — Simulador de Investimentos",
  description:
    "Calcule o crescimento do seu investimento com juros compostos. Inclui aportes mensais e visualização do crescimento ao longo do tempo.",
  alternates: { canonical: "/simuladores/juros-compostos" },
};

export default function JurosPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Simuladores", href: "/simuladores" },
          { label: "Juros Compostos" },
        ]}
      />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Calculadora de Juros Compostos</h1>
        <p className="text-gray-500 dark:text-gray-400">Simule o crescimento do seu investimento com aportes regulares.</p>
      </div>
      <JurosSimulator />
      <AdSlot format="horizontal" className="my-8" />
    </div>
  );
}
