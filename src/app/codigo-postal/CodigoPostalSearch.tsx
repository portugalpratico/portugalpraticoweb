"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(urlQuery);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<CPResult[] | null>(null);
  const [error, setError] = useState("");
  const [ms, setMs] = useState<number | null>(null);

  const search = useCallback(async (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    setLoading(true);
    setError("");
    setResults(null);
    setMs(null);

    try {
      const res = await fetch(`/api/codigo-postal?q=${encodeURIComponent(trimmed)}`, {
        headers: { "x-api-source": "pp-web" },
      });
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
  }, []);

  // Runs whenever the URL ?q= param changes (including on first load)
  useEffect(() => {
    if (urlQuery.trim()) {
      setQuery(urlQuery);
      search(urlQuery);
    }
  }, [urlQuery, search]);

  return (
    <div className="space-y-4">
      <div className="card">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Pesquisar por rua, localidade ou código postal
        </label>
        <div className="flex gap-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search(query)}
            placeholder="Ex: Rua Augusta Lisboa, 1000-001, Porto..."
            className="input-field"
          />
          <button onClick={() => search(query)} disabled={loading} className="btn-primary shrink-0">
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
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-xl px-4 py-3 text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {results && results.length === 0 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800 rounded-xl px-4 py-3 text-sm text-yellow-700 dark:text-yellow-400">
          Nenhum resultado encontrado para &quot;{query}&quot;.
        </div>
      )}

      {results && results.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card overflow-hidden animate-fade-in">
          <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {results.length === 50 ? "50+" : results.length}{" "}
              resultado{results.length !== 1 ? "s" : ""} encontrado{results.length !== 1 ? "s" : ""}
            </span>
            {ms !== null && <span className="text-xs text-gray-400 dark:text-gray-500">{ms}ms</span>}
          </div>
          <div className="divide-y divide-gray-50 dark:divide-gray-700">
            {results.map((r, i) => (
              <div key={`${r.codigoCompleto}-${i}`} className="px-5 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="font-mono font-bold text-[#046A38] dark:text-green-400 text-base">{r.codigoCompleto}</span>
                  {(r.morada || r.localidadeEspecifica) && (
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5 truncate">
                      {[r.morada, r.localidadeEspecifica].filter(Boolean).join(", ")}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {[r.localidade, r.freguesia, r.conselho, r.distrito].filter(Boolean).join(" · ")}
                  </p>
                </div>
                <button
                  onClick={() => navigator.clipboard?.writeText(r.codigoCompleto)}
                  className="shrink-0 text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 px-2 py-1 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-gray-300 dark:hover:border-gray-500 transition-colors"
                >
                  Copiar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-xs text-gray-400 dark:text-gray-500 text-center">
        Base de dados CTT · {(324180).toLocaleString("pt-PT")} códigos postais
      </div>
    </div>
  );
}
