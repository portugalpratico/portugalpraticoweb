"use client";

import { useState } from "react";

function fmt(n: number) {
  return n.toLocaleString("pt-PT", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
}

export default function CreditoSimulator() {
  const [capital, setCapital] = useState("200000");
  const [prazo, setPrazo] = useState("30");
  const [euribor, setEuribor] = useState("3.0");
  const [spread, setSpread] = useState("1.0");
  const [result, setResult] = useState<{
    prestacao: number; totalPago: number; totalJuros: number; taxa: number;
  } | null>(null);

  const calculate = () => {
    const c = parseFloat(capital) || 0;
    const n = (parseInt(prazo) || 1) * 12;
    const taxa = ((parseFloat(euribor) || 0) + (parseFloat(spread) || 0)) / 100 / 12;

    let prestacao: number;
    if (taxa === 0) {
      prestacao = c / n;
    } else {
      prestacao = (c * taxa * Math.pow(1 + taxa, n)) / (Math.pow(1 + taxa, n) - 1);
    }

    const totalPago = prestacao * n;
    setResult({ prestacao, totalPago, totalJuros: totalPago - c, taxa: (parseFloat(euribor) || 0) + (parseFloat(spread) || 0) });
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Capital (€)</label>
            <input type="number" value={capital} onChange={(e) => setCapital(e.target.value)} className="input-field" placeholder="200000" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Prazo (anos)</label>
            <input type="number" value={prazo} onChange={(e) => setPrazo(e.target.value)} className="input-field" placeholder="30" min="1" max="40" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Euribor (%)</label>
            <input type="number" value={euribor} onChange={(e) => setEuribor(e.target.value)} className="input-field" placeholder="3.0" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Spread (%)</label>
            <input type="number" value={spread} onChange={(e) => setSpread(e.target.value)} className="input-field" placeholder="1.0" step="0.1" />
          </div>
        </div>
        <button onClick={calculate} className="btn-primary w-full">Calcular Prestação</button>
      </div>

      {result && (
        <div className="card animate-fade-in space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-5 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Prestação Mensal</p>
            <p className="text-4xl font-bold text-[#046A38] dark:text-green-400">{fmt(result.prestacao)}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Taxa total: {result.taxa.toFixed(2)}% ao ano</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total pago</p>
              <p className="font-bold text-gray-900 dark:text-gray-100">{fmt(result.totalPago)}</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total em juros</p>
              <p className="font-bold text-red-600 dark:text-red-400">{fmt(result.totalJuros)}</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">* Simulação indicativa. Não inclui seguros, comissões ou outros encargos. Consulte o seu banco.</p>
        </div>
      )}
    </div>
  );
}
