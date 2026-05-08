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
"[project]/src/app/api/codigo-postal/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Sample data — replace with Prisma DB query once database is populated
const sampleData = [
    {
        codigoCompleto: "1000-001",
        rua: "Rua do Comércio",
        localidade: "Lisboa",
        concelho: "Lisboa",
        distrito: "Lisboa"
    },
    {
        codigoCompleto: "1000-010",
        rua: "Praça do Comércio",
        localidade: "Lisboa",
        concelho: "Lisboa",
        distrito: "Lisboa"
    },
    {
        codigoCompleto: "1200-109",
        rua: "Rua Augusta",
        localidade: "Lisboa",
        concelho: "Lisboa",
        distrito: "Lisboa"
    },
    {
        codigoCompleto: "1100-150",
        rua: "Alfama",
        localidade: "Lisboa",
        concelho: "Lisboa",
        distrito: "Lisboa"
    },
    {
        codigoCompleto: "4000-001",
        rua: "Rua de Santa Catarina",
        localidade: "Porto",
        concelho: "Porto",
        distrito: "Porto"
    },
    {
        codigoCompleto: "4050-001",
        rua: "Avenida dos Aliados",
        localidade: "Porto",
        concelho: "Porto",
        distrito: "Porto"
    },
    {
        codigoCompleto: "3000-001",
        rua: "Rua Ferreira Borges",
        localidade: "Coimbra",
        concelho: "Coimbra",
        distrito: "Coimbra"
    },
    {
        codigoCompleto: "4700-001",
        rua: "Praça da República",
        localidade: "Braga",
        concelho: "Braga",
        distrito: "Braga"
    },
    {
        codigoCompleto: "2750-001",
        rua: "Avenida 25 de Abril",
        localidade: "Cascais",
        concelho: "Cascais",
        distrito: "Lisboa"
    },
    {
        codigoCompleto: "8000-001",
        rua: "Rua de Santo António",
        localidade: "Faro",
        concelho: "Faro",
        distrito: "Faro"
    },
    {
        codigoCompleto: "2900-001",
        rua: "Praça do Giraldo",
        localidade: "Setúbal",
        concelho: "Setúbal",
        distrito: "Setúbal"
    },
    {
        codigoCompleto: "7000-001",
        rua: "Praça do Giraldo",
        localidade: "Évora",
        concelho: "Évora",
        distrito: "Évora"
    },
    {
        codigoCompleto: "2400-001",
        rua: "Rua Dr. Correia Mateus",
        localidade: "Leiria",
        concelho: "Leiria",
        distrito: "Leiria"
    },
    {
        codigoCompleto: "3500-001",
        rua: "Rua Direita",
        localidade: "Viseu",
        concelho: "Viseu",
        distrito: "Viseu"
    }
];
async function GET(req) {
    const q = req.nextUrl.searchParams.get("q")?.toLowerCase().trim() ?? "";
    if (!q || q.length < 2) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Query too short"
        }, {
            status: 400
        });
    }
    // In production, this would be a Prisma query:
    // const results = await prisma.codigoPostal.findMany({
    //   where: {
    //     OR: [
    //       { codigoCompleto: { contains: q, mode: "insensitive" } },
    //       { rua: { contains: q, mode: "insensitive" } },
    //       { localidade: { contains: q, mode: "insensitive" } },
    //       { concelho: { contains: q, mode: "insensitive" } },
    //     ],
    //   },
    //   take: 20,
    // });
    const results = sampleData.filter((d)=>d.codigoCompleto.toLowerCase().includes(q) || d.rua?.toLowerCase().includes(q) || d.localidade.toLowerCase().includes(q) || d.concelho.toLowerCase().includes(q) || d.distrito.toLowerCase().includes(q));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        results,
        total: results.length
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__de5682d1._.js.map