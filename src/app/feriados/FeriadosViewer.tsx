"use client";

import { useState } from "react";

interface Feriado {
  data: string;
  nome: string;
  dia: string;
  facultativo?: boolean;
}

interface Props {
  feriados: Record<number, Feriado[]>;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00Z");
  return d.toLocaleDateString("pt-PT", { day: "numeric", month: "long", timeZone: "UTC" });
}

export default function FeriadosViewer({ feriados }: Props) {
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1];
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const list = feriados[selectedYear] ?? [];

  return (
    <>
      {/* Year selector */}
      <div className="flex bg-gray-100 rounded-xl p-1 gap-1 mb-6">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setSelectedYear(y)}
            className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              selectedYear === y
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {y}
            {y === currentYear && (
              <span className="ml-1.5 text-xs text-[#046A38] font-semibold">atual</span>
            )}
          </button>
        ))}
      </div>

      {/* Table */}
      {list.length > 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-card">
          <div className="px-5 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-700">Feriados Nacionais {selectedYear}</span>
            <span className="text-xs text-gray-400">{list.length} feriados</span>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Data</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide hidden sm:table-cell">Dia</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">Feriado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {list.map((f) => {
                const isWeekend = f.dia === "Sábado" || f.dia === "Domingo";
                const isToday = f.data === new Date().toISOString().slice(0, 10);
                return (
                  <tr
                    key={f.data}
                    className={`transition-colors ${isToday ? "bg-green-50" : "hover:bg-gray-50"} ${isWeekend ? "opacity-60" : ""}`}
                  >
                    <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">
                      {formatDate(f.data)}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 hidden sm:table-cell whitespace-nowrap">{f.dia}</td>
                    <td className="px-5 py-3.5 text-gray-700">
                      <span>{f.nome}</span>
                      {isToday && (
                        <span className="ml-2 badge bg-green-100 text-[#046A38]">Hoje</span>
                      )}
                      {f.facultativo && (
                        <span className="ml-2 badge bg-yellow-50 text-yellow-700">Facultativo</span>
                      )}
                      {isWeekend && (
                        <span className="ml-2 badge bg-gray-100 text-gray-500">Fim de semana</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl px-6 py-8 text-center text-sm text-yellow-700">
          Dados para {selectedYear} ainda não disponíveis.
        </div>
      )}
    </>
  );
}
