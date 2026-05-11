/**
 * In-memory postal code search engine.
 * Data loaded once per serverless instance from the pre-built JSON.
 * Uses most-selective-token strategy to minimise candidate set.
 *
 * Tuple: [cp4, cp3, morada, localidadeEsp, localidade, conselho, freguesia, distrito, searchStr]
 */

import { readFileSync } from "fs";
import { join } from "path";

type Row = [string, string, string, string, string, string, string, string, string];
//          0      1      2       3              4           5         6          7        8=searchStr

export interface CPResult {
  codigoCompleto: string;
  morada: string;
  localidadeEspecifica: string;
  localidade: string;
  conselho: string;
  freguesia: string;
  distrito: string;
}

// ── Singletons (survive warm invocations) ─────────────────────────────────────

let rows: Row[] | null = null;
let prefixIndex: Map<string, number[]> | null = null;

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/\p{Mn}/gu, "").trim();
}

function loadOnce(): Row[] {
  if (rows) return rows;

  const filePath = join(process.cwd(), "data/codigos-postais.json");
  rows = JSON.parse(readFileSync(filePath, "utf-8")) as Row[];

  prefixIndex = new Map<string, number[]>();
  for (let i = 0; i < rows.length; i++) {
    const seen = new Set<string>();
    for (const tok of rows[i][8].split(" ")) {
      if (tok.length < 2) continue;
      const key = tok.slice(0, 4);
      if (seen.has(key)) continue;
      seen.add(key);
      const bucket = prefixIndex.get(key);
      if (bucket) bucket.push(i);
      else prefixIndex.set(key, [i]);
    }
  }

  return rows;
}

// ── Public API ────────────────────────────────────────────────────────────────

export function searchPostalCodes(query: string, limit = 50): CPResult[] {
  const data = loadOnce();

  // Normalise 7-digit CP without hyphen → insert hyphen (e.g. 2735660 → 2735-660)
  const cleaned = query.trim().replace(/^(\d{4})[-\s]?(\d{3})$/, "$1-$2");
  const q = normalize(cleaned);
  if (q.length < 2) return [];

  const queryTokens = q.split(/\s+/).filter(Boolean);
  if (!queryTokens.length) return [];

  // Pick the most selective token (smallest bucket)
  let bestCandidates: number[] = [];
  let bestSize = Infinity;
  for (const tok of queryTokens) {
    const bucket = prefixIndex?.get(tok.slice(0, 4)) ?? [];
    if (bucket.length < bestSize) {
      bestSize = bucket.length;
      bestCandidates = bucket;
    }
  }

  if (bestSize === Infinity) {
    bestCandidates = Array.from({ length: data.length }, (_, i) => i);
  }

  const results: CPResult[] = [];
  for (const idx of bestCandidates) {
    if (results.length >= limit) break;
    const row = data[idx];
    if (queryTokens.every((t) => row[8].includes(t))) {
      results.push({
        codigoCompleto: `${row[0]}-${row[1]}`,
        morada: row[2],
        localidadeEspecifica: row[3],
        localidade: row[4],
        conselho: row[5],
        freguesia: row[6],
        distrito: row[7],
      });
    }
  }

  return results;
}
