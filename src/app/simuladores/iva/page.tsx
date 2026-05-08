import type { Metadata } from "next";
import IVACalculator from "./IVACalculator";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Calculadora IVA Portugal 2025 — Adicionar e Remover IVA",
  description:
    "Calcule o IVA em Portugal nas taxas de 6%, 13% e 23%. Adicione ou remova IVA a qualquer valor instantaneamente.",
  alternates: { canonical: "/simuladores/iva" },
};

export default function IVAPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Simuladores", href: "/simuladores" },
          { label: "Calculadora IVA" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Calculadora IVA Portugal</h1>
        <p className="text-gray-500">Adicione ou remova IVA nas taxas portuguesas de 6%, 13% e 23%.</p>
      </div>

      <IVACalculator />

      <AdSlot format="horizontal" className="my-8" />

      <div className="card">
        <h2 className="font-semibold text-gray-900 mb-3">Taxas de IVA em Portugal</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
            <span className="badge bg-green-100 text-green-700 shrink-0">6%</span>
            <div>
              <p className="font-medium text-gray-900">Taxa Reduzida</p>
              <p className="text-gray-500 text-xs mt-0.5">Alimentação básica, medicamentos, transportes públicos, livros, alguns serviços de saúde</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-xl">
            <span className="badge bg-yellow-100 text-yellow-700 shrink-0">13%</span>
            <div>
              <p className="font-medium text-gray-900">Taxa Intermédia</p>
              <p className="text-gray-500 text-xs mt-0.5">Restauração, produtos alimentares processados, vinho, azeite</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-red-50 rounded-xl">
            <span className="badge bg-red-100 text-red-700 shrink-0">23%</span>
            <div>
              <p className="font-medium text-gray-900">Taxa Normal</p>
              <p className="text-gray-500 text-xs mt-0.5">Maioria dos bens e serviços não abrangidos pelas taxas reduzida ou intermédia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
