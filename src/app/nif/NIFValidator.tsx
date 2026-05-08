"use client";

import { useState } from "react";
import { IconCheck, IconX } from "@/components/Icons";

function validateNIF(nif: string): { valid: boolean; type: string; message: string } {
  const n = nif.trim().replace(/\s/g, "");

  if (!/^\d{9}$/.test(n)) {
    return { valid: false, type: "", message: "O NIF deve ter exatamente 9 dígitos." };
  }

  const firstDigit = parseInt(n[0]);
  const validStarts = [1, 2, 3, 5, 6, 7, 8, 9];
  if (!validStarts.includes(firstDigit)) {
    return { valid: false, type: "", message: "O primeiro dígito do NIF não é válido." };
  }

  const digits = n.split("").map(Number);
  const checkDigit = digits[8];
  let sum = 0;
  for (let i = 0; i < 8; i++) {
    sum += digits[i] * (9 - i);
  }
  const remainder = sum % 11;
  const expected = remainder < 2 ? 0 : 11 - remainder;

  if (checkDigit !== expected) {
    return { valid: false, type: "", message: "O dígito de controlo do NIF é inválido." };
  }

  const types: Record<string, string> = {
    "1": "Pessoa singular", "2": "Pessoa singular", "3": "Pessoa singular",
    "45": "Cidadão não residente",
    "5": "Pessoa coletiva",
    "6": "Organismo da administração pública",
    "70": "Herança indivisa", "74": "Herança indivisa", "75": "Herança indivisa",
    "77": "Pessoa coletiva não residente",
    "8": "Empresário em nome individual",
    "9": "Condomínio / Não residente",
  };

  const type =
    types[n.slice(0, 2)] ?? types[n[0]] ?? "Entidade não identificada";

  return { valid: true, type, message: "NIF válido!" };
}

export default function NIFValidator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ReturnType<typeof validateNIF> | null>(null);

  const handle = () => {
    if (!value.trim()) return;
    setResult(validateNIF(value));
  };

  return (
    <div className="card mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">NIF a validar</label>
      <div className="flex gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => { setValue(e.target.value); setResult(null); }}
          onKeyDown={(e) => e.key === "Enter" && handle()}
          placeholder="Ex: 123456789"
          maxLength={9}
          className="input-field"
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
            {result.valid && result.type && (
              <p className="text-xs mt-0.5 opacity-75">Tipo: {result.type}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
