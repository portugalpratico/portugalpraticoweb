"use client";

import { useState } from "react";
import NIFValidator from "./NIFValidator";
import IBANValidator from "@/app/iban/IBANValidator";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";

const nifFaqs = [
  {
    question: "O que é o NIF?",
    answer: "O NIF (Número de Identificação Fiscal) é o número de identificação tributária usado em Portugal para identificar contribuintes, sejam pessoas singulares ou coletivas.",
  },
  {
    question: "Como é validado um NIF?",
    answer: "Um NIF português tem 9 dígitos. A validação é feita através de um algoritmo de checksum que verifica se o último dígito é correto em relação aos 8 primeiros.",
  },
  {
    question: "Qual o primeiro dígito do NIF de uma empresa?",
    answer: "Para pessoas coletivas (empresas) o NIF começa em 5, 6, 7 ou 8. Para pessoas singulares começa em 1, 2 ou 3.",
  },
  {
    question: "O NIF introduzido é guardado?",
    answer: "Não. A validação é feita localmente no seu browser e nenhum dado é transmitido ou guardado nos nossos servidores.",
  },
];

const ibanFaqs = [
  {
    question: "O que é o IBAN?",
    answer: "O IBAN (International Bank Account Number) é um formato padronizado de número de conta bancária utilizado internacionalmente para identificar contas bancárias.",
  },
  {
    question: "Qual é o formato do IBAN português?",
    answer: "O IBAN português começa sempre com 'PT50' seguido de 21 dígitos, totalizando 25 caracteres.",
  },
  {
    question: "Como funciona a validação do IBAN?",
    answer: "A validação é feita através do algoritmo MOD-97, que verifica matematicamente se o IBAN é válido. O validador suporta IBANs de Portugal e outros 15 países europeus.",
  },
  {
    question: "O IBAN pode substituir o NIB?",
    answer: "Sim. O NIB (Número de Identificação Bancária) português está incorporado no IBAN. Os últimos 21 dígitos do IBAN PT correspondem ao NIB.",
  },
];

export default function NifIbanTabs() {
  const [tab, setTab] = useState<"nif" | "iban">("nif");

  return (
    <>
      {/* Tab switcher */}
      <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1 gap-1 mb-6">
        <button
          onClick={() => setTab("nif")}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            tab === "nif" ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          Validar NIF
        </button>
        <button
          onClick={() => setTab("iban")}
          className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            tab === "iban" ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          Validar IBAN
        </button>
      </div>

      {tab === "nif" ? <NIFValidator /> : <IBANValidator />}

      <AdSlot format="horizontal" className="my-8" />

      {tab === "nif" ? (
        <>
          <div className="card mb-8">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Estrutura do NIF Português</h2>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {[
                ["Começa em 1, 2 ou 3", "Pessoa singular"],
                ["Começa em 45", "Cidadão não residente"],
                ["Começa em 5", "Pessoa coletiva"],
                ["Começa em 6", "Organismo da administração pública"],
                ["Começa em 70, 74 ou 75", "Herança indivisa"],
                ["Começa em 77", "Pessoa coletiva não residente"],
                ["Começa em 8", "Empresário em nome individual"],
              ].map(([k, v], i, arr) => (
                <div key={k} className={`flex justify-between py-2 ${i < arr.length - 1 ? "border-b border-gray-50 dark:border-gray-700" : ""}`}>
                  <span className="font-medium dark:text-gray-300">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <FAQ items={nifFaqs} />
        </>
      ) : (
        <>
          <div className="card mb-8">
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Estrutura do IBAN Português</h2>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 font-mono text-sm mb-4 tracking-widest text-center text-gray-700 dark:text-gray-300">
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
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex gap-2"><span className="w-2 h-2 rounded bg-blue-300 mt-0.5 shrink-0" /><span><strong>PT50</strong> — Código país + dígitos de controlo</span></div>
              <div className="flex gap-2"><span className="w-2 h-2 rounded bg-green-300 mt-0.5 shrink-0" /><span><strong>0000</strong> — Código do banco</span></div>
              <div className="flex gap-2"><span className="w-2 h-2 rounded bg-yellow-300 mt-0.5 shrink-0" /><span><strong>0000</strong> — Código da agência</span></div>
              <div className="flex gap-2"><span className="w-2 h-2 rounded bg-purple-300 mt-0.5 shrink-0" /><span><strong>00000000000</strong> — Número da conta</span></div>
              <div className="flex gap-2"><span className="w-2 h-2 rounded bg-red-300 mt-0.5 shrink-0" /><span><strong>00</strong> — Dígitos de controlo NIB</span></div>
            </div>
          </div>
          <FAQ items={ibanFaqs} />
        </>
      )}
    </>
  );
}
