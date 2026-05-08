"use client";

import { useState } from "react";

interface CPResult {
  codigoCompleto: string;
  morada: string;
  localidadeEspecifica: string;
  localidade: string;
  conselho: string;
  freguesia: string;
  distrito: string;
}

export default function CodigoPostalSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<CPResult[] | null>(null);
  const [error, setError] = useState("");
  const [ms, setMs] = useState<number | null>(null);

  const search = async (q = query) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setLoading(true);
    setError("");
    setResults(null);
    setMs(null);

    try {
      const res = await fetch(`/api/codigo-postal?q=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Erro ao pesquisar.");
      } else {
        setResults(data.results ?? []);
        setMs(data.ms ?? null);
      }
    } catch {
      setError("Erro ao pesquisar. Por favor tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="card">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pesquisar por rua, localidade ou código postal
        </label>
        <div className="flex gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search()}
            placeholder="Ex: Rua Augusta Lisboa, 1000-001, Porto..."
            className="input-field"
          />
          <button onClick={() => search()} disabled={loading} className="btn-primary shrink-0">
            {loading ? (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
            Pesquisar
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {results && results.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl px-4 py-3 text-sm text-yellow-700">
          Nenhum resultado encontrado para &quot;{query}&quot;.
        </div>
      )}

      {results && results.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden animate-fade-in">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500 font-medium">
              {results.length === 50 ? "50+" : results.length}{" "}
              resultado{results.length !== 1 ? "s" : ""} encontrado{results.length !== 1 ? "s" : ""}
            </span>
            {ms !== null && <span className="text-xs text-gray-400">{ms}ms</span>}
          </div>
          <div className="divide-y divide-gray-50">
            {results.map((r, i) => (
              <div key={`${r.codigoCompleto}-${i}`} className="px-5 py-3.5 hover:bg-gray-50 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="font-mono font-bold text-[#046A38] text-base">{r.codigoCompleto}</span>
                  {(r.morada || r.localidadeEspecifica) && (
                    <p className="text-sm text-gray-700 mt-0.5 truncate">
                      {[r.morada, r.localidadeEspecifica].filter(Boolean).join(", ")}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-0.5">
                    {[r.localidade, r.freguesia, r.conselho, r.distrito].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <button
                  onClick={() => navigator.clipboard?.writeText(r.codigoCompleto)}
                  className="shrink-0 text-xs text-gray-400 hover:text-gray-600 px-2 py-1 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                >
                  Copiar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-xs text-gray-400 text-center">
        Base de dados CTT · {(324180).toLocaleString("pt-PT")} códigos postais
      </div>
    </div>
  );
}
