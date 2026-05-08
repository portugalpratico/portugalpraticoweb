"use client";

import { useState } from "react";
import { IconCheck, IconX } from "@/components/Icons";

function validateIBAN(raw: string): { valid: boolean; country: string; message: string; formatted: string } {
  const iban = raw.trim().toUpperCase().replace(/\s/g, "");

  if (iban.length < 4) {
    return { valid: false, country: "", message: "IBAN demasiado curto.", formatted: "" };
  }

  const countryCode = iban.slice(0, 2);
  const lengths: Record<string, number> = {
    PT: 25, ES: 24, FR: 27, DE: 22, IT: 27, GB: 22, NL: 18, BE: 16,
    AT: 20, CH: 21, LU: 20, PL: 28, CZ: 24, HU: 28, RO: 24, BG: 22,
  };

  const expectedLen = lengths[countryCode];
  if (!expectedLen) {
    return { valid: false, country: "", message: `País "${countryCode}" não suportado ou não reconhecido.`, formatted: "" };
  }

  if (iban.length !== expectedLen) {
    return { valid: false, country: "", message: `IBAN ${countryCode} deve ter ${expectedLen} caracteres (tem ${iban.length}).`, formatted: "" };
  }

  // MOD-97 validation
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numeric = rearranged.split("").map((c) => {
    const code = c.charCodeAt(0);
    return code >= 65 ? String(code - 55) : c;
  }).join("");

  let remainder = 0;
  for (const ch of numeric) {
    remainder = (remainder * 10 + parseInt(ch)) % 97;
  }

  if (remainder !== 1) {
    return { valid: false, country: "", message: "O IBAN introduzido não é válido (falhou a verificação MOD-97).", formatted: "" };
  }

  const countries: Record<string, string> = {
    PT: "Portugal", ES: "Espanha", FR: "França", DE: "Alemanha", IT: "Itália",
    GB: "Reino Unido", NL: "Países Baixos", BE: "Bélgica", AT: "Áustria",
    CH: "Suíça", LU: "Luxemburgo", PL: "Polónia", CZ: "República Checa",
    HU: "Hungria", RO: "Roménia", BG: "Bulgária",
  };

  const formatted = iban.match(/.{1,4}/g)?.join(" ") ?? iban;

  return {
    valid: true,
    country: countries[countryCode] ?? countryCode,
    message: "IBAN válido!",
    formatted,
  };
}

export default function IBANValidator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ReturnType<typeof validateIBAN> | null>(null);

  const handle = () => {
    if (!value.trim()) return;
    setResult(validateIBAN(value));
  };

  return (
    <div className="card mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">IBAN a validar</label>
      <div className="flex gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => { setValue(e.target.value); setResult(null); }}
          onKeyDown={(e) => e.key === "Enter" && handle()}
          placeholder="Ex: PT50 0000 0000 0000 0000 0000 0"
          className="input-field font-mono tracking-wider"
        />
        <button onClick={handle} className="btn-primary shrink-0">Validar</button>
      </div>

      {result && (
        <div
          className={`mt-4 flex items-start gap-3 p-4 rounded-xl border animate-fade-in ${
            result.valid
              ? "bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800 text-green-800 dark:text-green-300"
              : "bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800 text-red-800 dark:text-red-300"
          }`}
        >
          <span className={result.valid ? "text-green-600" : "text-red-500"}>
            {result.valid ? <IconCheck /> : <IconX />}
          </span>
          <div>
            <p className="font-semibold text-sm">{result.message}</p>
            {result.valid && (
              <div className="text-xs mt-1 space-y-0.5 opacity-80">
                <p>País: {result.country}</p>
                <p className="font-mono tracking-wider">{result.formatted}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
