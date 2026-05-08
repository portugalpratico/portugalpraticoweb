import type { Metadata } from "next";
import NIFValidator from "./NIFValidator";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Validar NIF Português — Verificação Online Gratuita",
  description:
    "Valide gratuitamente qualquer Número de Identificação Fiscal (NIF) português. Ferramenta online rápida e fiável.",
  alternates: { canonical: "/nif" },
};

const faqs = [
  {
    question: "O que é o NIF?",
    answer:
      "O NIF (Número de Identificação Fiscal) é o número de identificação tributária usado em Portugal para identificar contribuintes, sejam pessoas singulares ou coletivas.",
  },
  {
    question: "Como é validado um NIF?",
    answer:
      "Um NIF português tem 9 dígitos. A validação é feita através de um algoritmo de checksum que verifica se o último dígito é correto em relação aos 8 primeiros.",
  },
  {
    question: "Qual o primeiro dígito do NIF de uma empresa?",
    answer:
      "Para pessoas coletivas (empresas) o NIF começa em 5, 6, 7 ou 8. Para pessoas singulares começa em 1, 2 ou 3.",
  },
  {
    question: "Este validador guarda o NIF introduzido?",
    answer:
      "Não. A validação é feita localmente no seu browser e nenhum dado é transmitido ou guardado nos nossos servidores.",
  },
];

export default function NIFPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "Validar NIF" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Validar NIF Português</h1>
        <p className="text-gray-500">Verifique se um Número de Identificação Fiscal português é válido.</p>
      </div>

      <NIFValidator />

      <AdSlot format="horizontal" className="my-8" />

      <div className="card mb-8">
        <h2 className="font-semibold text-gray-900 mb-3">Estrutura do NIF Português</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="font-medium">Começa em 1, 2 ou 3</span>
            <span>Pessoa singular</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="font-medium">Começa em 45</span>
            <span>Cidadão não residente</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="font-medium">Começa em 5</span>
            <span>Pessoa coletiva</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="font-medium">Começa em 6</span>
            <span>Organismo da administração pública</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="font-medium">Começa em 70, 74 ou 75</span>
            <span>Herança indivisa</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="font-medium">Começa em 77</span>
            <span>Pessoa coletiva não residente</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="font-medium">Começa em 8</span>
            <span>Empresário em nome individual</span>
          </div>
        </div>
      </div>

      <FAQ items={faqs} />
    </div>
  );
}
