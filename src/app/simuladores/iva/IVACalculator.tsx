"use client";

import { useState } from "react";

const RATES = [6, 13, 23];

function fmt(n: number) {
  return n.toLocaleString("pt-PT", { style: "currency", currency: "EUR", minimumFractionDigits: 2 });
}

export default function IVACalculator() {
  const [value, setValue] = useState("");
  const [rate, setRate] = useState(23);
  const [customRate, setCustomRate] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [mode, setMode] = useState<"add" | "remove">("add");

  const effectiveRate = useCustom
    ? parseFloat(customRate.replace(",", "."))
    : rate;
  const rateValid = !isNaN(effectiveRate) && effectiveRate > 0 && effectiveRate <= 100;

  const num = parseFloat(value.replace(",", "."));
  const valid = !isNaN(num) && num > 0;

  const ivaAmount = valid && rateValid
    ? mode === "add"
      ? num * (effectiveRate / 100)
      : num - num / (1 + effectiveRate / 100)
    : 0;

  const total = valid && rateValid
    ? mode === "add"
      ? num + ivaAmount
      : num - ivaAmount
    : 0;

  const base = valid && rateValid
    ? mode === "add" ? num : num / (1 + effectiveRate / 100)
    : 0;

  return (
    <div className="card space-y-5">
      {/* Mode toggle */}
      <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1 gap-1">
        <button
          onClick={() => setMode("add")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === "add" ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          Adicionar IVA
        </button>
        <button
          onClick={() => setMode("remove")}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${
            mode === "remove" ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 shadow-sm" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
        >
          Remover IVA
        </button>
      </div>

      {/* Rate buttons */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Taxa de IVA</label>
        <div className="flex gap-2 flex-wrap">
          {RATES.map((r) => (
            <button
              key={r}
              onClick={() => { setRate(r); setUseCustom(false); }}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                !useCustom && rate === r
                  ? "bg-[#046A38] border-[#046A38] text-white"
                  : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
              }`}
            >
              {r}%
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <label className="text-sm text-gray-500 dark:text-gray-400 shrink-0">Outra taxa:</label>
          <div className="relative flex-1 max-w-[140px]">
            <input
              type="number"
              value={customRate}
              onChange={(e) => { setCustomRate(e.target.value); setUseCustom(e.target.value !== ""); }}
              onFocus={() => { if (customRate) setUseCustom(true); }}
              placeholder="Ex: 5"
              min="0.01"
              max="100"
              step="0.01"
              className={`input-field pr-8 py-2 text-sm ${useCustom ? "border-[#046A38] ring-1 ring-[#046A38]" : ""}`}
            />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">%</span>
          </div>
        </div>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
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
      {valid && rateValid && (
        <div className="space-y-2 animate-fade-in text-sm">
          <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Valor base (sem IVA)</span>
            <span className="font-medium dark:text-gray-200">{fmt(base)}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">IVA ({effectiveRate}%)</span>
            <span className="font-medium text-[#DA291C] dark:text-red-400">{fmt(ivaAmount)}</span>
          </div>
          <div className="flex justify-between py-2 bg-green-50 dark:bg-green-900/20 rounded-xl px-3">
            <span className="font-semibold dark:text-gray-200">Total com IVA</span>
            <span className="font-bold text-[#046A38] dark:text-green-400 text-base">{fmt(mode === "add" ? total : num)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
