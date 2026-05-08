"use client";

import { useState, useCallback } from "react";

// IRS 2025 brackets (simplified, single)
const IRS_BRACKETS = [
  { min: 0, max: 7703, rate: 0.1325, deduction: 0 },
  { min: 7703, max: 11623, rate: 0.18, deduction: 408.66 },
  { min: 11623, max: 16472, rate: 0.23, deduction: 989.82 },
  { min: 16472, max: 21321, rate: 0.26, deduction: 1483.64 },
  { min: 21321, max: 27146, rate: 0.3275, deduction: 3143.87 },
  { min: 27146, max: 39791, rate: 0.37, deduction: 4424.25 },
  { min: 39791, max: 51997, rate: 0.435, deduction: 7013.42 },
  { min: 51997, max: 81199, rate: 0.45, deduction: 7791.43 },
  { min: 81199, max: Infinity, rate: 0.48, deduction: 10227.9 },
];

function calcIRS(annual: number): number {
  const bracket = IRS_BRACKETS.find((b) => annual > b.min && annual <= b.max) ?? IRS_BRACKETS[IRS_BRACKETS.length - 1];
  return Math.max(0, annual * bracket.rate - bracket.deduction);
}

function calcSalary(gross: number, months: 12 | 14) {
  const ss = gross * 0.11;
  const netBeforeIRS = gross - ss;
  const annualGross = gross * months;
  const annualIRS = calcIRS(annualGross);
  const monthlyIRS = annualIRS / 12;
  const net = gross - ss - monthlyIRS;
  return { gross, ss, monthlyIRS, net, netBeforeIRS, annualGross, annualIRS };
}

function fmt(n: number) {
  return n.toLocaleString("pt-PT", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
}

export default function SalarioSimulator() {
  const [bruto, setBruto] = useState("1500");
  const [months, setMonths] = useState<12 | 14>(14);
  const [result, setResult] = useState<ReturnType<typeof calcSalary> | null>(null);

  const calculate = useCallback(() => {
    const g = parseFloat(bruto.replace(",", "."));
    if (isNaN(g) || g <= 0) return;
    setResult(calcSalary(g, months));
  }, [bruto, months]);

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Salário Bruto Mensal (€)</label>
            <input
              type="number"
              value={bruto}
              onChange={(e) => setBruto(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="Ex: 1500"
              min="0"
              step="50"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Meses de salário/ano</label>
            <select
              value={months}
              onChange={(e) => setMonths(Number(e.target.value) as 12 | 14)}
              className="input-field"
            >
              <option value={14}>14 meses (com subsídios)</option>
              <option value={12}>12 meses</option>
            </select>
          </div>
        </div>
        <button onClick={calculate} className="btn-primary w-full">Calcular Salário Líquido</button>
      </div>

      {result && (
        <div className="card animate-fade-in space-y-4">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Resultado</h3>

          {/* Main result */}
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Salário Líquido Mensal</p>
            <p className="text-4xl font-bold text-[#046A38]">{fmt(result.net)}</p>
          </div>

          {/* Breakdown */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Salário Bruto</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">{fmt(result.gross)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Desconto Segurança Social (11%)</span>
              <span className="font-medium text-red-600 dark:text-red-400">− {fmt(result.ss)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Retenção na Fonte IRS (mensal)</span>
              <span className="font-medium text-red-600 dark:text-red-400">− {fmt(result.monthlyIRS)}</span>
            </div>
            <div className="flex justify-between py-2 bg-green-50 dark:bg-green-900/20 rounded-lg px-3">
              <span className="font-semibold text-gray-900 dark:text-gray-100">Salário Líquido</span>
              <span className="font-bold text-[#046A38] dark:text-green-400 text-base">{fmt(result.net)}</span>
            </div>
          </div>

          {/* Annual */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">Rendimento anual bruto</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">{fmt(result.annualGross)}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">IRS anual estimado</p>
              <p className="font-bold text-red-600 dark:text-red-400">{fmt(result.annualIRS)}</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500">
            * Cálculo estimado. Os valores reais podem variar conforme situação fiscal, deduções e tabelas de retenção aplicáveis. Consulte sempre um contabilista.
          </p>
        </div>
      )}
    </div>
  );
}
