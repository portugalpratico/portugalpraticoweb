"use client";

import { useState } from "react";

function fmt(n: number) {
  return n.toLocaleString("pt-PT", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function JurosSimulator() {
  const [capital, setCapital] = useState("10000");
  const [aporte, setAporte] = useState("200");
  const [taxa, setTaxa] = useState("7");
  const [anos, setAnos] = useState("20");
  const [result, setResult] = useState<{ total: number; invested: number; gain: number; byYear: { year: number; value: number }[] } | null>(null);

  const calculate = () => {
    const c = parseFloat(capital) || 0;
    const a = parseFloat(aporte) || 0;
    const r = (parseFloat(taxa) || 0) / 100 / 12;
    const n = (parseInt(anos) || 1) * 12;

    const byYear: { year: number; value: number }[] = [];
    let value = c;
    for (let m = 1; m <= n; m++) {
      value = value * (1 + r) + a;
      if (m % 12 === 0) byYear.push({ year: m / 12, value: Math.round(value) });
    }

    const invested = c + a * n;
    setResult({ total: Math.round(value), invested: Math.round(invested), gain: Math.round(value - invested), byYear });
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Capital inicial (€)</label>
            <input type="number" value={capital} onChange={(e) => setCapital(e.target.value)} className="input-field" placeholder="10000" min="0" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Aporte mensal (€)</label>
            <input type="number" value={aporte} onChange={(e) => setAporte(e.target.value)} className="input-field" placeholder="200" min="0" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Taxa anual (%)</label>
            <input type="number" value={taxa} onChange={(e) => setTaxa(e.target.value)} className="input-field" placeholder="7" min="0" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Prazo (anos)</label>
            <input type="number" value={anos} onChange={(e) => setAnos(e.target.value)} className="input-field" placeholder="20" min="1" max="50" />
          </div>
        </div>
        <button onClick={calculate} className="btn-primary w-full">Calcular</button>
      </div>

      {result && (
        <div className="card animate-fade-in space-y-4">
          <h3 className="font-semibold text-gray-900">Resultado ao fim de {anos} anos</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">Capital final</p>
              <p className="font-bold text-[#046A38] text-lg">{fmt(result.total)}</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">Total investido</p>
              <p className="font-bold text-blue-700 text-lg">{fmt(result.invested)}</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">Juros ganhos</p>
              <p className="font-bold text-yellow-700 text-lg">{fmt(result.gain)}</p>
            </div>
          </div>

          {/* Progress table */}
          <div className="overflow-hidden rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Ano</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Valor acumulado</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">% crescimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {result.byYear.filter((_, i) => i % Math.max(1, Math.floor(result.byYear.length / 10)) === 0 || i === result.byYear.length - 1).map((row) => (
                  <tr key={row.year} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 font-medium text-gray-900">{row.year}</td>
                    <td className="px-4 py-2.5 text-right font-medium text-[#046A38]">{fmt(row.value)}</td>
                    <td className="px-4 py-2.5 text-right text-gray-500">
                      +{(((row.value - result.invested) / result.invested) * 100).toFixed(0)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
