"use client";

import { useState } from "react";

const RATES = [6, 13, 23];

function fmt(n: number) {
  return n.toLocaleString("pt-PT", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
}

export default function IVACalculator() {
  const [value, setValue] = useState("");
  const [rate, setRate] = useState(23);
  const [mode, setMode] = useState<"add" | "remove">("add");

  const num = parseFloat(value.replace(",", "."));
  const valid = !isNaN(num) && num > 0;

  const ivaAmount = valid
    ? mode === "add"
      ? num * (rate / 100)
      : num - num / (1 + rate / 100)
    : 0;

  const total = valid
    ? mode === "add"
      ? num + ivaAmount
      : num - ivaAmount
    : 0;

  const base = valid
    ? mode === "add" ? num : num / (1 + rate / 100)
    : 0;

  return (
    <div className="card space-y-5">
      {/* Mode toggle */}
      <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
        <button
          onClick={() => setMode("add")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === "add" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Adicionar IVA
        </button>
        <button
          onClick={() => setMode("remove")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === "remove" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Remover IVA
        </button>
      </div>

      {/* Rate buttons */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Taxa de IVA</label>
        <div className="flex gap-2">
          {RATES.map((r) => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                rate === r
                  ? "bg-[#046A38] border-[#046A38] text-white"
                  : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              {r}%
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Valor {mode === "add" ? "sem IVA (€)" : "com IVA (€)"}
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ex: 100.00"
          min="0"
          step="0.01"
          className="input-field"
        />
      </div>

      {/* Results */}
      {valid && (
        <div className="space-y-2 animate-fade-in text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">Valor base (sem IVA)</span>
            <span className="font-medium">{fmt(base)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-600">IVA ({rate}%)</span>
            <span className="font-medium text-[#DA291C]">{fmt(ivaAmount)}</span>
          </div>
          <div className="flex justify-between py-2 bg-green-50 rounded-xl px-3">
            <span className="font-semibold">Total com IVA</span>
            <span className="font-bold text-[#046A38] text-base">{fmt(mode === "add" ? total : num)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
