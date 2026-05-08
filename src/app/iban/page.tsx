import type { Metadata } from "next";
import IBANValidator from "./IBANValidator";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Validar IBAN — Verificar IBAN Português e Internacional",
  description:
    "Valide qualquer IBAN português ou internacional. Ferramenta gratuita e instantânea para verificar a validade de IBANs.",
  alternates: { canonical: "/iban" },
};

const faqs = [
  {
    question: "O que é o IBAN?",
    answer:
      "O IBAN (International Bank Account Number) é um formato padronizado de número de conta bancária utilizado internacionalmente para identificar contas bancárias.",
  },
  {
    question: "Qual é o formato do IBAN português?",
    answer:
      "O IBAN português começa sempre com 'PT50' seguido de 21 dígitos, totalizando 25 caracteres.",
  },
  {
    question: "Como funciona a validação do IBAN?",
    answer:
      "A validação é feita através do algoritmo MOD-97, que verifica matematicamente se o IBAN é válido.",
  },
  {
    question: "O IBAN pode substituir o NIB?",
    answer:
      "Sim. O NIB (Número de Identificação Bancária) português está incorporado no IBAN. Os últimos 21 dígitos do IBAN PT correspondem ao NIB.",
  },
];

export default function IBANPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "Validar IBAN" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Validar IBAN</h1>
        <p className="text-gray-500">Verifique se um IBAN português ou internacional é válido.</p>
      </div>

      <IBANValidator />

      <AdSlot format="horizontal" className="my-8" />

      <div className="card mb-8">
        <h2 className="font-semibold text-gray-900 mb-3">Estrutura do IBAN Português</h2>
        <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm mb-4 tracking-widest text-center text-gray-700">
          <span className="bg-blue-100 text-blue-700 px-1 rounded">PT50</span>
          {" "}
          <span className="bg-green-100 text-[#046A38] px-1 rounded">0000</span>
          {" "}
          <span className="bg-yellow-100 text-yellow-700 px-1 rounded">0000</span>
          {" "}
          <span className="bg-purple-100 text-purple-700 px-1 rounded">00000000000</span>
          {" "}
          <span className="bg-red-100 text-red-700 px-1 rounded">00</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
          <div className="flex gap-2"><span className="w-2 h-2 rounded bg-blue-300 mt-0.5 shrink-0" /><span><strong>PT50</strong> — Código país + dígitos de controlo</span></div>
          <div className="flex gap-2"><span className="w-2 h-2 rounded bg-green-300 mt-0.5 shrink-0" /><span><strong>0000</strong> — Código do banco</span></div>
          <div className="flex gap-2"><span className="w-2 h-2 rounded bg-yellow-300 mt-0.5 shrink-0" /><span><strong>0000</strong> — Código da agência</span></div>
          <div className="flex gap-2"><span className="w-2 h-2 rounded bg-purple-300 mt-0.5 shrink-0" /><span><strong>00000000000</strong> — Número da conta</span></div>
          <div className="flex gap-2"><span className="w-2 h-2 rounded bg-red-300 mt-0.5 shrink-0" /><span><strong>00</strong> — Dígitos de controlo NIB</span></div>
        </div>
      </div>

      <FAQ items={faqs} />
    </div>
  );
}
