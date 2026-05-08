module.exports = {

"[project]/.next-internal/server/app/api/codigo-postal/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/lib/postalSearch.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * In-memory postal code search engine.
 * Data loaded once per serverless instance from the pre-built JSON.
 * Uses most-selective-token strategy to minimise candidate set.
 *
 * Tuple: [cp4, cp3, morada, localidadeEsp, localidade, conselho, freguesia, distrito, searchStr]
 */ __turbopack_context__.s({
    "searchPostalCodes": (()=>searchPostalCodes)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// ── Singletons (survive warm invocations) ─────────────────────────────────────
let rows = null;
let prefixIndex = null;
function normalize(s) {
    return s.toLowerCase().normalize("NFD").replace(/\p{Mn}/gu, "").trim();
}
function loadOnce() {
    if (rows) return rows;
    const filePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "src/lib/data/codigos-postais.json");
    rows = JSON.parse((0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(filePath, "utf-8"));
    prefixIndex = new Map();
    for(let i = 0; i < rows.length; i++){
        const seen = new Set();
        for (const tok of rows[i][8].split(" ")){
            if (tok.length < 2) continue;
            const key = tok.slice(0, 4);
            if (seen.has(key)) continue;
            seen.add(key);
            const bucket = prefixIndex.get(key);
            if (bucket) bucket.push(i);
            else prefixIndex.set(key, [
                i
            ]);
        }
    }
    return rows;
}
function searchPostalCodes(query, limit = 50) {
    const data = loadOnce();
    const q = normalize(query);
    if (q.length < 2) return [];
    const queryTokens = q.split(/\s+/).filter(Boolean);
    if (!queryTokens.length) return [];
    // Pick the most selective token (smallest bucket)
    let bestCandidates = [];
    let bestSize = Infinity;
    for (const tok of queryTokens){
        const bucket = prefixIndex?.get(tok.slice(0, 4)) ?? [];
        if (bucket.length < bestSize) {
            bestSize = bucket.length;
            bestCandidates = bucket;
        }
    }
    if (bestSize === Infinity) {
        bestCandidates = Array.from({
            length: data.length
        }, (_, i)=>i);
    }
    const results = [];
    for (const idx of bestCandidates){
        if (results.length >= limit) break;
        const row = data[idx];
        if (queryTokens.every((t)=>row[8].includes(t))) {
            results.push({
                codigoCompleto: `${row[0]}-${row[1]}`,
                morada: row[2],
                localidadeEspecifica: row[3],
                localidade: row[4],
                conselho: row[5],
                freguesia: row[6],
                distrito: row[7]
            });
        }
    }
    return results;
}
}}),
"[project]/src/app/api/codigo-postal/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$postalSearch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/postalSearch.ts [app-route] (ecmascript)");
;
;
async function GET(req) {
    const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";
    if (!q || q.length < 2) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Query too short"
        }, {
            status: 400
        });
    }
    const start = Date.now();
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$postalSearch$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["searchPostalCodes"])(q, 50);
    const ms = Date.now() - start;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        results,
        total: results.length,
        ms
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7c15c5af._.js.map