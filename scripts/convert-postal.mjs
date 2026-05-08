/**
 * Converts PT_PostalCode.csv → src/lib/data/codigos-postais.json
 *
 * CSV format (Windows-1252, semicolon-delimited, \r\n):
 *   Concelho;Distrito;Freguesia;Morada;Localidade_Especifica;CP4;CP3;Localidade
 *
 * Output tuple per record:
 *   [cp4, cp3, morada, localidade_especifica, localidade, conselho, freguesia, distrito, searchStr]
 *
 * Run once: node scripts/convert-postal.mjs
 */

import { createRequire } from "module";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const iconv = require("iconv-lite");

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = "G:/My Drive/PortugalPratico/CodigosPostaisCSV.csv";
const OUT = join(__dirname, "../src/lib/data/codigos-postais.json");

function normalize(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

console.log("Reading CSV (Windows-1252)...");
const raw = readFileSync(SRC);
const text = iconv.decode(raw, "win1252");

const lines = text.split(/\r?\n/);
console.log(`Total lines (incl header): ${lines.length}`);

// Parse header
// Concelho;Distrito;Freguesia;Morada;Localidade_Especifica;CP4;CP3;Localidade
const data = [];
let skipped = 0;

for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line) continue;

  const cols = line.split(";");
  if (cols.length < 8) { skipped++; continue; }

  const [concelho, distrito, freguesia, morada, localidadeEspecifica, cp4raw, cp3raw, localidade] = cols;

  const cp4 = String(cp4raw || "").trim().padStart(4, "0");
  const cp3 = String(cp3raw || "").trim().padStart(3, "0");

  if (!cp4 || cp4 === "0000") { skipped++; continue; }

  const searchStr = normalize(
    `${cp4}-${cp3} ${morada} ${localidadeEspecifica} ${localidade} ${freguesia} ${concelho} ${distrito}`
  );

  data.push([
    cp4,
    cp3,
    (morada || "").trim(),
    (localidadeEspecifica || "").trim(),
    (localidade || "").trim(),
    (concelho || "").trim(),
    (freguesia || "").trim(),
    (distrito || "").trim(),
    searchStr,
  ]);
}

console.log(`Valid records: ${data.length}  |  Skipped: ${skipped}`);

mkdirSync(join(__dirname, "../src/lib/data"), { recursive: true });
writeFileSync(OUT, JSON.stringify(data), "utf-8");

const sizeKB = Math.round(Buffer.byteLength(JSON.stringify(data)) / 1024);
console.log(`Written to ${OUT} (${sizeKB} KB)`);

// Coverage check
const distritos = [...new Set(data.map(r => r[7]))].sort();
console.log(`Districts covered (${distritos.length}): ${distritos.join(", ")}`);
