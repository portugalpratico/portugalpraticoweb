module.exports = {

"[project]/.next-internal/server/app/localidades/[distrito]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Breadcrumbs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
function Breadcrumbs({ crumbs }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i)=>({
                "@type": "ListItem",
                position: i + 1,
                name: c.label,
                ...c.href ? {
                    item: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://portugalpratico.pt"}${c.href}`
                } : {}
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Breadcrumbs.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Breadcrumb",
                className: "flex items-center gap-1.5 text-sm text-gray-500 mb-6",
                children: crumbs.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-300",
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Breadcrumbs.tsx",
                                lineNumber: 26,
                                columnNumber: 23
                            }, this),
                            c.href && i < crumbs.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: c.href,
                                className: "hover:text-[#046A38] transition-colors",
                                children: c.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Breadcrumbs.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 font-medium",
                                children: c.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/Breadcrumbs.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/Breadcrumbs.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Breadcrumbs.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/components/AdSlot.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/AdSlot.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/AdSlot.tsx <module evaluation>", "default");
}}),
"[project]/src/components/AdSlot.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/AdSlot.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/AdSlot.tsx", "default");
}}),
"[project]/src/components/AdSlot.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdSlot$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/AdSlot.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdSlot$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/AdSlot.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdSlot$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/FAQ.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FAQ.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FAQ.tsx <module evaluation>", "default");
}}),
"[project]/src/components/FAQ.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FAQ.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FAQ.tsx", "default");
}}),
"[project]/src/components/FAQ.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/FAQ.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/FAQ.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/lib/data/portugal.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAllConcelhos": (()=>getAllConcelhos),
    "getConcelho": (()=>getConcelho),
    "getDistrito": (()=>getDistrito),
    "portugal": (()=>portugal)
});
const portugal = [
    {
        nome: "Aveiro",
        slug: "aveiro",
        populacao: 714200,
        area: 2808,
        capital: "Aveiro",
        concelhos: [
            {
                nome: "Águeda",
                slug: "agueda",
                populacao: 47000,
                area: 335,
                freguesias: 11,
                cpPrefix: "3750",
                descricao: "Município industrial do interior do distrito de Aveiro, conhecido pelas suas fábricas e pela Reserva Natural do Paul de Arzila.",
                notaveis: [
                    "Parque Duerme",
                    "Museu Municipal de Águeda",
                    "Festival AgitÁgueda"
                ]
            },
            {
                nome: "Albergaria-a-Velha",
                slug: "albergaria-a-velha",
                populacao: 25000,
                area: 158,
                freguesias: 8,
                cpPrefix: "3850",
                descricao: "Município localizado a norte de Aveiro, junto ao IC2, com forte componente industrial e logística.",
                notaveis: [
                    "Igreja Matriz de Albergaria",
                    "Reserva Natural do Litoral de Aveiro"
                ]
            },
            {
                nome: "Anadia",
                slug: "anadia",
                populacao: 29000,
                area: 216,
                freguesias: 12,
                cpPrefix: "3780",
                descricao: "Conhecida pelas suas termas e pela produção de vinho Bairrada, região vinícola de excelência.",
                notaveis: [
                    "Termas de Anadia",
                    "Rota do Bairrada",
                    "Museu do Vinho da Bairrada"
                ]
            },
            {
                nome: "Arouca",
                slug: "arouca",
                populacao: 22000,
                area: 328,
                freguesias: 20,
                cpPrefix: "4540",
                descricao: "Município serrano com o famoso Geoparque de Arouca, lar das Trilobites gigantes e da Passadiços do Paiva.",
                notaveis: [
                    "Geoparque de Arouca",
                    "Passadiços do Paiva",
                    "Mosteiro de Arouca"
                ]
            },
            {
                nome: "Aveiro",
                slug: "aveiro",
                populacao: 81000,
                area: 198,
                freguesias: 14,
                cpPrefix: "3800",
                descricao: "Capital do distrito, conhecida como a 'Veneza de Portugal' pelos seus canais, moliceiros e Art Nouveau.",
                notaveis: [
                    "Ria de Aveiro",
                    "Museu de Arte Nova",
                    "Costa Nova",
                    "Praia da Barra"
                ]
            },
            {
                nome: "Castelo de Paiva",
                slug: "castelo-de-paiva",
                populacao: 16000,
                area: 115,
                freguesias: 7,
                cpPrefix: "4550",
                descricao: "Município ribeirinho do Douro, conhecido pela produção de mel e pelas suas praias fluviais.",
                notaveis: [
                    "Rio Paiva",
                    "Praia Fluvial de Castelo de Paiva"
                ]
            },
            {
                nome: "Espinho",
                slug: "espinho",
                populacao: 31000,
                area: 21,
                freguesias: 5,
                cpPrefix: "4500",
                descricao: "Pequeno município balnear na costa litoral, conhecida pelo seu casino e pelas praias.",
                notaveis: [
                    "Casino de Espinho",
                    "Praia de Espinho",
                    "Rink de Patinagem"
                ]
            },
            {
                nome: "Estarreja",
                slug: "estarreja",
                populacao: 26000,
                area: 108,
                freguesias: 6,
                cpPrefix: "3860",
                descricao: "Município da Ria de Aveiro, com forte tradição industrial química e boas rotas de cicloturismo.",
                notaveis: [
                    "Bioria – Centro de Interpretação da Ria de Aveiro",
                    "Rota da Ria de Aveiro"
                ]
            },
            {
                nome: "Ílhavo",
                slug: "ilhavo",
                populacao: 39000,
                area: 74,
                freguesias: 4,
                cpPrefix: "3830",
                descricao: "Conhecido pela sua tradição marítima, o Museu Marítimo de Ílhavo e a famosa Vista Alegre.",
                notaveis: [
                    "Museu Marítimo de Ílhavo",
                    "Fábrica Vista Alegre",
                    "Praia da Barra"
                ]
            },
            {
                nome: "Mealhada",
                slug: "mealhada",
                populacao: 20000,
                area: 110,
                freguesias: 8,
                cpPrefix: "3050",
                descricao: "Capital gastronómica do leitão assado, um dos pratos mais emblemáticos da gastronomia portuguesa.",
                notaveis: [
                    "Leitão da Bairrada",
                    "Termas de Luso",
                    "Buçaco"
                ]
            },
            {
                nome: "Murtosa",
                slug: "murtosa",
                populacao: 10000,
                area: 73,
                freguesias: 4,
                cpPrefix: "3870",
                descricao: "Município da Ria de Aveiro com paisagens únicas de laguna e forte tradição piscatória.",
                notaveis: [
                    "Ria de Aveiro",
                    "Museu da Murtosa",
                    "Torreira"
                ]
            },
            {
                nome: "Oliveira de Azeméis",
                slug: "oliveira-de-azemeis",
                populacao: 67000,
                area: 164,
                freguesias: 19,
                cpPrefix: "3720",
                descricao: "Município industrial importante, com destaque para a indústria de calçado e componentes.",
                notaveis: [
                    "Parque La Salette",
                    "Termas de S. Jorge"
                ]
            },
            {
                nome: "Oliveira do Bairro",
                slug: "oliveira-do-bairro",
                populacao: 24000,
                area: 87,
                freguesias: 5,
                cpPrefix: "3770",
                descricao: "Município da Bairrada, conhecido pelos vinhos espumantes e pelo artesanato local.",
                notaveis: [
                    "Adega Cooperativa de Cantanhede",
                    "Zona industrial"
                ]
            },
            {
                nome: "Ovar",
                slug: "ovar",
                populacao: 55000,
                area: 148,
                freguesias: 8,
                cpPrefix: "3880",
                descricao: "Conhecido pelos seus ovos-moles, doce típico de Aveiro, e pelas praias atlânticas.",
                notaveis: [
                    "Praia de Furadouro",
                    "Museu de Ovar",
                    "Carnaval de Ovar"
                ]
            },
            {
                nome: "Santa Maria da Feira",
                slug: "santa-maria-da-feira",
                populacao: 142000,
                area: 216,
                freguesias: 21,
                cpPrefix: "4520",
                descricao: "Um dos maiores municípios do distrito, famoso pela Viagem Medieval e pela indústria de cortiça.",
                notaveis: [
                    "Castelo de Santa Maria da Feira",
                    "Viagem Medieval",
                    "Europarque"
                ]
            },
            {
                nome: "São João da Madeira",
                slug: "sao-joao-da-madeira",
                populacao: 21000,
                area: 8,
                freguesias: 1,
                cpPrefix: "3700",
                descricao: "O menor município do distrito, mas um dos mais densos do país, com forte tradição chapeleira.",
                notaveis: [
                    "Museu da Chapelaria",
                    "Oliva Creative Factory"
                ]
            },
            {
                nome: "Sever do Vouga",
                slug: "sever-do-vouga",
                populacao: 12000,
                area: 130,
                freguesias: 10,
                cpPrefix: "3740",
                descricao: "Município serrano com paisagens naturais de elevada qualidade e produtos tradicionais.",
                notaveis: [
                    "Serra da Freita",
                    "Rio Vouga"
                ]
            },
            {
                nome: "Vagos",
                slug: "vagos",
                populacao: 23000,
                area: 164,
                freguesias: 9,
                cpPrefix: "3840",
                descricao: "Município litoral com praias e dunas protegidas, produção de arroz e forte vocação turística.",
                notaveis: [
                    "Praia de Vagos",
                    "Parque Natural das Dunas"
                ]
            },
            {
                nome: "Vale de Cambra",
                slug: "vale-de-cambra",
                populacao: 22000,
                area: 148,
                freguesias: 8,
                cpPrefix: "3730",
                descricao: "Município serrano com forte indústria metalúrgica e paisagens naturais da Serra da Freita.",
                notaveis: [
                    "Serra da Freita",
                    "Arouca Geopark"
                ]
            }
        ]
    },
    {
        nome: "Beja",
        slug: "beja",
        populacao: 152758,
        area: 10225,
        capital: "Beja",
        concelhos: [
            {
                nome: "Aljustrel",
                slug: "aljustrel",
                populacao: 9500,
                area: 458,
                freguesias: 6,
                cpPrefix: "7600",
                descricao: "Município do Baixo Alentejo, conhecido pelas suas minas de pirite e pelo Museu Municipal.",
                notaveis: [
                    "Minas de Aljustrel",
                    "Museu Municipal de Aljustrel"
                ]
            },
            {
                nome: "Almodôvar",
                slug: "almodovar",
                populacao: 7200,
                area: 777,
                freguesias: 8,
                cpPrefix: "7700",
                descricao: "Município alentejano com forte tradição de música alentejana e paisagens de montado.",
                notaveis: [
                    "Festival Sudoeste TMN",
                    "Igreja Matriz de Almodôvar"
                ]
            },
            {
                nome: "Alvito",
                slug: "alvito",
                populacao: 2500,
                area: 261,
                freguesias: 2,
                cpPrefix: "7920",
                descricao: "Pequeno município com uma das mais belas pousadas de Portugal, instalada num castelo medieval.",
                notaveis: [
                    "Pousada Castelo de Alvito",
                    "Barragem do Alvito"
                ]
            },
            {
                nome: "Barrancos",
                slug: "barrancos",
                populacao: 1800,
                area: 168,
                freguesias: 1,
                cpPrefix: "7875",
                descricao: "O município mais a leste de Portugal, com fronteira com Espanha e tradições culturais únicas.",
                notaveis: [
                    "Herdade do Barrancos",
                    "Fronteira com Espanha"
                ]
            },
            {
                nome: "Beja",
                slug: "beja",
                populacao: 35000,
                area: 1146,
                freguesias: 17,
                cpPrefix: "7800",
                descricao: "Capital do Baixo Alentejo, cidade romana de Pax Iulia, com rico património histórico e museal.",
                notaveis: [
                    "Castelo de Beja",
                    "Museu Regional de Beja",
                    "Convento de Nossa Senhora da Conceição"
                ]
            },
            {
                nome: "Castro Verde",
                slug: "castro-verde",
                populacao: 7500,
                area: 569,
                freguesias: 4,
                cpPrefix: "7780",
                descricao: "Conhecida pela Batalha de Ourique e pela sua rica fauna de aves estepárias protegidas.",
                notaveis: [
                    "Campo Branco",
                    "Reserva Natural do Castro Verde"
                ]
            },
            {
                nome: "Cuba",
                slug: "cuba",
                populacao: 5000,
                area: 169,
                freguesias: 4,
                cpPrefix: "7940",
                descricao: "Município de tradição agrícola com uma das mais antigas tradições vitivinícolas do Alentejo.",
                notaveis: [
                    "Adega Cooperativa de Cuba",
                    "Igreja Matriz de Cuba"
                ]
            },
            {
                nome: "Ferreira do Alentejo",
                slug: "ferreira-do-alentejo",
                populacao: 8500,
                area: 1060,
                freguesias: 8,
                cpPrefix: "7900",
                descricao: "Município com vasta área agrícola e produção de trigo, olival e vinha típica alentejana.",
                notaveis: [
                    "Museu do Azulejo de Ferreira",
                    "Piscinas Naturais"
                ]
            },
            {
                nome: "Mértola",
                slug: "mertola",
                populacao: 7000,
                area: 1293,
                freguesias: 8,
                cpPrefix: "7750",
                descricao: "Considerada um museu vivo a céu aberto pela sua concentração de vestígios históricos islâmicos.",
                notaveis: [
                    "Castelo de Mértola",
                    "Museu de Mértola",
                    "Rio Guadiana"
                ]
            },
            {
                nome: "Moura",
                slug: "moura",
                populacao: 15000,
                area: 958,
                freguesias: 9,
                cpPrefix: "7860",
                descricao: "Cidade de fronteira com rica herança mourísca, conhecida pelas azeitonas e azeite alentejano.",
                notaveis: [
                    "Castelo de Moura",
                    "Bairro Mourisco",
                    "Central Solar de Moura"
                ]
            },
            {
                nome: "Odemira",
                slug: "odemira",
                populacao: 26000,
                area: 1721,
                freguesias: 16,
                cpPrefix: "7630",
                descricao: "O maior município de Portugal em área, com a costa alentejana, rios e montanhas únicas.",
                notaveis: [
                    "Costa Alentejana",
                    "Rio Mira",
                    "NOS Alive / Sudowest"
                ]
            },
            {
                nome: "Ourique",
                slug: "ourique",
                populacao: 5000,
                area: 660,
                freguesias: 6,
                cpPrefix: "7670",
                descricao: "Local da histórica Batalha de Ourique onde D. Afonso Henriques fundou Portugal em 1139.",
                notaveis: [
                    "Campo de Ourique",
                    "Batalha de Ourique",
                    "Museu Municipal de Ourique"
                ]
            },
            {
                nome: "Serpa",
                slug: "serpa",
                populacao: 16000,
                area: 1105,
                freguesias: 9,
                cpPrefix: "7830",
                descricao: "Conhecida pelo seu famoso queijo DOP, azeite e produtos alentejanos de qualidade.",
                notaveis: [
                    "Castelo de Serpa",
                    "Queijo de Serpa DOP",
                    "Museu Etnográfico"
                ]
            },
            {
                nome: "Vidigueira",
                slug: "vidigueira",
                populacao: 5500,
                area: 323,
                freguesias: 5,
                cpPrefix: "7960",
                descricao: "Terra natal de Vasco da Gama, com tradição vitivinícola e termas na região do Alentejo.",
                notaveis: [
                    "Vasco da Gama",
                    "Adega Cooperativa da Vidigueira",
                    "Termas de Pedras de El Rei"
                ]
            }
        ]
    },
    {
        nome: "Braga",
        slug: "braga",
        populacao: 848185,
        area: 2673,
        capital: "Braga",
        concelhos: [
            {
                nome: "Amares",
                slug: "amares",
                populacao: 19000,
                area: 82,
                freguesias: 23,
                cpPrefix: "4720",
                descricao: "Município do Minho com tradição têxtil, castelos medievais e paisagens verdejantes.",
                notaveis: [
                    "Castelo de Bouro",
                    "Rio Cávado"
                ]
            },
            {
                nome: "Barcelos",
                slug: "barcelos",
                populacao: 120000,
                area: 378,
                freguesias: 61,
                cpPrefix: "4750",
                descricao: "Cidade do famoso Galo de Barcelos, símbolo de Portugal, e dos bordados em linho.",
                notaveis: [
                    "Galo de Barcelos",
                    "Campo da República",
                    "Museu Arqueológico"
                ]
            },
            {
                nome: "Braga",
                slug: "braga",
                populacao: 193000,
                area: 184,
                freguesias: 37,
                cpPrefix: "4700",
                descricao: "Capital do Minho e cidade episcopal, com o santuário do Bom Jesus e rica herança religiosa.",
                notaveis: [
                    "Santuário do Bom Jesus do Monte",
                    "Sé de Braga",
                    "Termas Romanas"
                ]
            },
            {
                nome: "Cabeceiras de Basto",
                slug: "cabeceiras-de-basto",
                populacao: 17000,
                area: 247,
                freguesias: 23,
                cpPrefix: "4860",
                descricao: "Município serrano do nordeste de Braga, com paisagens de montanha e tradições rurais.",
                notaveis: [
                    "Mosteiro de Refojos",
                    "Serra do Gerês"
                ]
            },
            {
                nome: "Celorico de Basto",
                slug: "celorico-de-basto",
                populacao: 20000,
                area: 182,
                freguesias: 27,
                cpPrefix: "4890",
                descricao: "Município com forte tradição têxtil e paisagens de montanha, porta do Parque do Gerês.",
                notaveis: [
                    "Castelo de Arnoia",
                    "Rio Tâmega"
                ]
            },
            {
                nome: "Esposende",
                slug: "esposende",
                populacao: 35000,
                area: 95,
                freguesias: 15,
                cpPrefix: "4740",
                descricao: "Município balnear com praias premiadas e o estuário do Rio Cávado, zona de proteção ambiental.",
                notaveis: [
                    "Praia de Ofir",
                    "Estuário do Cávado",
                    "Forte de S. João Baptista"
                ]
            },
            {
                nome: "Fafe",
                slug: "fafe",
                populacao: 53000,
                area: 219,
                freguesias: 29,
                cpPrefix: "4820",
                descricao: "Conhecida como a capital dos 'brasileiros de torna-viagem' pelas suas casas solarengas.",
                notaveis: [
                    "Casas dos Brasileiros",
                    "Rio Vizela",
                    "Castelos do Caldeirão"
                ]
            },
            {
                nome: "Guimarães",
                slug: "guimaraes",
                populacao: 158000,
                area: 242,
                freguesias: 48,
                cpPrefix: "4800",
                descricao: "Berço da Nação Portuguesa, onde D. Afonso Henriques nasceu. Centro Histórico Património da UNESCO.",
                notaveis: [
                    "Castelo de Guimarães",
                    "Paço dos Duques",
                    "Centro Histórico UNESCO"
                ]
            },
            {
                nome: "Póvoa de Lanhoso",
                slug: "povoa-de-lanhoso",
                populacao: 22000,
                area: 132,
                freguesias: 30,
                cpPrefix: "4830",
                descricao: "Município com forte tradição na ourivesaria e filigrana, produção artesanal de ouro.",
                notaveis: [
                    "Castelo da Póvoa",
                    "Santuário de Nossa Senhora do Porto d'Ave"
                ]
            },
            {
                nome: "Terras de Bouro",
                slug: "terras-de-bouro",
                populacao: 7500,
                area: 280,
                freguesias: 19,
                cpPrefix: "4840",
                descricao: "Porta principal do Parque Nacional Peneda-Gerês, com aldeias de montanha e tradições ancestrais.",
                notaveis: [
                    "Parque Nacional Peneda-Gerês",
                    "Caldas do Gerês",
                    "Mata da Albergaria"
                ]
            },
            {
                nome: "Vieira do Minho",
                slug: "vieira-do-minho",
                populacao: 12000,
                area: 219,
                freguesias: 18,
                cpPrefix: "4850",
                descricao: "Município no Parque Nacional Peneda-Gerês, com paisagens de montanha e albufeiras.",
                notaveis: [
                    "Parque Nacional Peneda-Gerês",
                    "Albufeira de Vilarinho das Furnas"
                ]
            },
            {
                nome: "Vila Nova de Famalicão",
                slug: "vila-nova-de-famalicao",
                populacao: 133000,
                area: 202,
                freguesias: 34,
                cpPrefix: "4760",
                descricao: "Importante polo industrial têxtil, um dos municípios mais produtivos do norte de Portugal.",
                notaveis: [
                    "Museu Bernardino Machado",
                    "Museu do Neo-Realismo"
                ]
            },
            {
                nome: "Vila Verde",
                slug: "vila-verde",
                populacao: 49000,
                area: 228,
                freguesias: 35,
                cpPrefix: "4730",
                descricao: "Município minhoto com forte tradição agrícola, vinhos verdes e feiras regionais.",
                notaveis: [
                    "Castelo de Prado",
                    "Santuário de S. Bento da Porta Aberta"
                ]
            },
            {
                nome: "Vizela",
                slug: "vizela",
                populacao: 24000,
                area: 24,
                freguesias: 8,
                cpPrefix: "4815",
                descricao: "Cidade termal com as famosas Termas de Vizela, importante polo de turismo de saúde e bem-estar.",
                notaveis: [
                    "Termas de Vizela",
                    "Rio Vizela",
                    "Igreja Matriz de S. Miguel"
                ]
            }
        ]
    },
    {
        nome: "Bragança",
        slug: "braganca",
        populacao: 136252,
        area: 6608,
        capital: "Bragança",
        concelhos: [
            {
                nome: "Alfândega da Fé",
                slug: "alfandega-da-fe",
                populacao: 5000,
                area: 322,
                freguesias: 18,
                cpPrefix: "5350",
                descricao: "Município transmontano com tradição olivícola e paisagens de Trás-os-Montes.",
                notaveis: [
                    "Castelo de Alfândega da Fé",
                    "Olival transmontano"
                ]
            },
            {
                nome: "Bragança",
                slug: "braganca",
                populacao: 35000,
                area: 1173,
                freguesias: 49,
                cpPrefix: "5300",
                descricao: "Capital de Trás-os-Montes, cidade fronteira com Espanha, com castelo medieval bem preservado.",
                notaveis: [
                    "Castelo de Bragança",
                    "Citânia de Miranda",
                    "Parque Natural de Montesinho"
                ]
            },
            {
                nome: "Carrazeda de Ansiães",
                slug: "carrazeda-de-ansiaes",
                populacao: 6500,
                area: 279,
                freguesias: 18,
                cpPrefix: "5140",
                descricao: "Município do Douro com produção de vinho de qualidade e paisagens do Douro Vinhateiro.",
                notaveis: [
                    "Castelo de Ansiães",
                    "Douro Vinhateiro"
                ]
            },
            {
                nome: "Freixo de Espada à Cinta",
                slug: "freixo-de-espada-a-cinta",
                populacao: 3500,
                area: 244,
                freguesias: 6,
                cpPrefix: "5180",
                descricao: "Município fronteiriço com tradição amêndoa, azeite e sabores transmontanos únicos.",
                notaveis: [
                    "Torre de Galo",
                    "Amendoal em flor"
                ]
            },
            {
                nome: "Macedo de Cavaleiros",
                slug: "macedo-de-cavaleiros",
                populacao: 15000,
                area: 700,
                freguesias: 39,
                cpPrefix: "5340",
                descricao: "Município serrano com produção de castanha, mel e fumeiro transmontano de qualidade.",
                notaveis: [
                    "Serra de Bornes",
                    "Lagoa de Azibo"
                ]
            },
            {
                nome: "Miranda do Douro",
                slug: "miranda-do-douro",
                populacao: 7000,
                area: 487,
                freguesias: 14,
                cpPrefix: "5210",
                descricao: "Fronteira com Espanha no cânion internacional do Douro, com língua mirandesa própria.",
                notaveis: [
                    "Parque Natural do Douro Internacional",
                    "Catedral de Miranda",
                    "Língua Mirandesa"
                ]
            },
            {
                nome: "Mirandela",
                slug: "mirandela",
                populacao: 23000,
                area: 659,
                freguesias: 37,
                cpPrefix: "5370",
                descricao: "Cidade do Tua, conhecida pela azeitona galega e pelo azeite transmontano DOP.",
                notaveis: [
                    "Ponte Medieval de Mirandela",
                    "Azeite DOP Trás-os-Montes"
                ]
            },
            {
                nome: "Mogadouro",
                slug: "mogadouro",
                populacao: 9000,
                area: 761,
                freguesias: 31,
                cpPrefix: "5200",
                descricao: "Município fronteiriço com importantes vestígios históricos e tradições rurais transmontanas.",
                notaveis: [
                    "Castelo de Mogadouro",
                    "Douro Internacional"
                ]
            },
            {
                nome: "Torre de Moncorvo",
                slug: "torre-de-moncorvo",
                populacao: 9000,
                area: 533,
                freguesias: 21,
                cpPrefix: "5160",
                descricao: "Conhecida pela amendoeira em flor, azeite e pelo ferro de Moncorvo.",
                notaveis: [
                    "Amendoeiras em Flor",
                    "Museu do Ferro",
                    "Douro Vinhateiro"
                ]
            },
            {
                nome: "Vila Flor",
                slug: "vila-flor",
                populacao: 7000,
                area: 297,
                freguesias: 16,
                cpPrefix: "5360",
                descricao: "Município transmontano com tradição vitivinícola e produtos regionais de qualidade.",
                notaveis: [
                    "Castelo de Vila Flor",
                    "Museu Abade de Baçal"
                ]
            },
            {
                nome: "Vimioso",
                slug: "vimioso",
                populacao: 4500,
                area: 478,
                freguesias: 12,
                cpPrefix: "5230",
                descricao: "Município da raia transmontana, com o Parque de Montesinho e tradições ancestrais.",
                notaveis: [
                    "Parque Natural de Montesinho",
                    "Castro de Avelãs"
                ]
            },
            {
                nome: "Vinhais",
                slug: "vinhais",
                populacao: 9000,
                area: 694,
                freguesias: 37,
                cpPrefix: "5320",
                descricao: "No coração do Parque Natural de Montesinho, com fumeiro e linguiça famosos.",
                notaveis: [
                    "Parque Natural de Montesinho",
                    "Fumeiro de Vinhais"
                ]
            }
        ]
    },
    {
        nome: "Castelo Branco",
        slug: "castelo-branco",
        populacao: 196264,
        area: 6675,
        capital: "Castelo Branco",
        concelhos: [
            {
                nome: "Belmonte",
                slug: "belmonte",
                populacao: 7000,
                area: 119,
                freguesias: 6,
                cpPrefix: "6250",
                descricao: "Terra natal de Pedro Álvares Cabral, descobridor do Brasil, com museu e castelo medievais.",
                notaveis: [
                    "Castelo de Belmonte",
                    "Museu Judaico",
                    "Monumento a Pedro Álvares Cabral"
                ]
            },
            {
                nome: "Castelo Branco",
                slug: "castelo-branco",
                populacao: 56000,
                area: 1438,
                freguesias: 25,
                cpPrefix: "6000",
                descricao: "Capital da Beira Baixa, famosa pelos seus bordados e pelo Jardim Episcopal de Castelo Branco.",
                notaveis: [
                    "Jardim Episcopal",
                    "Bordados de Castelo Branco",
                    "Castelo Templário"
                ]
            },
            {
                nome: "Covilhã",
                slug: "covilha",
                populacao: 51000,
                area: 555,
                freguesias: 31,
                cpPrefix: "6200",
                descricao: "Cidade da Serra da Estrela, 'capital da neve' portuguesa, com longa tradição têxtil.",
                notaveis: [
                    "Serra da Estrela",
                    "Ski da Estrela",
                    "Museu de Lanifícios"
                ]
            },
            {
                nome: "Fundão",
                slug: "fundao",
                populacao: 29000,
                area: 700,
                freguesias: 29,
                cpPrefix: "6230",
                descricao: "Conhecida pela produção de cereja, azeite e mel na encosta da Serra da Estrela.",
                notaveis: [
                    "Cereja do Fundão",
                    "Serra da Gardunha",
                    "Rota da Cereja"
                ]
            },
            {
                nome: "Idanha-a-Nova",
                slug: "idanha-a-nova",
                populacao: 9000,
                area: 1416,
                freguesias: 17,
                cpPrefix: "6060",
                descricao: "Município mais a leste da Beira, com o Parque Natural do Tejo Internacional e aldeias históricas.",
                notaveis: [
                    "Monsanto",
                    "Parque Natural do Tejo Internacional",
                    "Aldeia Histórica de Idanha"
                ]
            },
            {
                nome: "Oleiros",
                slug: "oleiros",
                populacao: 5500,
                area: 471,
                freguesias: 11,
                cpPrefix: "6160",
                descricao: "Município serrano da Beira Interior com paisagens naturais do Pinhal Interior.",
                notaveis: [
                    "Serra do Muradal",
                    "Rio Ocreza"
                ]
            },
            {
                nome: "Penamacor",
                slug: "penamacor",
                populacao: 5500,
                area: 558,
                freguesias: 10,
                cpPrefix: "6090",
                descricao: "Município raiano com castelo medieval e tradições da Beira Interior.",
                notaveis: [
                    "Castelo de Penamacor",
                    "Parque Natural do Tejo Internacional"
                ]
            },
            {
                nome: "Proença-a-Nova",
                slug: "proenca-a-nova",
                populacao: 8000,
                area: 395,
                freguesias: 7,
                cpPrefix: "6150",
                descricao: "Município do Pinhal Interior com tradição corticeira e mel de qualidade.",
                notaveis: [
                    "Rio Ocreza",
                    "Mata Nacional do Chão da Vã"
                ]
            },
            {
                nome: "Sertã",
                slug: "serta",
                populacao: 15000,
                area: 447,
                freguesias: 13,
                cpPrefix: "6100",
                descricao: "Município ribeirinho do Zêzere com praias fluviais e actividades de turismo de natureza.",
                notaveis: [
                    "Rio Zêzere",
                    "Praia Fluvial da Sertã",
                    "Castelo da Sertã"
                ]
            },
            {
                nome: "Vila de Rei",
                slug: "vila-de-rei",
                populacao: 3000,
                area: 194,
                freguesias: 3,
                cpPrefix: "6110",
                descricao: "Município do interior com praias fluviais e paisagem natural do Pinhal Interior.",
                notaveis: [
                    "Rio Ocreza",
                    "Praia Fluvial de Vila de Rei"
                ]
            },
            {
                nome: "Vila Velha de Ródão",
                slug: "vila-velha-de-rodao",
                populacao: 3500,
                area: 332,
                freguesias: 5,
                cpPrefix: "6030",
                descricao: "Conhecida pelas Portas do Ródão, espectacular cânion do rio Tejo com buitres em liberdade.",
                notaveis: [
                    "Portas do Ródão",
                    "Rio Tejo",
                    "Cânion do Ródão"
                ]
            }
        ]
    },
    {
        nome: "Coimbra",
        slug: "coimbra",
        populacao: 430104,
        area: 3947,
        capital: "Coimbra",
        concelhos: [
            {
                nome: "Arganil",
                slug: "arganil",
                populacao: 12000,
                area: 332,
                freguesias: 20,
                cpPrefix: "3300",
                descricao: "Município serrano com o Rio Ceira e tradições da Serra da Lousã.",
                notaveis: [
                    "Serra da Lousã",
                    "Rio Ceira",
                    "Caramulinho"
                ]
            },
            {
                nome: "Cantanhede",
                slug: "cantanhede",
                populacao: 36000,
                area: 390,
                freguesias: 17,
                cpPrefix: "3060",
                descricao: "Conhecida pelos seus vinhos da Bairrada e pela Adega Cooperativa de Cantanhede.",
                notaveis: [
                    "Adega Cooperativa de Cantanhede",
                    "Museu da Pedra"
                ]
            },
            {
                nome: "Coimbra",
                slug: "coimbra",
                populacao: 143000,
                area: 319,
                freguesias: 18,
                cpPrefix: "3000",
                descricao: "Cidade universitária fundada em 1290, com uma das mais antigas universidades do mundo e Património UNESCO.",
                notaveis: [
                    "Universidade de Coimbra",
                    "Biblioteca Joanina",
                    "Sé Velha",
                    "Portugal dos Pequenitos"
                ]
            },
            {
                nome: "Condeixa-a-Nova",
                slug: "condeixa-a-nova",
                populacao: 17000,
                area: 139,
                freguesias: 8,
                cpPrefix: "3150",
                descricao: "Município com as ruínas romanas de Conimbriga, um dos maiores sítios arqueológicos da Península Ibérica.",
                notaveis: [
                    "Ruínas de Conimbriga",
                    "Museu Monográfico de Conimbriga"
                ]
            },
            {
                nome: "Figueira da Foz",
                slug: "figueira-da-foz",
                populacao: 62000,
                area: 379,
                freguesias: 13,
                cpPrefix: "3080",
                descricao: "Cidade balnear com uma das mais belas praias de Portugal e famoso casino.",
                notaveis: [
                    "Praia da Figueira da Foz",
                    "Casino Figueira",
                    "Museu Municipal Dr. Santos Rocha"
                ]
            },
            {
                nome: "Góis",
                slug: "gois",
                populacao: 4000,
                area: 263,
                freguesias: 10,
                cpPrefix: "3330",
                descricao: "Município serrano com o Rio Ceira e tradições ancestrais da Beira Litoral.",
                notaveis: [
                    "Rio Ceira",
                    "Serra da Lousã",
                    "Aldeia do Machio"
                ]
            },
            {
                nome: "Lousã",
                slug: "lousa",
                populacao: 17000,
                area: 138,
                freguesias: 6,
                cpPrefix: "3200",
                descricao: "Conhecida pelas Aldeias de Xisto e pela Serra da Lousã, paraíso para os amantes da natureza.",
                notaveis: [
                    "Serra da Lousã",
                    "Aldeias de Xisto",
                    "Castelo da Lousã"
                ]
            },
            {
                nome: "Mira",
                slug: "mira",
                populacao: 12000,
                area: 123,
                freguesias: 4,
                cpPrefix: "3070",
                descricao: "Município litoral com a Lagoa de Mira e praias de areia branca na costa da Beira Litoral.",
                notaveis: [
                    "Praia de Mira",
                    "Lagoa de Mira",
                    "Dunas de Mira"
                ]
            },
            {
                nome: "Miranda do Corvo",
                slug: "miranda-do-corvo",
                populacao: 13000,
                area: 126,
                freguesias: 8,
                cpPrefix: "3220",
                descricao: "Município da Serra da Lousã com vinhos verdes e paisagens de forte apelo ao turismo rural.",
                notaveis: [
                    "Serra da Lousã",
                    "Parque Biológico de Vinhó"
                ]
            },
            {
                nome: "Montemor-o-Velho",
                slug: "montemor-o-velho",
                populacao: 12000,
                area: 228,
                freguesias: 13,
                cpPrefix: "3140",
                descricao: "Dominada pelo imponente Castelo de Montemor, com produção de arroz nos campos do Mondego.",
                notaveis: [
                    "Castelo de Montemor-o-Velho",
                    "Campos de Arroz do Mondego"
                ]
            },
            {
                nome: "Mortágua",
                slug: "mortagua",
                populacao: 10000,
                area: 254,
                freguesias: 9,
                cpPrefix: "3450",
                descricao: "Município da Bairrada com o Parque da Aguieira e Barragem de Mortágua.",
                notaveis: [
                    "Barragem de Mortágua",
                    "Parque da Aguieira"
                ]
            },
            {
                nome: "Oliveira do Hospital",
                slug: "oliveira-do-hospital",
                populacao: 20000,
                area: 234,
                freguesias: 22,
                cpPrefix: "3400",
                descricao: "Município serrano com o Parque Eólico da Serra do Açor e produtos típicos da Beira Alta.",
                notaveis: [
                    "Serra do Açor",
                    "Casteleiro",
                    "Centro Histórico"
                ]
            },
            {
                nome: "Pampilhosa da Serra",
                slug: "pampilhosa-da-serra",
                populacao: 4000,
                area: 396,
                freguesias: 8,
                cpPrefix: "3320",
                descricao: "Município da Serra Central, com paisagens únicas de montanha e o turismo de natureza.",
                notaveis: [
                    "Serra da Cebola",
                    "Rio Zêzere"
                ]
            },
            {
                nome: "Penacova",
                slug: "penacova",
                populacao: 15000,
                area: 216,
                freguesias: 9,
                cpPrefix: "3360",
                descricao: "Município junto ao Mondego com desportos aquáticos, buçaco e tradição de produção de mel.",
                notaveis: [
                    "Rio Mondego",
                    "Floresta do Buçaco",
                    "Mosteiro do Buçaco"
                ]
            },
            {
                nome: "Penela",
                slug: "penela",
                populacao: 6000,
                area: 131,
                freguesias: 6,
                cpPrefix: "3230",
                descricao: "Município da Serra de Sicó com castelo medieval e paisagens cársicas únicas.",
                notaveis: [
                    "Castelo de Penela",
                    "Serra de Sicó"
                ]
            },
            {
                nome: "Soure",
                slug: "soure",
                populacao: 19000,
                area: 267,
                freguesias: 12,
                cpPrefix: "3130",
                descricao: "Município no coração da Bairrada com forte tradição agrícola e artesanal.",
                notaveis: [
                    "Castelo de Soure",
                    "Rio Mondego"
                ]
            },
            {
                nome: "Tábua",
                slug: "tabua",
                populacao: 12000,
                area: 200,
                freguesias: 13,
                cpPrefix: "3420",
                descricao: "Município da Beira Alta com tradição vitivinícola e paisagens de montanha.",
                notaveis: [
                    "Rio Mondego",
                    "Serra do Açor"
                ]
            },
            {
                nome: "Vila Nova de Poiares",
                slug: "vila-nova-de-poiares",
                populacao: 7000,
                area: 83,
                freguesias: 3,
                cpPrefix: "3350",
                descricao: "O menor município do distrito com forte identidade local e proximidade a Coimbra.",
                notaveis: [
                    "Rio Mondego",
                    "Serra da Lousã"
                ]
            }
        ]
    },
    {
        nome: "Évora",
        slug: "evora",
        populacao: 166726,
        area: 7393,
        capital: "Évora",
        concelhos: [
            {
                nome: "Alandroal",
                slug: "alandroal",
                populacao: 6000,
                area: 542,
                freguesias: 6,
                cpPrefix: "7250",
                descricao: "Município do Alentejo Central com castelo medieval e tradições rurais.",
                notaveis: [
                    "Castelo de Alandroal",
                    "Rio Guadiana"
                ]
            },
            {
                nome: "Arraiolos",
                slug: "arraiolos",
                populacao: 7500,
                area: 684,
                freguesias: 7,
                cpPrefix: "7040",
                descricao: "Famosa pelos tapetes de Arraiolos, artesanato têxtil que remonta ao século XVII.",
                notaveis: [
                    "Tapetes de Arraiolos",
                    "Castelo de Arraiolos"
                ]
            },
            {
                nome: "Borba",
                slug: "borba",
                populacao: 7500,
                area: 152,
                freguesias: 3,
                cpPrefix: "7150",
                descricao: "Cidade do mármore branco, com as maiores pedreiras de mármore de Portugal.",
                notaveis: [
                    "Pedreiras de Mármore",
                    "Adega Cooperativa de Borba"
                ]
            },
            {
                nome: "Estremoz",
                slug: "estremoz",
                populacao: 14000,
                area: 513,
                freguesias: 12,
                cpPrefix: "7100",
                descricao: "Cidade do mármore e bonecas de barro, com um dos mais belos castelos medievais do Alentejo.",
                notaveis: [
                    "Castelo de Estremoz",
                    "Bonecas de Estremoz",
                    "Mármore de Estremoz"
                ]
            },
            {
                nome: "Évora",
                slug: "evora",
                populacao: 57000,
                area: 1307,
                freguesias: 12,
                cpPrefix: "7000",
                descricao: "Capital do Alentejo e Património da UNESCO, com o Templo Romano e muralhas medievais.",
                notaveis: [
                    "Templo Romano de Évora",
                    "Centro Histórico UNESCO",
                    "Catedral de Évora",
                    "Cromeleque dos Almendres"
                ]
            },
            {
                nome: "Montemor-o-Novo",
                slug: "montemor-o-novo",
                populacao: 17000,
                area: 1232,
                freguesias: 10,
                cpPrefix: "7050",
                descricao: "Município alentejano com castelo em ruínas e forte produção agrícola.",
                notaveis: [
                    "Castelo de Montemor-o-Novo",
                    "INATEL"
                ]
            },
            {
                nome: "Mora",
                slug: "mora",
                populacao: 5000,
                area: 437,
                freguesias: 7,
                cpPrefix: "7490",
                descricao: "Município ribeirinho do Sor com tradições alentejanas.",
                notaveis: [
                    "Lagoa de Gameiro",
                    "Rio Sor"
                ]
            },
            {
                nome: "Mourão",
                slug: "mourao",
                populacao: 3000,
                area: 282,
                freguesias: 3,
                cpPrefix: "7230",
                descricao: "Município fronteiriço com a maior barragem de Portugal, o Alqueva.",
                notaveis: [
                    "Barragem do Alqueva",
                    "Lago do Alqueva"
                ]
            },
            {
                nome: "Portel",
                slug: "portel",
                populacao: 6000,
                area: 600,
                freguesias: 8,
                cpPrefix: "7220",
                descricao: "Município junto ao Alqueva com castelo medieval e turismo lacustre em crescimento.",
                notaveis: [
                    "Castelo de Portel",
                    "Lago do Alqueva"
                ]
            },
            {
                nome: "Redondo",
                slug: "redondo",
                populacao: 7000,
                area: 369,
                freguesias: 4,
                cpPrefix: "7170",
                descricao: "Conhecida pelos vinhos do Redondo e pela Serra de Ossa.",
                notaveis: [
                    "Serra de Ossa",
                    "Adega Cooperativa do Redondo"
                ]
            },
            {
                nome: "Reguengos de Monsaraz",
                slug: "reguengos-de-monsaraz",
                populacao: 11000,
                area: 463,
                freguesias: 5,
                cpPrefix: "7200",
                descricao: "Porta de entrada para a aldeia medieval de Monsaraz e o Lago do Alqueva.",
                notaveis: [
                    "Aldeia de Monsaraz",
                    "Lago do Alqueva",
                    "Cromeleque do Xerez"
                ]
            },
            {
                nome: "Vendas Novas",
                slug: "vendas-novas",
                populacao: 12000,
                area: 223,
                freguesias: 2,
                cpPrefix: "7080",
                descricao: "Município alentejano com forte sector industrial e militar.",
                notaveis: [
                    "Paço Real de Vendas Novas",
                    "Escola Prática de Artilharia"
                ]
            },
            {
                nome: "Viana do Alentejo",
                slug: "viana-do-alentejo",
                populacao: 5500,
                area: 394,
                freguesias: 3,
                cpPrefix: "7090",
                descricao: "Município com belas serras alentejanas e produção tradicional de cereais.",
                notaveis: [
                    "Castelo de Viana do Alentejo",
                    "Barragem do Alvito"
                ]
            },
            {
                nome: "Vila Viçosa",
                slug: "vila-vicosa",
                populacao: 9000,
                area: 195,
                freguesias: 3,
                cpPrefix: "7160",
                descricao: "A 'terra dos duques' com o Paço Ducal dos Bragança, mármore e história real.",
                notaveis: [
                    "Paço Ducal dos Bragança",
                    "Castelo de Vila Viçosa",
                    "Mármore de Vila Viçosa"
                ]
            }
        ]
    },
    {
        nome: "Faro",
        slug: "faro",
        populacao: 451006,
        area: 4960,
        capital: "Faro",
        concelhos: [
            {
                nome: "Albufeira",
                slug: "albufeira",
                populacao: 40000,
                area: 140,
                freguesias: 4,
                cpPrefix: "8200",
                descricao: "Principal destino turístico do Algarve, com praias famosas, resorts e vida nocturna animada.",
                notaveis: [
                    "Praia da Oura",
                    "Praia dos Pescadores",
                    "Zoomarine"
                ]
            },
            {
                nome: "Alcoutim",
                slug: "alcoutim",
                populacao: 3000,
                area: 575,
                freguesias: 4,
                cpPrefix: "8970",
                descricao: "Município fronteiriço com Espanha no Guadiana, o mais pequeno e remoto do Algarve.",
                notaveis: [
                    "Castelo de Alcoutim",
                    "Rio Guadiana",
                    "Fronteira com Espanha"
                ]
            },
            {
                nome: "Aljezur",
                slug: "aljezur",
                populacao: 6000,
                area: 323,
                freguesias: 4,
                cpPrefix: "8670",
                descricao: "Costa Vicentina e praias selvagens, parte do Parque Natural do Sudoeste Alentejano.",
                notaveis: [
                    "Praia da Arrifana",
                    "Costa Vicentina",
                    "Parque Natural do Sudoeste Alentejano"
                ]
            },
            {
                nome: "Castro Marim",
                slug: "castro-marim",
                populacao: 7000,
                area: 309,
                freguesias: 3,
                cpPrefix: "8950",
                descricao: "Reserva Natural do Sapal, salinas históricas e o Castelo que vigiou a fronteira com Espanha.",
                notaveis: [
                    "Reserva Natural do Sapal",
                    "Castelo de Castro Marim",
                    "Rio Guadiana"
                ]
            },
            {
                nome: "Faro",
                slug: "faro",
                populacao: 64000,
                area: 202,
                freguesias: 6,
                cpPrefix: "8000",
                descricao: "Capital do Algarve e porta de entrada da região, com aeroporto internacional e centro histórico.",
                notaveis: [
                    "Aeroporto de Faro",
                    "Centro Histórico",
                    "Ria Formosa",
                    "Ilha de Faro"
                ]
            },
            {
                nome: "Lagoa",
                slug: "lagoa",
                populacao: 24000,
                area: 88,
                freguesias: 5,
                cpPrefix: "8400",
                descricao: "Município do Barlavento Algarvio com vinhos, praias de calcário e grutas marinhas.",
                notaveis: [
                    "Praia de Carvoeiro",
                    "Algar Seco",
                    "Percurso dos Sete Vales Suspensos"
                ]
            },
            {
                nome: "Lagos",
                slug: "lagos",
                populacao: 31000,
                area: 213,
                freguesias: 4,
                cpPrefix: "8600",
                descricao: "Cidade histórica que foi ponto de partida das Descobertas portuguesas, com praias únicas.",
                notaveis: [
                    "Ponta da Piedade",
                    "Praia Dona Ana",
                    "Mercado de Escravos",
                    "Fortaleza da Ponta da Bandeira"
                ]
            },
            {
                nome: "Loulé",
                slug: "loule",
                populacao: 70000,
                area: 764,
                freguesias: 9,
                cpPrefix: "8100",
                descricao: "O maior município do Algarve, com o Carnaval mais famoso de Portugal e o Castelo de Loulé.",
                notaveis: [
                    "Carnaval de Loulé",
                    "Castelo de Loulé",
                    "Mercado Municipal de Loulé"
                ]
            },
            {
                nome: "Monchique",
                slug: "monchique",
                populacao: 6000,
                area: 395,
                freguesias: 3,
                cpPrefix: "8550",
                descricao: "Serra de Monchique, o ponto mais alto do Algarve, com termas e medronheiro.",
                notaveis: [
                    "Serra de Monchique",
                    "Termas de Monchique",
                    "Foia (902m)"
                ]
            },
            {
                nome: "Olhão",
                slug: "olhao",
                populacao: 45000,
                area: 131,
                freguesias: 5,
                cpPrefix: "8700",
                descricao: "Principal porto piscatório do Algarve, mercado de peixe famoso e as ilhas da Ria Formosa.",
                notaveis: [
                    "Ria Formosa",
                    "Mercado de Olhão",
                    "Ilha da Armona",
                    "Ilha da Culatra"
                ]
            },
            {
                nome: "Portimão",
                slug: "portimao",
                populacao: 55000,
                area: 182,
                freguesias: 3,
                cpPrefix: "8500",
                descricao: "Segunda maior cidade do Algarve, com a icónica Praia da Rocha e o Autódromo.",
                notaveis: [
                    "Praia da Rocha",
                    "Autódromo Internacional do Algarve",
                    "Museu de Portimão"
                ]
            },
            {
                nome: "São Brás de Alportel",
                slug: "sao-bras-de-alportel",
                populacao: 11000,
                area: 150,
                freguesias: 1,
                cpPrefix: "8150",
                descricao: "Município da Serra Algarvia, capital da cortiça e porta da Rota da Cortiça.",
                notaveis: [
                    "Museu do Traje Algarvio",
                    "Rota da Cortiça"
                ]
            },
            {
                nome: "Silves",
                slug: "silves",
                populacao: 37000,
                area: 680,
                freguesias: 6,
                cpPrefix: "8300",
                descricao: "Antiga capital dos mouros com o maior castelo árabe da Península Ibérica e laranjais.",
                notaveis: [
                    "Castelo de Silves",
                    "Museu Arqueológico",
                    "Festival da Cerveja Medieval"
                ]
            },
            {
                nome: "Tavira",
                slug: "tavira",
                populacao: 26000,
                area: 607,
                freguesias: 6,
                cpPrefix: "8800",
                descricao: "Considerada a cidade mais bela do Algarve, com arquitectura romana e igrejas históricas.",
                notaveis: [
                    "Castelo de Tavira",
                    "Ilha de Tavira",
                    "Rio Gilão"
                ]
            },
            {
                nome: "Vila do Bispo",
                slug: "vila-do-bispo",
                populacao: 5500,
                area: 179,
                freguesias: 4,
                cpPrefix: "8650",
                descricao: "No extremo sudoeste de Portugal, com o Cabo de São Vicente e praias selvagens.",
                notaveis: [
                    "Cabo de São Vicente",
                    "Sagres",
                    "Costa Vicentina"
                ]
            },
            {
                nome: "Vila Real de Santo António",
                slug: "vila-real-de-santo-antonio",
                populacao: 19000,
                area: 61,
                freguesias: 2,
                cpPrefix: "8900",
                descricao: "Cidade pombalina na foz do Guadiana, fronteira com Espanha, com casino e praias.",
                notaveis: [
                    "Praça Marquês de Pombal",
                    "Monte Gordo",
                    "Rio Guadiana"
                ]
            }
        ]
    },
    {
        nome: "Lisboa",
        slug: "lisboa",
        populacao: 2250533,
        area: 2761,
        capital: "Lisboa",
        concelhos: [
            {
                nome: "Alenquer",
                slug: "alenquer",
                populacao: 43000,
                area: 304,
                freguesias: 17,
                cpPrefix: "2580",
                descricao: "Município vitivinícola da região de Lisboa com castelo medieval e produção de vinhos premiados.",
                notaveis: [
                    "Castelo de Alenquer",
                    "Vinhos de Alenquer",
                    "Convento de São Francisco"
                ]
            },
            {
                nome: "Amadora",
                slug: "amadora",
                populacao: 175000,
                area: 24,
                freguesias: 6,
                cpPrefix: "2700",
                descricao: "Município urbano da Grande Lisboa, um dos mais densos de Portugal, com o Festival BD.",
                notaveis: [
                    "Festival Internacional de BD da Amadora",
                    "Museu Nacional do Teatro"
                ]
            },
            {
                nome: "Arruda dos Vinhos",
                slug: "arruda-dos-vinhos",
                populacao: 14000,
                area: 78,
                freguesias: 4,
                cpPrefix: "2630",
                descricao: "Município do vinho tinto, com adegas premiadas e tradição vitivinícola centenária.",
                notaveis: [
                    "Adega de Arruda",
                    "Quinta de Pancas"
                ]
            },
            {
                nome: "Azambuja",
                slug: "azambuja",
                populacao: 22000,
                area: 263,
                freguesias: 8,
                cpPrefix: "2050",
                descricao: "Município ribeirinho do Tejo com forte tradição equestre e pecuária.",
                notaveis: [
                    "Feiras de Gado de Azambuja",
                    "Rio Tejo"
                ]
            },
            {
                nome: "Caldas da Rainha",
                slug: "caldas-da-rainha",
                populacao: 51000,
                area: 256,
                freguesias: 16,
                cpPrefix: "2500",
                descricao: "Cidade das caldas mandadas construir pela Rainha D. Leonor, com faianças e cerâmica erótica.",
                notaveis: [
                    "Hospital Termal",
                    "Faianças das Caldas",
                    "Museu de José Malhoa"
                ]
            },
            {
                nome: "Câmara de Lobos",
                slug: "camara-de-lobos",
                populacao: 35000,
                area: 52,
                freguesias: 5,
                cpPrefix: "9300",
                descricao: "Pittoresco município da Madeira, famoso pelas uvas para vinho Madeira e pela Cabo Girão.",
                notaveis: [
                    "Cabo Girão",
                    "Pôr do Sol",
                    "Produção de Vinho Madeira"
                ]
            },
            {
                nome: "Cascais",
                slug: "cascais",
                populacao: 224000,
                area: 97,
                freguesias: 6,
                cpPrefix: "2750",
                descricao: "Refinado município balnear com palácio real, marina e praias de classe mundial.",
                notaveis: [
                    "Palácio da Cidadela",
                    "Praia de Cascais",
                    "Marina de Cascais",
                    "Boca do Inferno"
                ]
            },
            {
                nome: "Lisboa",
                slug: "lisboa",
                populacao: 548000,
                area: 84,
                freguesias: 24,
                cpPrefix: "1000",
                descricao: "Capital de Portugal, cidade de sete colinas à beira do Tejo, com Alfama, Belém e o Chiado.",
                notaveis: [
                    "Torre de Belém",
                    "Mosteiro dos Jerónimos",
                    "Castelo de S. Jorge",
                    "Alfama",
                    "Oceanário"
                ]
            },
            {
                nome: "Loures",
                slug: "loures",
                populacao: 205000,
                area: 169,
                freguesias: 18,
                cpPrefix: "2670",
                descricao: "Município periurbano de Lisboa com forte sector industrial e logístico.",
                notaveis: [
                    "Museu de Loures",
                    "Rio Trancão",
                    "Parque Urbano de Loures"
                ]
            },
            {
                nome: "Lourinhã",
                slug: "lourinhan",
                populacao: 25000,
                area: 148,
                freguesias: 12,
                cpPrefix: "2530",
                descricao: "Capital dos dinossauros em Portugal, com o mais rico espólio de fósseis do país.",
                notaveis: [
                    "Museu da Lourinhã",
                    "Fósseis de Dinossauro",
                    "Praia de Porto Dinheiro"
                ]
            },
            {
                nome: "Mafra",
                slug: "mafra",
                populacao: 76000,
                area: 291,
                freguesias: 17,
                cpPrefix: "2640",
                descricao: "Lar do grandioso Palácio Nacional de Mafra, Obra do Mundo — Património da UNESCO.",
                notaveis: [
                    "Palácio Nacional de Mafra",
                    "Tapada Nacional de Mafra",
                    "Ericeira"
                ]
            },
            {
                nome: "Malhada de Pedras",
                slug: "malhada-de-pedras",
                populacao: 5000,
                area: 130,
                freguesias: 5,
                cpPrefix: "7830",
                descricao: "Pequeno município alentejano.",
                notaveis: []
            },
            {
                nome: "Odivelas",
                slug: "odivelas",
                populacao: 145000,
                area: 27,
                freguesias: 4,
                cpPrefix: "2675",
                descricao: "Município periurbano de Lisboa com forte crescimento urbano e ligação ao Metro.",
                notaveis: [
                    "Mosteiro de Odivelas",
                    "Metro de Odivelas"
                ]
            },
            {
                nome: "Oeiras",
                slug: "oeiras",
                populacao: 172000,
                area: 46,
                freguesias: 10,
                cpPrefix: "2780",
                descricao: "Município de alta tecnologia com o Tagus Valley, palácio dos Marqueses de Pombal e costas atlânticas.",
                notaveis: [
                    "Palácio do Marquês de Pombal",
                    "Tagus Valley",
                    "Praia de Paço de Arcos"
                ]
            },
            {
                nome: "Peniche",
                slug: "peniche",
                populacao: 27000,
                area: 78,
                freguesias: 6,
                cpPrefix: "2520",
                descricao: "Cidade piscatória na Península de Peniche, com forte surf e a Fortaleza de Peniche.",
                notaveis: [
                    "Berlengas (Reserva da Biosfera)",
                    "Fortaleza de Peniche",
                    "Supertubos (surf)"
                ]
            },
            {
                nome: "Sintra",
                slug: "sintra",
                populacao: 395000,
                area: 319,
                freguesias: 11,
                cpPrefix: "2710",
                descricao: "Palácio, castelos e matas românticas, Património Mundial da UNESCO na Serra de Sintra.",
                notaveis: [
                    "Palácio Nacional de Sintra",
                    "Palácio da Pena",
                    "Quinta da Regaleira",
                    "Palácio de Monserrate"
                ]
            },
            {
                nome: "Sobral de Monte Agraço",
                slug: "sobral-de-monte-agraco",
                populacao: 10000,
                area: 81,
                freguesias: 4,
                cpPrefix: "2560",
                descricao: "Município histórico com linhas defensivas das Guerras Peninsulares.",
                notaveis: [
                    "Linha Torres",
                    "Adega de Sobral"
                ]
            },
            {
                nome: "Torres Vedras",
                slug: "torres-vedras",
                populacao: 79000,
                area: 407,
                freguesias: 20,
                cpPrefix: "2560",
                descricao: "Famosa pelo Carnaval e pelas Linhas de Torres Vedras defensivas das Guerras Peninsulares.",
                notaveis: [
                    "Linhas de Torres",
                    "Carnaval de Torres Vedras",
                    "Castelo de Torres Vedras"
                ]
            },
            {
                nome: "Vila Franca de Xira",
                slug: "vila-franca-de-xira",
                populacao: 137000,
                area: 318,
                freguesias: 11,
                cpPrefix: "2600",
                descricao: "Capital do toiro em Portugal, com as Festas do Colete Encarnado e a Lezíria do Tejo.",
                notaveis: [
                    "Festas do Colete Encarnado",
                    "Lezíria do Tejo",
                    "Museu do Neo-Realismo"
                ]
            }
        ]
    },
    {
        nome: "Porto",
        slug: "porto",
        populacao: 1817174,
        area: 2395,
        capital: "Porto",
        concelhos: [
            {
                nome: "Amarante",
                slug: "amarante",
                populacao: 56000,
                area: 301,
                freguesias: 42,
                cpPrefix: "4600",
                descricao: "Cidade romântica junto ao rio Tâmega com a Igreja de São Gonçalo, padroeiro dos namorados.",
                notaveis: [
                    "Igreja de São Gonçalo",
                    "Rio Tâmega",
                    "Museu Amadeo de Souza-Cardoso"
                ]
            },
            {
                nome: "Baião",
                slug: "baiao",
                populacao: 21000,
                area: 173,
                freguesias: 22,
                cpPrefix: "4640",
                descricao: "Município rural com o Castelo de Arnoia e paisagens do Douro.",
                notaveis: [
                    "Rio Douro",
                    "Serra do Marão",
                    "Barragem do Carrapatelo"
                ]
            },
            {
                nome: "Felgueiras",
                slug: "felgueiras",
                populacao: 58000,
                area: 116,
                freguesias: 31,
                cpPrefix: "4610",
                descricao: "Capital do calçado português, com forte indústria têxtil e de curtumes.",
                notaveis: [
                    "Museu do Calçado",
                    "Mosteiro de Pombeiro"
                ]
            },
            {
                nome: "Gondomar",
                slug: "gondomar",
                populacao: 168000,
                area: 132,
                freguesias: 12,
                cpPrefix: "4420",
                descricao: "Conhecida pela ourivesaria e filigrana, com as minas de ouro de Jales.",
                notaveis: [
                    "Ourivesaria de Gondomar",
                    "Rio Douro",
                    "Parque Biológico de Gaia"
                ]
            },
            {
                nome: "Lousada",
                slug: "lousada",
                populacao: 47000,
                area: 95,
                freguesias: 21,
                cpPrefix: "4620",
                descricao: "Município com tradição têxtil e forte crescimento industrial no Vale do Sousa.",
                notaveis: [
                    "Mosteiro de Pombeiro",
                    "Rio Sousa"
                ]
            },
            {
                nome: "Maia",
                slug: "maia",
                populacao: 135000,
                area: 83,
                freguesias: 17,
                cpPrefix: "4470",
                descricao: "Município com o Aeroporto Sá Carneiro, forte polo industrial e empresarial.",
                notaveis: [
                    "Aeroporto Francisco Sá Carneiro",
                    "Trofa Industrial"
                ]
            },
            {
                nome: "Marco de Canaveses",
                slug: "marco-de-canaveses",
                populacao: 53000,
                area: 202,
                freguesias: 31,
                cpPrefix: "4630",
                descricao: "Município do Alto Tâmega com forte produção de granito e indústria de construção.",
                notaveis: [
                    "Rio Tâmega",
                    "Rio Douro",
                    "Santa Casa da Misericórdia"
                ]
            },
            {
                nome: "Matosinhos",
                slug: "matosinhos",
                populacao: 175000,
                area: 62,
                freguesias: 4,
                cpPrefix: "4450",
                descricao: "Porto de pesca e lazer, com a Praia de Matosinhos, o melhor peixe fresco do Norte.",
                notaveis: [
                    "Praia de Matosinhos",
                    "IKEA Matosinhos",
                    "Casa da Música"
                ]
            },
            {
                nome: "Paços de Ferreira",
                slug: "pacos-de-ferreira",
                populacao: 56000,
                area: 71,
                freguesias: 17,
                cpPrefix: "4590",
                descricao: "Capital do móvel português, com a maior concentração de indústria de mobiliário do país.",
                notaveis: [
                    "Museu do Mobiliário",
                    "Fábrica de Móveis"
                ]
            },
            {
                nome: "Paredes",
                slug: "paredes",
                populacao: 86000,
                area: 157,
                freguesias: 24,
                cpPrefix: "4580",
                descricao: "Município do Vale do Sousa com forte tradição de mobiliário e granito.",
                notaveis: [
                    "Museu Municipal de Paredes",
                    "Rio Sousa"
                ]
            },
            {
                nome: "Penafiel",
                slug: "penafiel",
                populacao: 72000,
                area: 212,
                freguesias: 37,
                cpPrefix: "4560",
                descricao: "Capital do vinho verde da subregião do Sousa, com castelo medieval e romaria de São Gonçalo.",
                notaveis: [
                    "Museu Municipal Abade Pedrosa",
                    "Quinta da Aveleda",
                    "Vinho Verde Penafiel"
                ]
            },
            {
                nome: "Porto",
                slug: "porto",
                populacao: 238000,
                area: 41,
                freguesias: 7,
                cpPrefix: "4000",
                descricao: "Segunda maior cidade de Portugal, berço do vinho do Porto, com centro histórico Património da UNESCO.",
                notaveis: [
                    "Livraria Lello",
                    "Ribeira",
                    "Caves do Vinho do Porto",
                    "Torre dos Clérigos",
                    "Ponte Luís I"
                ]
            },
            {
                nome: "Póvoa de Varzim",
                slug: "povoa-de-varzim",
                populacao: 63000,
                area: 82,
                freguesias: 8,
                cpPrefix: "4490",
                descricao: "Cidade piscatória e balnear com casino, marina e forte tradição de pesca do bacalhau.",
                notaveis: [
                    "Casino da Póvoa",
                    "Praia da Póvoa",
                    "Museu Municipal de Etnografia e História"
                ]
            },
            {
                nome: "Santo Tirso",
                slug: "santo-tirso",
                populacao: 71000,
                area: 197,
                freguesias: 27,
                cpPrefix: "4780",
                descricao: "Cidade do Ave com forte tradição têxtil e o Mosteiro de Beneditinos.",
                notaveis: [
                    "Mosteiro de São Bento de Santo Tirso",
                    "Rio Ave",
                    "Museu Municipal Abade Pedrosa"
                ]
            },
            {
                nome: "Trofa",
                slug: "trofa",
                populacao: 38000,
                area: 72,
                freguesias: 8,
                cpPrefix: "4785",
                descricao: "Município jovem (criado em 1998) com forte crescimento industrial no vale do Ave.",
                notaveis: [
                    "Rio Ave",
                    "Indústria Têxtil"
                ]
            },
            {
                nome: "Valongo",
                slug: "valongo",
                populacao: 93000,
                area: 75,
                freguesias: 5,
                cpPrefix: "4440",
                descricao: "Município industrial com forte tradição na produção de pão-de-ló e festas tradicionais.",
                notaveis: [
                    "Azenha da Ponte",
                    "Pão-de-ló de Valongo"
                ]
            },
            {
                nome: "Vila do Conde",
                slug: "vila-do-conde",
                populacao: 79000,
                area: 149,
                freguesias: 30,
                cpPrefix: "4480",
                descricao: "Cidade costeira com rendas de bilros artesanais e forte tradição náutica.",
                notaveis: [
                    "Rendas de Bilros",
                    "Castelo do Queijo",
                    "Foz do Ave"
                ]
            },
            {
                nome: "Vila Nova de Gaia",
                slug: "vila-nova-de-gaia",
                populacao: 302000,
                area: 168,
                freguesias: 15,
                cpPrefix: "4400",
                descricao: "Margem sul do Douro, lar das famosas caves do Vinho do Porto e da Praia de Espinho.",
                notaveis: [
                    "Caves de Vinho do Porto",
                    "Cais de Gaia",
                    "Teleférico de Gaia",
                    "Praia de Miramar"
                ]
            }
        ]
    },
    {
        nome: "Setúbal",
        slug: "setubal",
        populacao: 851258,
        area: 5064,
        capital: "Setúbal",
        concelhos: [
            {
                nome: "Alcochete",
                slug: "alcochete",
                populacao: 17000,
                area: 128,
                freguesias: 3,
                cpPrefix: "2890",
                descricao: "Município do Estuário do Tejo com a Reserva Natural do Estuário do Tejo.",
                notaveis: [
                    "Reserva Natural do Estuário do Tejo",
                    "Sapal de Alcochete"
                ]
            },
            {
                nome: "Almada",
                slug: "almada",
                populacao: 174000,
                area: 70,
                freguesias: 5,
                cpPrefix: "2800",
                descricao: "Margem sul do Tejo com o Cristo Rei, cacilheiros e as praias da Costa da Caparica.",
                notaveis: [
                    "Cristo Rei",
                    "Costa da Caparica",
                    "Cacilheiros"
                ]
            },
            {
                nome: "Barreiro",
                slug: "barreiro",
                populacao: 79000,
                area: 31,
                freguesias: 4,
                cpPrefix: "2830",
                descricao: "Município industrial com forte herança operária e bairros históricos.",
                notaveis: [
                    "Núcleo Histórico do Barreiro",
                    "Museu Industrial"
                ]
            },
            {
                nome: "Grândola",
                slug: "grandola",
                populacao: 15000,
                area: 828,
                freguesias: 6,
                cpPrefix: "7570",
                descricao: "Famosa pela música de José Afonso 'Grândola Vila Morena', símbolo do 25 de Abril.",
                notaveis: [
                    "Hino do 25 de Abril",
                    "Tróia",
                    "Lagoa de Santo André"
                ]
            },
            {
                nome: "Moita",
                slug: "moita",
                populacao: 66000,
                area: 55,
                freguesias: 4,
                cpPrefix: "2860",
                descricao: "Município periurbano de Lisboa com forte comunidade e o Estuário do Tejo.",
                notaveis: [
                    "Reserva Natural do Estuário do Tejo"
                ]
            },
            {
                nome: "Montijo",
                slug: "montijo",
                populacao: 54000,
                area: 348,
                freguesias: 7,
                cpPrefix: "2870",
                descricao: "Município do Estuário do Tejo com o futuro Aeroporto Internacional de Lisboa em construção.",
                notaveis: [
                    "Futuro Aeroporto de Lisboa",
                    "Estuário do Tejo"
                ]
            },
            {
                nome: "Palmela",
                slug: "palmela",
                populacao: 62000,
                area: 462,
                freguesias: 5,
                cpPrefix: "2950",
                descricao: "Famosa pelo vinho de Palmela e pelo Castelo de Palmela com pousada histórica.",
                notaveis: [
                    "Castelo de Palmela",
                    "Vinhos de Palmela",
                    "Pousada de Palmela"
                ]
            },
            {
                nome: "Santiago do Cacém",
                slug: "santiago-do-cacem",
                populacao: 29000,
                area: 1059,
                freguesias: 13,
                cpPrefix: "7540",
                descricao: "Município com ruínas romanas de Miróbriga e praia de Santo André.",
                notaveis: [
                    "Ruínas Romanas de Miróbriga",
                    "Lagoa de Santo André",
                    "Castelo de Santiago"
                ]
            },
            {
                nome: "Seixal",
                slug: "seixal",
                populacao: 167000,
                area: 96,
                freguesias: 4,
                cpPrefix: "2840",
                descricao: "Município industrial com Ecomuseu Municipal e forte tradição naval.",
                notaveis: [
                    "Ecomuseu do Seixal",
                    "Rio Tejo",
                    "Corroios"
                ]
            },
            {
                nome: "Sesimbra",
                slug: "sesimbra",
                populacao: 49000,
                area: 195,
                freguesias: 2,
                cpPrefix: "2970",
                descricao: "Pitoresca vila piscatória do Parque Natural da Arrábida com águas cristalinas.",
                notaveis: [
                    "Castelo de Sesimbra",
                    "Parque Natural da Arrábida",
                    "Praia de Sesimbra"
                ]
            },
            {
                nome: "Setúbal",
                slug: "setubal",
                populacao: 124000,
                area: 172,
                freguesias: 8,
                cpPrefix: "2900",
                descricao: "Terceira maior cidade da Área Metropolitana de Lisboa, com porto comercial e a Arrábida.",
                notaveis: [
                    "Parque Natural da Arrábida",
                    "Museu de Setúbal",
                    "Igreja de Jesus"
                ]
            },
            {
                nome: "Sines",
                slug: "sines",
                populacao: 14000,
                area: 203,
                freguesias: 2,
                cpPrefix: "7520",
                descricao: "Porto energético de Portugal e terra natal de Vasco da Gama, com festival de world music.",
                notaveis: [
                    "Porto de Sines",
                    "Festival de World Music",
                    "Castelo de Sines"
                ]
            },
            {
                nome: "Alcácer do Sal",
                slug: "alcacer-do-sal",
                populacao: 13000,
                area: 1499,
                freguesias: 8,
                cpPrefix: "7580",
                descricao: "Município com o maior arrozal de Portugal e uma das maiores áreas de pinhal do Alentejo Litoral.",
                notaveis: [
                    "Castelo de Alcácer do Sal",
                    "Arrozais do Sado",
                    "Pousada de Alcácer do Sal"
                ]
            }
        ]
    },
    {
        nome: "Leiria",
        slug: "leiria",
        populacao: 470930,
        area: 3517,
        capital: "Leiria",
        concelhos: [
            {
                nome: "Alcobaça",
                slug: "alcobaca",
                populacao: 56000,
                area: 408,
                freguesias: 18,
                cpPrefix: "2460",
                descricao: "Lar do Mosteiro de Alcobaça, uma das mais belas obras do gótico português e Património UNESCO.",
                notaveis: [
                    "Mosteiro de Alcobaça",
                    "Cripta de D. Inês de Castro",
                    "Cerâmica de Alcobaça"
                ]
            },
            {
                nome: "Ansião",
                slug: "ansiao",
                populacao: 13000,
                area: 222,
                freguesias: 11,
                cpPrefix: "3240",
                descricao: "Município da Beira Litoral com a Barragem da Bouçã e paisagens naturais.",
                notaveis: [
                    "Barragem da Bouçã",
                    "Rio Nabão"
                ]
            },
            {
                nome: "Batalha",
                slug: "batalha",
                populacao: 15000,
                area: 103,
                freguesias: 5,
                cpPrefix: "2440",
                descricao: "O Mosteiro da Batalha, obra prima do gótico manuelino, construído após a Batalha de Aljubarrota.",
                notaveis: [
                    "Mosteiro da Batalha",
                    "Capelas Imperfeitas",
                    "Túmulo do Soldado Desconhecido"
                ]
            },
            {
                nome: "Bombarral",
                slug: "bombarral",
                populacao: 13000,
                area: 101,
                freguesias: 5,
                cpPrefix: "2540",
                descricao: "Município da Linha do Oeste com forte produção de vinho e artesanato regional.",
                notaveis: [
                    "Adega Cooperativa do Bombarral",
                    "Linha do Oeste"
                ]
            },
            {
                nome: "Caldas da Rainha",
                slug: "caldas-da-rainha",
                populacao: 51000,
                area: 256,
                freguesias: 16,
                cpPrefix: "2500",
                descricao: "Cidade real das caldas, com faianças eróticas e o Museu de José Malhoa.",
                notaveis: [
                    "Hospital Termal",
                    "Faianças das Caldas",
                    "Museu de José Malhoa"
                ]
            },
            {
                nome: "Castanheira de Pêra",
                slug: "castanheira-de-pera",
                populacao: 3200,
                area: 63,
                freguesias: 2,
                cpPrefix: "3280",
                descricao: "Município serrano da Serra da Lousã com turismo de montanha.",
                notaveis: [
                    "Serra da Lousã",
                    "Praia Fluvial de Castanheira"
                ]
            },
            {
                nome: "Figueiró dos Vinhos",
                slug: "figueiro-dos-vinhos",
                populacao: 6000,
                area: 169,
                freguesias: 7,
                cpPrefix: "3260",
                descricao: "Município serrano com o Rio Zêzere e tradição vinícola.",
                notaveis: [
                    "Rio Zêzere",
                    "Castelo de Figueiró"
                ]
            },
            {
                nome: "Leiria",
                slug: "leiria",
                populacao: 127000,
                area: 565,
                freguesias: 26,
                cpPrefix: "2400",
                descricao: "Cidade entre o Pinhal de Leiria e o mar, com o magnífico Castelo de Leiria e as praias do centro.",
                notaveis: [
                    "Castelo de Leiria",
                    "Pinhal de Leiria",
                    "Praia da Vieira"
                ]
            },
            {
                nome: "Marinha Grande",
                slug: "marinha-grande",
                populacao: 38000,
                area: 187,
                freguesias: 5,
                cpPrefix: "2430",
                descricao: "Capital do vidro português, com a maior tradição vidraria da Península Ibérica.",
                notaveis: [
                    "Museu do Vidro",
                    "Indústria Vidraria",
                    "Pinhal de Leiria"
                ]
            },
            {
                nome: "Nazaré",
                slug: "nazare",
                populacao: 15000,
                area: 82,
                freguesias: 3,
                cpPrefix: "2450",
                descricao: "Famosa pelas maiores ondas do mundo em Praia do Norte e pela tradição piscatória.",
                notaveis: [
                    "Praia do Norte",
                    "Ondas Gigantes",
                    "Sítio da Nazaré"
                ]
            },
            {
                nome: "Óbidos",
                slug: "obidos",
                populacao: 12000,
                area: 141,
                freguesias: 7,
                cpPrefix: "2510",
                descricao: "Aldeia medieval medieval amuralhada, uma das mais bonitas de Portugal com Óbidos Walled Town.",
                notaveis: [
                    "Castelo de Óbidos",
                    "Festival Internacional de Chocolate",
                    "Lagoa de Óbidos"
                ]
            },
            {
                nome: "Pedrógão Grande",
                slug: "pedrogao-grande",
                populacao: 4000,
                area: 129,
                freguesias: 5,
                cpPrefix: "3270",
                descricao: "Município serrano do Pinhal Interior Norte com paisagens de montanha.",
                notaveis: [
                    "Serra de Ansião",
                    "Rio Zêzere"
                ]
            },
            {
                nome: "Peniche",
                slug: "peniche",
                populacao: 27000,
                area: 78,
                freguesias: 6,
                cpPrefix: "2520",
                descricao: "Fortaleza marítima e capital do surf português, com as Ilhas Berlengas.",
                notaveis: [
                    "Berlengas",
                    "Fortaleza de Peniche",
                    "Supertubos"
                ]
            },
            {
                nome: "Pombal",
                slug: "pombal",
                populacao: 55000,
                area: 627,
                freguesias: 21,
                cpPrefix: "3100",
                descricao: "Município com o Castelo de Pombal e forte tradição industrial e agrícola.",
                notaveis: [
                    "Castelo de Pombal",
                    "Marquês de Pombal"
                ]
            },
            {
                nome: "Porto de Mós",
                slug: "porto-de-mos",
                populacao: 24000,
                area: 261,
                freguesias: 12,
                cpPrefix: "2480",
                descricao: "Município do Maciço Calcário Estremenho com Parque Natural e grutas.",
                notaveis: [
                    "Parque Natural das Serras de Aire e Candeeiros",
                    "Grutas de Mira de Aire"
                ]
            }
        ]
    },
    {
        nome: "Santarém",
        slug: "santarem",
        populacao: 453638,
        area: 6747,
        capital: "Santarém",
        concelhos: [
            {
                nome: "Abrantes",
                slug: "abrantes",
                populacao: 39000,
                area: 714,
                freguesias: 18,
                cpPrefix: "2200",
                descricao: "Cidade sobre o Tejo com forte história medieval e o Castelo de Abrantes.",
                notaveis: [
                    "Castelo de Abrantes",
                    "Rio Tejo",
                    "Museu D. Lopo de Almeida"
                ]
            },
            {
                nome: "Alcanena",
                slug: "alcanena",
                populacao: 14000,
                area: 128,
                freguesias: 7,
                cpPrefix: "2380",
                descricao: "Capital do couro e curtumes portugueses, com forte tradição industrial.",
                notaveis: [
                    "Indústria de Curtumes",
                    "Serra de Aire"
                ]
            },
            {
                nome: "Almeirim",
                slug: "almeirim",
                populacao: 22000,
                area: 225,
                freguesias: 4,
                cpPrefix: "2080",
                descricao: "Famosa pela Sopa da Pedra, prato típico, e pelos vinhos da região do Ribatejo.",
                notaveis: [
                    "Sopa da Pedra de Almeirim",
                    "Vinhos do Ribatejo"
                ]
            },
            {
                nome: "Alpiarça",
                slug: "alpiarça",
                populacao: 8000,
                area: 95,
                freguesias: 1,
                cpPrefix: "2090",
                descricao: "Município do Ribatejo com a Casa dos Patudos e forte produção agrícola.",
                notaveis: [
                    "Casa dos Patudos",
                    "Lezíria do Tejo"
                ]
            },
            {
                nome: "Benavente",
                slug: "benavente",
                populacao: 32000,
                area: 522,
                freguesias: 4,
                cpPrefix: "2130",
                descricao: "Município da Lezíria com forte tradição equestre e tourada.",
                notaveis: [
                    "Festas da Golegã",
                    "Lezíria do Tejo"
                ]
            },
            {
                nome: "Cartaxo",
                slug: "cartaxo",
                populacao: 24000,
                area: 158,
                freguesias: 8,
                cpPrefix: "2070",
                descricao: "Município ribatejano com produção de vinho e forte tradição tauromáquica.",
                notaveis: [
                    "Vinhos do Ribatejo",
                    "Museu Rural e do Vinho"
                ]
            },
            {
                nome: "Chamusca",
                slug: "chamusca",
                populacao: 11000,
                area: 715,
                freguesias: 7,
                cpPrefix: "2140",
                descricao: "Município da Lezíria com forte tradição piscatória e equestre.",
                notaveis: [
                    "Lezíria do Tejo",
                    "Rio Tejo"
                ]
            },
            {
                nome: "Constância",
                slug: "constancia",
                populacao: 4000,
                area: 76,
                freguesias: 3,
                cpPrefix: "2250",
                descricao: "Aldeia Histórica à confluência do Zêzere com o Tejo, com o Jardim Luís de Camões.",
                notaveis: [
                    "Jardim Luís de Camões",
                    "Confluência Tejo-Zêzere"
                ]
            },
            {
                nome: "Coruche",
                slug: "coruche",
                populacao: 19000,
                area: 1113,
                freguesias: 12,
                cpPrefix: "2100",
                descricao: "Município da Lezíria com a maior produção de cortiça do mundo.",
                notaveis: [
                    "Indústria de Cortiça",
                    "Lezíria do Tejo"
                ]
            },
            {
                nome: "Entroncamento",
                slug: "entroncamento",
                populacao: 21000,
                area: 12,
                freguesias: 2,
                cpPrefix: "2330",
                descricao: "Cidade ferroviária nascida em torno do nó ferroviário mais importante de Portugal.",
                notaveis: [
                    "Museu Ferroviário",
                    "Nó Ferroviário do Entroncamento"
                ]
            },
            {
                nome: "Ferreira do Zêzere",
                slug: "ferreira-do-zezere",
                populacao: 9000,
                area: 180,
                freguesias: 9,
                cpPrefix: "2240",
                descricao: "Município ribeirinho com a Albufeira de Castelo do Bode e turismo de natureza.",
                notaveis: [
                    "Albufeira de Castelo do Bode",
                    "Rio Zêzere"
                ]
            },
            {
                nome: "Golegã",
                slug: "golega",
                populacao: 5500,
                area: 85,
                freguesias: 3,
                cpPrefix: "2150",
                descricao: "Capital Nacional do Cavalo e da Coudelaria, com a famosa Feira Nacional de Equicultura.",
                notaveis: [
                    "Feira Nacional do Cavalo",
                    "Coudelaria de Alter",
                    "Museu de Carlos Relvas"
                ]
            },
            {
                nome: "Mação",
                slug: "macao",
                populacao: 7500,
                area: 400,
                freguesias: 8,
                cpPrefix: "6120",
                descricao: "Município do Pinhal Interior com pré-história rica e turismo de natureza.",
                notaveis: [
                    "Museu de Arte Pré-histórica e do Sagrado",
                    "Rio Tejo"
                ]
            },
            {
                nome: "Ourém",
                slug: "ourem",
                populacao: 46000,
                area: 416,
                freguesias: 16,
                cpPrefix: "2490",
                descricao: "Lar da Cova de Iria, Fátima — um dos maiores santuários católicos do mundo.",
                notaveis: [
                    "Santuário de Fátima",
                    "Castelo de Ourém",
                    "Basílica de Nossa Senhora do Rosário"
                ]
            },
            {
                nome: "Rio Maior",
                slug: "rio-maior",
                populacao: 22000,
                area: 265,
                freguesias: 13,
                cpPrefix: "2040",
                descricao: "Município com as Salinas de Rio Maior, únicas salinas de interior em Portugal.",
                notaveis: [
                    "Salinas de Rio Maior",
                    "Aldeia Típica de Rio Maior"
                ]
            },
            {
                nome: "Salvaterra de Magos",
                slug: "salvaterra-de-magos",
                populacao: 21000,
                area: 244,
                freguesias: 6,
                cpPrefix: "2120",
                descricao: "Município da Lezíria com tradição de tourada e o Palácio Real de Salvaterra de Magos.",
                notaveis: [
                    "Palácio Real de Salvaterra",
                    "Lezíria do Tejo"
                ]
            },
            {
                nome: "Santarém",
                slug: "santarem",
                populacao: 60000,
                area: 552,
                freguesias: 26,
                cpPrefix: "2000",
                descricao: "Capital do Ribatejo, cidade dos miradouros, com o Museu Diocesano e a Feira Nacional da Agricultura.",
                notaveis: [
                    "Miradouro de São Bento",
                    "Feira Nacional da Agricultura",
                    "Igreja do Santíssimo Milagre"
                ]
            },
            {
                nome: "Sardoal",
                slug: "sardoal",
                populacao: 4000,
                area: 96,
                freguesias: 4,
                cpPrefix: "2230",
                descricao: "Município rural ribatejano com tradição agrícola e paisagens serranas.",
                notaveis: [
                    "Serra de Sardoal",
                    "Rio Tejo"
                ]
            },
            {
                nome: "Tomar",
                slug: "tomar",
                populacao: 40000,
                area: 351,
                freguesias: 15,
                cpPrefix: "2300",
                descricao: "A cidade templária com o Convento de Cristo, obra-prima manuelina e Património UNESCO.",
                notaveis: [
                    "Convento de Cristo",
                    "Festa dos Tabuleiros",
                    "Rio Nabão"
                ]
            },
            {
                nome: "Torres Novas",
                slug: "torres-novas",
                populacao: 36000,
                area: 272,
                freguesias: 13,
                cpPrefix: "2350",
                descricao: "Município com o Parque Natural das Serras de Aire e Candeeiros e as grutas de Alvados.",
                notaveis: [
                    "Castelo de Torres Novas",
                    "Grutas de Alvados e Mira de Aire"
                ]
            },
            {
                nome: "Vila Nova da Barquinha",
                slug: "vila-nova-da-barquinha",
                populacao: 8000,
                area: 49,
                freguesias: 4,
                cpPrefix: "2260",
                descricao: "Município ribatejano de charme com o Rio Tejo e atividades de ecoturismo.",
                notaveis: [
                    "Rio Tejo",
                    "Marina de Vila Nova da Barquinha"
                ]
            }
        ]
    },
    {
        nome: "Viana do Castelo",
        slug: "viana-do-castelo",
        populacao: 244836,
        area: 2255,
        capital: "Viana do Castelo",
        concelhos: [
            {
                nome: "Arcos de Valdevez",
                slug: "arcos-de-valdevez",
                populacao: 22000,
                area: 447,
                freguesias: 51,
                cpPrefix: "4970",
                descricao: "Porta do Parque Nacional Peneda-Gerês, com aldeias tradicionais e natureza exuberante.",
                notaveis: [
                    "Parque Nacional Peneda-Gerês",
                    "Rio Vez",
                    "Serra da Peneda"
                ]
            },
            {
                nome: "Caminha",
                slug: "caminha",
                populacao: 17000,
                area: 136,
                freguesias: 16,
                cpPrefix: "4910",
                descricao: "Município minhoto à foz do Rio Minho, fronteiro com Espanha, com castelo medieval.",
                notaveis: [
                    "Castelo de Caminha",
                    "Praias do Moledo",
                    "Rio Minho"
                ]
            },
            {
                nome: "Melgaço",
                slug: "melgaco",
                populacao: 9000,
                area: 238,
                freguesias: 22,
                cpPrefix: "4960",
                descricao: "Município mais a norte de Portugal com o vinho verde Alvarinho e o Parque do Gerês.",
                notaveis: [
                    "Vinho Alvarinho",
                    "Parque Nacional Peneda-Gerês",
                    "Castelo de Melgaço"
                ]
            },
            {
                nome: "Monção",
                slug: "moncao",
                populacao: 19000,
                area: 212,
                freguesias: 31,
                cpPrefix: "4950",
                descricao: "Cidade do Alvarinho, fronteira com Espanha, com spa e termas históricas.",
                notaveis: [
                    "Vinho Alvarinho de Monção",
                    "Termas de Monção",
                    "Castelo de Monção"
                ]
            },
            {
                nome: "Paredes de Coura",
                slug: "paredes-de-coura",
                populacao: 9000,
                area: 138,
                freguesias: 22,
                cpPrefix: "4940",
                descricao: "Município minhoto com o famoso Festival Paredes de Coura e natureza selvagem.",
                notaveis: [
                    "Festival Paredes de Coura",
                    "Rio Coura",
                    "Serra de Arga"
                ]
            },
            {
                nome: "Ponte da Barca",
                slug: "ponte-da-barca",
                populacao: 12000,
                area: 182,
                freguesias: 26,
                cpPrefix: "4980",
                descricao: "Porta do Lima e do Gerês, com a Ponte Romana de Barca e a Serra do Gerês.",
                notaveis: [
                    "Parque Nacional Peneda-Gerês",
                    "Rio Lima",
                    "Ponte Medieval de Barca"
                ]
            },
            {
                nome: "Ponte de Lima",
                slug: "ponte-de-lima",
                populacao: 43000,
                area: 320,
                freguesias: 51,
                cpPrefix: "4990",
                descricao: "A mais antiga vila de Portugal (1125), com a Romana Ponte de Lima e vinhos verdes.",
                notaveis: [
                    "Ponte Romana de Lima",
                    "Vinho Verde de Lima",
                    "Feira Quinzenal de Ponte de Lima"
                ]
            },
            {
                nome: "Valença",
                slug: "valenca",
                populacao: 14000,
                area: 117,
                freguesias: 10,
                cpPrefix: "4930",
                descricao: "Fortaleza abaluartada fronteira com Espanha, com intenso comércio transfronteiriço.",
                notaveis: [
                    "Fortaleza de Valença",
                    "Ponte Internacional de Valença",
                    "Comércio com Tui"
                ]
            },
            {
                nome: "Viana do Castelo",
                slug: "viana-do-castelo",
                populacao: 89000,
                area: 319,
                freguesias: 27,
                cpPrefix: "4900",
                descricao: "Capital do Minho litoral com o Santuário de Santa Luzia e a ponte Eiffel sobre o Lima.",
                notaveis: [
                    "Santuário de Santa Luzia",
                    "Ponte Eiffel",
                    "Bordados de Viana",
                    "Praia do Cabedelo"
                ]
            },
            {
                nome: "Vila Nova de Cerveira",
                slug: "vila-nova-de-cerveira",
                populacao: 9000,
                area: 109,
                freguesias: 12,
                cpPrefix: "4920",
                descricao: "Município artístico com Bienal de Arte de Cerveira, fronteira com Espanha.",
                notaveis: [
                    "Bienal de Arte de Cerveira",
                    "Rio Minho",
                    "Castelo de Cerveira"
                ]
            }
        ]
    },
    {
        nome: "Vila Real",
        slug: "vila-real",
        populacao: 206661,
        area: 4328,
        capital: "Vila Real",
        concelhos: [
            {
                nome: "Alijó",
                slug: "alijo",
                populacao: 12000,
                area: 295,
                freguesias: 17,
                cpPrefix: "5070",
                descricao: "Município do Douro Vinhateiro com produção de vinho do Porto e a Quinta do Crasto.",
                notaveis: [
                    "Douro Vinhateiro",
                    "Quinta do Crasto",
                    "Pinhão"
                ]
            },
            {
                nome: "Boticas",
                slug: "boticas",
                populacao: 6000,
                area: 322,
                freguesias: 20,
                cpPrefix: "5460",
                descricao: "Município de Trás-os-Montes com um vinho único — o Vinho dos Mortos de Boticas.",
                notaveis: [
                    "Vinho dos Mortos",
                    "Parque Natural do Alvão"
                ]
            },
            {
                nome: "Chaves",
                slug: "chaves",
                populacao: 43000,
                area: 591,
                freguesias: 52,
                cpPrefix: "5400",
                descricao: "Cidade termal fronteira com Espanha, com pontes romanas e fumeiro transmontano.",
                notaveis: [
                    "Termas de Chaves",
                    "Ponte Romana de Trajano",
                    "Fumeiro de Chaves"
                ]
            },
            {
                nome: "Mesão Frio",
                slug: "mesao-frio",
                populacao: 5000,
                area: 66,
                freguesias: 6,
                cpPrefix: "5040",
                descricao: "Município do Douro Vinhateiro com produção de vinho do Porto e paisagens únicas.",
                notaveis: [
                    "Douro Vinhateiro",
                    "Quinta de S. Domingos"
                ]
            },
            {
                nome: "Mondim de Basto",
                slug: "mondim-de-basto",
                populacao: 8000,
                area: 177,
                freguesias: 9,
                cpPrefix: "4880",
                descricao: "Município serrano com o Parque Natural do Alvão e o Rio Tâmega.",
                notaveis: [
                    "Parque Natural do Alvão",
                    "Rio Tâmega",
                    "Serra do Alvão"
                ]
            },
            {
                nome: "Montalegre",
                slug: "montalegre",
                populacao: 11000,
                area: 806,
                freguesias: 38,
                cpPrefix: "5470",
                descricao: "Município de Trás-os-Montes no Parque Nacional Peneda-Gerês, com albufeiras e montanhas.",
                notaveis: [
                    "Parque Nacional Peneda-Gerês",
                    "Albufeira de Pisões",
                    "Castelo de Montalegre"
                ]
            },
            {
                nome: "Murça",
                slug: "murca",
                populacao: 6000,
                area: 283,
                freguesias: 14,
                cpPrefix: "5090",
                descricao: "Município transmontano com a famosa Porca de Murça, escultura pré-histórica.",
                notaveis: [
                    "Porca de Murça",
                    "Verraco Pré-histórico"
                ]
            },
            {
                nome: "Peso da Régua",
                slug: "peso-da-regua",
                populacao: 17000,
                area: 95,
                freguesias: 11,
                cpPrefix: "5050",
                descricao: "Capital do Douro Vinhateiro e porta de entrada para a Região Demarcada do Douro.",
                notaveis: [
                    "Museu do Douro",
                    "Região Demarcada do Douro",
                    "Comboio Histórico do Douro"
                ]
            },
            {
                nome: "Ribeira de Pena",
                slug: "ribeira-de-pena",
                populacao: 7000,
                area: 221,
                freguesias: 10,
                cpPrefix: "4850",
                descricao: "Município minhoto com tradição têxtil e paisagens da Serra de Santa Bárbara.",
                notaveis: [
                    "Serra de Santa Bárbara",
                    "Rio Tâmega"
                ]
            },
            {
                nome: "Sabrosa",
                slug: "sabrosa",
                populacao: 7000,
                area: 198,
                freguesias: 13,
                cpPrefix: "5060",
                descricao: "Terra natal de Fernão de Magalhães, o primeiro a circum-navegar o globo terrestre.",
                notaveis: [
                    "Fernão de Magalhães",
                    "Douro Vinhateiro",
                    "Quinta do Crasto"
                ]
            },
            {
                nome: "Santa Marta de Penaguião",
                slug: "santa-marta-de-penaguiao",
                populacao: 7500,
                area: 68,
                freguesias: 10,
                cpPrefix: "5030",
                descricao: "Município do Douro com forte produção de vinho e a Rota do Vinho do Porto.",
                notaveis: [
                    "Rota do Vinho do Porto",
                    "Rio Corgo"
                ]
            },
            {
                nome: "Valpaços",
                slug: "valpacos",
                populacao: 17000,
                area: 550,
                freguesias: 29,
                cpPrefix: "5430",
                descricao: "Município transmontano com produção de fumeiro e produtos biológicos.",
                notaveis: [
                    "Fumeiro de Valpaços",
                    "Serra de Bornes"
                ]
            },
            {
                nome: "Vila Pouca de Aguiar",
                slug: "vila-pouca-de-aguiar",
                populacao: 13000,
                area: 440,
                freguesias: 21,
                cpPrefix: "5450",
                descricao: "Município serrano com as Termas de Pedras Salgadas e pinheiro manso.",
                notaveis: [
                    "Termas de Pedras Salgadas",
                    "Serra do Alvão"
                ]
            },
            {
                nome: "Vila Real",
                slug: "vila-real",
                populacao: 52000,
                area: 379,
                freguesias: 20,
                cpPrefix: "5000",
                descricao: "Capital de Trás-os-Montes, com a Casa de Mateus e a produção de Mateus Rosé.",
                notaveis: [
                    "Solar de Mateus",
                    "Parque Natural do Alvão",
                    "UTAD"
                ]
            }
        ]
    },
    {
        nome: "Viseu",
        slug: "viseu",
        populacao: 377653,
        area: 5007,
        capital: "Viseu",
        concelhos: [
            {
                nome: "Armamar",
                slug: "armamar",
                populacao: 6500,
                area: 118,
                freguesias: 15,
                cpPrefix: "5110",
                descricao: "Município do Douro com produção de vinho e Aguardente Velha de Armamar.",
                notaveis: [
                    "Douro Vinhateiro",
                    "Aguardente de Armamar"
                ]
            },
            {
                nome: "Carregal do Sal",
                slug: "carregal-do-sal",
                populacao: 10000,
                area: 113,
                freguesias: 7,
                cpPrefix: "3430",
                descricao: "Município da Beira Alta com tradição vinícola e artesanato local.",
                notaveis: [
                    "Rio Dão",
                    "Vinhos do Dão"
                ]
            },
            {
                nome: "Castro Daire",
                slug: "castro-daire",
                populacao: 16000,
                area: 338,
                freguesias: 19,
                cpPrefix: "3600",
                descricao: "Município serrano da Beira Alta com paisagens do Rio Paiva.",
                notaveis: [
                    "Rio Paiva",
                    "Serra de Montemuro"
                ]
            },
            {
                nome: "Cinfães",
                slug: "cinfaes",
                populacao: 20000,
                area: 245,
                freguesias: 17,
                cpPrefix: "4690",
                descricao: "Município com o Rio Douro e acessos ao Geopark Arouca e às Passadiços do Paiva.",
                notaveis: [
                    "Passadiços do Paiva",
                    "Rio Douro",
                    "Rio Paiva"
                ]
            },
            {
                nome: "Lamego",
                slug: "lamego",
                populacao: 26000,
                area: 165,
                freguesias: 19,
                cpPrefix: "5100",
                descricao: "Cidade episcopal com o famoso Santuário de Nossa Senhora dos Remédios e o vinho espumante.",
                notaveis: [
                    "Santuário de N.ª S.ª dos Remédios",
                    "Raposeira Espumante",
                    "Museu de Lamego"
                ]
            },
            {
                nome: "Mangualde",
                slug: "mangualde",
                populacao: 20000,
                area: 219,
                freguesias: 17,
                cpPrefix: "3530",
                descricao: "Município da Beira Alta com o Palácio dos Condes de Anadia e vinhos Dão.",
                notaveis: [
                    "Palácio dos Condes de Anadia",
                    "Vinhos do Dão"
                ]
            },
            {
                nome: "Moimenta da Beira",
                slug: "moimenta-da-beira",
                populacao: 11000,
                area: 221,
                freguesias: 18,
                cpPrefix: "3620",
                descricao: "Município serrano da Beira Alta com as ratoeiras e artesanato típico.",
                notaveis: [
                    "Serra do Leomil",
                    "Artesanato de Moimenta"
                ]
            },
            {
                nome: "Mortágua",
                slug: "mortagua",
                populacao: 10000,
                area: 254,
                freguesias: 9,
                cpPrefix: "3450",
                descricao: "Município com o Parque da Aguieira e desportos aquáticos.",
                notaveis: [
                    "Parque da Aguieira",
                    "Barragem de Mortágua"
                ]
            },
            {
                nome: "Nelas",
                slug: "nelas",
                populacao: 14000,
                area: 124,
                freguesias: 7,
                cpPrefix: "3520",
                descricao: "Município do Dão com produção vinícola e o famoso pão de ló de Nelas.",
                notaveis: [
                    "Vinhos do Dão",
                    "Pão-de-Ló de Nelas"
                ]
            },
            {
                nome: "Oliveira de Frades",
                slug: "oliveira-de-frades",
                populacao: 10000,
                area: 120,
                freguesias: 9,
                cpPrefix: "3680",
                descricao: "Município serrano com tradição industrial e turismo de natureza.",
                notaveis: [
                    "Serra de São Macário",
                    "Rio Vouga"
                ]
            },
            {
                nome: "Penalva do Castelo",
                slug: "penalva-do-castelo",
                populacao: 8000,
                area: 130,
                freguesias: 12,
                cpPrefix: "3550",
                descricao: "Município da Beira Alta com o castelo medieval e paisagens agrícolas.",
                notaveis: [
                    "Castelo de Penalva",
                    "Vinhos do Dão"
                ]
            },
            {
                nome: "Penedono",
                slug: "penedono",
                populacao: 3000,
                area: 131,
                freguesias: 7,
                cpPrefix: "3670",
                descricao: "Município serrano com o Castelo de Penedono e paisagens medievais.",
                notaveis: [
                    "Castelo de Penedono",
                    "Aldeia histórica de Penedono"
                ]
            },
            {
                nome: "Resende",
                slug: "resende",
                populacao: 12000,
                area: 126,
                freguesias: 13,
                cpPrefix: "4660",
                descricao: "Município do Douro com produção de vinho e as termas de Caldas de Aregos.",
                notaveis: [
                    "Termas de Caldas de Aregos",
                    "Douro Vinhateiro"
                ]
            },
            {
                nome: "Santa Comba Dão",
                slug: "santa-comba-dao",
                populacao: 11000,
                area: 112,
                freguesias: 7,
                cpPrefix: "3440",
                descricao: "Município ribeirinho do Dão com forte tradição industrial têxtil.",
                notaveis: [
                    "Rio Dão",
                    "Confluência Dão-Mondego"
                ]
            },
            {
                nome: "São João da Pesqueira",
                slug: "sao-joao-da-pesqueira",
                populacao: 7500,
                area: 264,
                freguesias: 14,
                cpPrefix: "5130",
                descricao: "Principal produtor de vinho do Porto branco e centro do Douro Vinhateiro.",
                notaveis: [
                    "Solar da Quinta das Carvalhas",
                    "Douro Vinhateiro",
                    "Miradouro de S. Salvador do Mundo"
                ]
            },
            {
                nome: "São Pedro do Sul",
                slug: "sao-pedro-do-sul",
                populacao: 18000,
                area: 349,
                freguesias: 18,
                cpPrefix: "3660",
                descricao: "Famosa pelas Termas de S. Pedro do Sul, as mais frequentadas de Portugal.",
                notaveis: [
                    "Termas de S. Pedro do Sul",
                    "Rio Sul",
                    "Serra de São Macário"
                ]
            },
            {
                nome: "Sátão",
                slug: "satao",
                populacao: 12000,
                area: 204,
                freguesias: 16,
                cpPrefix: "3560",
                descricao: "Município da Beira Alta com tradição em leitão e gastronomia regional.",
                notaveis: [
                    "Leitão do Sátão",
                    "Serra da Lapa"
                ]
            },
            {
                nome: "Sernancelhe",
                slug: "sernancelhe",
                populacao: 6000,
                area: 226,
                freguesias: 13,
                cpPrefix: "3640",
                descricao: "Município serrano com forte tradição na produção de castanha e queijo.",
                notaveis: [
                    "Serra de Sernancelhe",
                    "Castanha de Sernancelhe"
                ]
            },
            {
                nome: "Tabuaço",
                slug: "tabuaco",
                populacao: 7000,
                area: 142,
                freguesias: 13,
                cpPrefix: "5120",
                descricao: "Município do Douro com produção de espumante e vinho do Porto.",
                notaveis: [
                    "Raposeira Espumante",
                    "Douro Vinhateiro"
                ]
            },
            {
                nome: "Tarouca",
                slug: "tarouca",
                populacao: 8000,
                area: 99,
                freguesias: 9,
                cpPrefix: "3610",
                descricao: "Município com o Mosteiro de Salzedas e tradições medievais da Beira Alta.",
                notaveis: [
                    "Mosteiro de Salzedas",
                    "Rio Varosa"
                ]
            },
            {
                nome: "Tondela",
                slug: "tondela",
                populacao: 29000,
                area: 371,
                freguesias: 24,
                cpPrefix: "3460",
                descricao: "Município serrano com forte indústria têxtil e a famosa fraga da Pena.",
                notaveis: [
                    "Fraga da Pena",
                    "Serra de Santa Helena"
                ]
            },
            {
                nome: "Vila Nova de Paiva",
                slug: "vila-nova-de-paiva",
                populacao: 5500,
                area: 164,
                freguesias: 8,
                cpPrefix: "3630",
                descricao: "Município serrano com tradição em granito e produtos serranos.",
                notaveis: [
                    "Serra da Lapa",
                    "Rio Paiva"
                ]
            },
            {
                nome: "Viseu",
                slug: "viseu",
                populacao: 100000,
                area: 507,
                freguesias: 34,
                cpPrefix: "3500",
                descricao: "Capital da Beira Alta, cidade medieval com a Sé Catedral, Museu Grão Vasco e vinhos Dão.",
                notaveis: [
                    "Sé Catedral de Viseu",
                    "Museu Grão Vasco",
                    "Adro da Sé",
                    "Vinhos do Dão"
                ]
            },
            {
                nome: "Vouzela",
                slug: "vouzela",
                populacao: 9000,
                area: 152,
                freguesias: 14,
                cpPrefix: "3670",
                descricao: "Município do Vale do Vouga com forte tradição têxtil e artesanato.",
                notaveis: [
                    "Rio Vouga",
                    "Termas de Vouzela"
                ]
            }
        ]
    },
    {
        nome: "Portalegre",
        slug: "portalegre",
        populacao: 118506,
        area: 6065,
        capital: "Portalegre",
        concelhos: [
            {
                nome: "Alter do Chão",
                slug: "alter-do-chao",
                populacao: 3500,
                area: 359,
                freguesias: 4,
                cpPrefix: "7440",
                descricao: "Terra do cavalo lusitano, com a real Coudelaria de Alter, fundada em 1748.",
                notaveis: [
                    "Coudelaria de Alter",
                    "Castelo de Alter do Chão"
                ]
            },
            {
                nome: "Arronches",
                slug: "arronches",
                populacao: 3000,
                area: 260,
                freguesias: 3,
                cpPrefix: "7340",
                descricao: "Município fronteiriço do Alto Alentejo com forte tradição histórica.",
                notaveis: [
                    "Castelo de Arronches",
                    "Fronteira com Espanha"
                ]
            },
            {
                nome: "Avis",
                slug: "avis",
                populacao: 4500,
                area: 602,
                freguesias: 5,
                cpPrefix: "7480",
                descricao: "Município alentejano com a Barragem de Maranhão e a Ordem de Avis.",
                notaveis: [
                    "Barragem de Maranhão",
                    "Convento de Avis"
                ]
            },
            {
                nome: "Campo Maior",
                slug: "campo-maior",
                populacao: 8500,
                area: 234,
                freguesias: 3,
                cpPrefix: "7370",
                descricao: "Cidade do café Delta e das flores de papel colorido, perto da fronteira espanhola.",
                notaveis: [
                    "Café Delta",
                    "Festas das Flores",
                    "Castelo de Campo Maior"
                ]
            },
            {
                nome: "Castelo de Vide",
                slug: "castelo-de-vide",
                populacao: 3500,
                area: 267,
                freguesias: 4,
                cpPrefix: "7320",
                descricao: "Um das mais belas vilas medievais de Portugal com judaria medieval e castelo.",
                notaveis: [
                    "Judaria de Castelo de Vide",
                    "Castelo Medieval",
                    "Fonte da Vila"
                ]
            },
            {
                nome: "Crato",
                slug: "crato",
                populacao: 3500,
                area: 394,
                freguesias: 5,
                cpPrefix: "7430",
                descricao: "Município do Grão-Priorado do Crato com forte herança medieval da Ordem dos Hospitalários.",
                notaveis: [
                    "Flor da Rosa",
                    "Priorado do Crato",
                    "Pousada Flor da Rosa"
                ]
            },
            {
                nome: "Elvas",
                slug: "elvas",
                populacao: 22000,
                area: 628,
                freguesias: 7,
                cpPrefix: "7350",
                descricao: "Maior praça-forte do mundo, com sistema de aquedutos e baluartes — Património UNESCO.",
                notaveis: [
                    "Muralhas Abaluartadas de Elvas",
                    "Aqueduto da Amoreira",
                    "Castelo de Elvas"
                ]
            },
            {
                nome: "Fronteira",
                slug: "fronteira",
                populacao: 3200,
                area: 163,
                freguesias: 3,
                cpPrefix: "7460",
                descricao: "Município alentejano com o Palácio de Fronteira e produção agrícola.",
                notaveis: [
                    "Palácio de Fronteira",
                    "Barragem do Pisão"
                ]
            },
            {
                nome: "Gavião",
                slug: "gaviao",
                populacao: 4500,
                area: 345,
                freguesias: 7,
                cpPrefix: "6040",
                descricao: "Município do Douro com a Central Nuclear de Ferrel e o Rio Tejo.",
                notaveis: [
                    "Rio Tejo",
                    "Portas de Ródão"
                ]
            },
            {
                nome: "Marvão",
                slug: "marvao",
                populacao: 3000,
                area: 156,
                freguesias: 4,
                cpPrefix: "7330",
                descricao: "Aldeia museu medieval a 862m, com vista de três países e o melhor castelo do Alentejo.",
                notaveis: [
                    "Castelo de Marvão",
                    "Serra de S. Mamede",
                    "Aldeia Medieval de Marvão"
                ]
            },
            {
                nome: "Monforte",
                slug: "monforte",
                populacao: 3200,
                area: 420,
                freguesias: 4,
                cpPrefix: "7450",
                descricao: "Município alentejano com a Tapada de Mafra e produção pecuária.",
                notaveis: [
                    "Herdade de Monforte",
                    "Castelo de Monforte"
                ]
            },
            {
                nome: "Nisa",
                slug: "nisa",
                populacao: 8000,
                area: 574,
                freguesias: 9,
                cpPrefix: "6050",
                descricao: "Município com a Barragem de Nisa e produção de queijo de Nisa DOP.",
                notaveis: [
                    "Queijo de Nisa DOP",
                    "Barragem de Nisa"
                ]
            },
            {
                nome: "Ponte de Sor",
                slug: "ponte-de-sor",
                populacao: 17000,
                area: 839,
                freguesias: 8,
                cpPrefix: "7400",
                descricao: "Município do Alentejo com forte produção de eucalipto e cortiça.",
                notaveis: [
                    "Rio Sor",
                    "Indústria de Cortiça"
                ]
            },
            {
                nome: "Portalegre",
                slug: "portalegre",
                populacao: 24000,
                area: 447,
                freguesias: 8,
                cpPrefix: "7300",
                descricao: "Capital do Alto Alentejo com a mais alta concentração de castelos medievais de Portugal.",
                notaveis: [
                    "Catedral de Portalegre",
                    "Museu da Tapeçaria",
                    "Serra de São Mamede"
                ]
            },
            {
                nome: "Sousel",
                slug: "sousel",
                populacao: 5000,
                area: 279,
                freguesias: 5,
                cpPrefix: "7470",
                descricao: "Município alentejano com forte tradição equestre e agrícola.",
                notaveis: [
                    "Herdade de Sousel",
                    "Coudelaria"
                ]
            }
        ]
    },
    {
        nome: "Guarda",
        slug: "guarda",
        populacao: 160939,
        area: 5518,
        capital: "Guarda",
        concelhos: [
            {
                nome: "Aguiar da Beira",
                slug: "aguiar-da-beira",
                populacao: 5000,
                area: 220,
                freguesias: 14,
                cpPrefix: "3570",
                descricao: "Município serrano da Beira Interior Norte com forte tradição ganadeira.",
                notaveis: [
                    "Serra do Leomil",
                    "Rio Dão"
                ]
            },
            {
                nome: "Almeida",
                slug: "almeida",
                populacao: 7000,
                area: 519,
                freguesias: 22,
                cpPrefix: "6350",
                descricao: "Praça-forte abaluartada fronteiriça com Espanha, palco das Guerras Peninsulares.",
                notaveis: [
                    "Muralhas de Almeida",
                    "Fronteira com Espanha",
                    "Líneas do Wellington"
                ]
            },
            {
                nome: "Celorico da Beira",
                slug: "celorico-da-beira",
                populacao: 7500,
                area: 249,
                freguesias: 17,
                cpPrefix: "6360",
                descricao: "Município da Beira Interior com o Castelo de Celorico e o queijo da Serra.",
                notaveis: [
                    "Castelo de Celorico",
                    "Queijo Serra da Estrela DOP"
                ]
            },
            {
                nome: "Figueira de Castelo Rodrigo",
                slug: "figueira-de-castelo-rodrigo",
                populacao: 6500,
                area: 511,
                freguesias: 14,
                cpPrefix: "6440",
                descricao: "Município fronteiriço com Espanha e a Serra das Mesas.",
                notaveis: [
                    "Castelo Rodrigo",
                    "Serra das Mesas"
                ]
            },
            {
                nome: "Fornos de Algodres",
                slug: "fornos-de-algodres",
                populacao: 5000,
                area: 132,
                freguesias: 11,
                cpPrefix: "3570",
                descricao: "Município da Beira Alta com tradição pastoril e queijo da Serra da Estrela.",
                notaveis: [
                    "Serra da Estrela",
                    "Queijo da Serra"
                ]
            },
            {
                nome: "Gouveia",
                slug: "gouveia",
                populacao: 15000,
                area: 300,
                freguesias: 22,
                cpPrefix: "6290",
                descricao: "Porta da Serra da Estrela, município com tradição têxtil e desportos de montanha.",
                notaveis: [
                    "Serra da Estrela",
                    "Museu de Arte Moderna de Gouveia",
                    "Estância de Ski"
                ]
            },
            {
                nome: "Guarda",
                slug: "guarda",
                populacao: 42000,
                area: 712,
                freguesias: 43,
                cpPrefix: "6300",
                descricao: "A mais alta cidade de Portugal a 1056m de altitude, na encosta da Serra da Estrela.",
                notaveis: [
                    "Catedral da Guarda",
                    "Torre de Menagem",
                    "Serra da Estrela"
                ]
            },
            {
                nome: "Manteigas",
                slug: "manteigas",
                populacao: 3500,
                area: 122,
                freguesias: 4,
                cpPrefix: "6260",
                descricao: "Vale glaciar da Serra da Estrela, com a Torre (1993m, o ponto mais alto de Portugal continental).",
                notaveis: [
                    "Torre — ponto mais alto de Portugal",
                    "Vale do Zêzere glaciar",
                    "Termas de Manteigas"
                ]
            },
            {
                nome: "Mêda",
                slug: "meda",
                populacao: 5500,
                area: 318,
                freguesias: 13,
                cpPrefix: "6430",
                descricao: "Município transmontano com o Castelo de Mêda e tradição amêndoa.",
                notaveis: [
                    "Castelo de Mêda",
                    "Amendoal em flor"
                ]
            },
            {
                nome: "Pinhel",
                slug: "pinhel",
                populacao: 9000,
                area: 485,
                freguesias: 22,
                cpPrefix: "6400",
                descricao: "Municipio fronteiriço com Espanha com castelo medieval e tradição vinícola.",
                notaveis: [
                    "Castelo de Pinhel",
                    "Douro Vinhateiro"
                ]
            },
            {
                nome: "Sabugal",
                slug: "sabugal",
                populacao: 12000,
                area: 822,
                freguesias: 36,
                cpPrefix: "6320",
                descricao: "Município fronteiriço com Espanha com castelo medieval único — uma torre pentagonal.",
                notaveis: [
                    "Castelo do Sabugal (torre pentagonal)",
                    "Aldeias Históricas de Portugal"
                ]
            },
            {
                nome: "Seia",
                slug: "seia",
                populacao: 26000,
                area: 437,
                freguesias: 26,
                cpPrefix: "6270",
                descricao: "Porta principal da Serra da Estrela, com o Museu do Brinquedo e estância de ski.",
                notaveis: [
                    "Serra da Estrela",
                    "Museu do Brinquedo",
                    "Queijo Serra da Estrela DOP"
                ]
            },
            {
                nome: "Trancoso",
                slug: "trancoso",
                populacao: 10000,
                area: 363,
                freguesias: 19,
                cpPrefix: "6420",
                descricao: "Cidade medieval amuralhada, terra natal do adivinho Bandarra.",
                notaveis: [
                    "Muralhas de Trancoso",
                    "Castelo de Trancoso",
                    "Bandarra"
                ]
            },
            {
                nome: "Vila Nova de Foz Côa",
                slug: "vila-nova-de-foz-coa",
                populacao: 7000,
                area: 397,
                freguesias: 15,
                cpPrefix: "5150",
                descricao: "Lar do Parque Arqueológico do Vale do Côa, arte rupestre do Paleolítico — Património UNESCO.",
                notaveis: [
                    "Arte Rupestre do Vale do Côa",
                    "Museu do Côa",
                    "Parque Arqueológico"
                ]
            }
        ]
    }
];
function getDistrito(slug) {
    return portugal.find((d)=>d.slug === slug);
}
function getConcelho(distritoSlug, concelhoSlug) {
    const d = getDistrito(distritoSlug);
    return d?.concelhos.find((c)=>c.slug === concelhoSlug);
}
function getAllConcelhos() {
    return portugal.flatMap((d)=>d.concelhos.map((c)=>({
                ...c,
                distritoSlug: d.slug,
                distritoNome: d.nome
            })));
}
}}),
"[project]/src/app/localidades/[distrito]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DistritoPage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Breadcrumbs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AdSlot.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FAQ.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$portugal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/portugal.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$portugal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portugal"].map((d)=>({
            distrito: d.slug
        }));
}
async function generateMetadata({ params }) {
    const { distrito } = await params;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$portugal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDistrito"])(distrito);
    if (!data) return {
        title: "Distrito não encontrado"
    };
    return {
        title: `Distrito de ${data.nome} — ${data.concelhos.length} Concelhos e Códigos Postais`,
        description: `Informação completa sobre o Distrito de ${data.nome}: ${data.concelhos.length} concelhos, ${data.populacao.toLocaleString("pt-PT")} habitantes e ${data.area.toLocaleString("pt-PT")} km².`,
        alternates: {
            canonical: `/localidades/${distrito}`
        }
    };
}
const faqBase = (nome, concelhos, pop)=>[
        {
            question: `Quantos concelhos tem o Distrito de ${nome}?`,
            answer: `O Distrito de ${nome} tem ${concelhos} concelhos.`
        },
        {
            question: `Qual é a população do Distrito de ${nome}?`,
            answer: `O Distrito de ${nome} tem aproximadamente ${pop} habitantes, segundo os últimos censos.`
        },
        {
            question: `Como pesquisar o código postal de uma localidade no Distrito de ${nome}?`,
            answer: `Utilize a ferramenta de pesquisa de código postal do Portugal Prático. Pode pesquisar por nome de rua, localidade ou concelho dentro do Distrito de ${nome}.`
        }
    ];
async function DistritoPage({ params }) {
    const { distrito } = await params;
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$portugal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDistrito"])(distrito);
    if (!data) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const totalFreguesias = data.concelhos.reduce((s, c)=>s + c.freguesias, 0);
    const popFormatted = data.populacao.toLocaleString("pt-PT");
    const schema = {
        "@context": "https://schema.org",
        "@type": "AdministrativeArea",
        name: `Distrito de ${data.nome}`,
        addressCountry: "PT",
        description: `Distrito de ${data.nome}, Portugal. ${data.concelhos.length} concelhos, ${popFormatted} habitantes.`,
        containsPlace: data.concelhos.map((c)=>({
                "@type": "AdministrativeArea",
                name: c.nome,
                url: `https://portugalpratico.pt/localidades/${distrito}/${c.slug}`
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-4 sm:px-6 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        crumbs: [
                            {
                                label: "Início",
                                href: "/"
                            },
                            {
                                label: "Localidades",
                                href: "/localidades"
                            },
                            {
                                label: `Distrito de ${data.nome}`
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900 mb-3",
                                children: [
                                    "Distrito de ",
                                    data.nome
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                        label: "Concelhos",
                                        value: data.concelhos.length.toString()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                        label: "Freguesias",
                                        value: totalFreguesias.toLocaleString("pt-PT")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                        label: "População",
                                        value: popFormatted
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                        label: "Área",
                                        value: `${data.area.toLocaleString("pt-PT")} km²`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                        label: "Capital",
                                        value: data.capital
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        format: "horizontal",
                        className: "mb-8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-title mb-5",
                                children: [
                                    "Concelhos do Distrito de ",
                                    data.nome
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
                                children: data.concelhos.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/localidades/${distrito}/${c.slug}`,
                                        className: "group bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-gray-900 group-hover:text-[#046A38] transition-colors truncate",
                                                            children: c.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-x-3 gap-y-0.5 mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: [
                                                                        c.populacao.toLocaleString("pt-PT"),
                                                                        " hab."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: [
                                                                        c.area,
                                                                        " km²"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: [
                                                                        c.freguesias,
                                                                        " freg."
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2",
                                                            children: c.descricao
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-gray-300 group-hover:text-[#046A38] transition-colors shrink-0 mt-0.5",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 5l7 7-7 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    }, c.slug, false, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-green-50 border border-green-100 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-gray-900 mb-1",
                                        children: [
                                            "Pesquisar Código Postal no Distrito de ",
                                            data.nome
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "Encontre qualquer código postal de ",
                                            data.nome,
                                            " por rua, localidade ou código."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/codigo-postal?q=${encodeURIComponent(data.nome)}`,
                                className: "btn-primary shrink-0",
                                children: "Ver Códigos Postais"
                            }, void 0, false, {
                                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        format: "horizontal",
                        className: "mb-8"
                    }, void 0, false, {
                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        items: faqBase(data.nome, data.concelhos.length, popFormatted)
                    }, void 0, false, {
                        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function Stat({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-100 rounded-xl px-4 py-2.5 text-center shadow-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400 mb-0.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-bold text-gray-900 text-sm",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/localidades/[distrito]/page.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/localidades/[distrito]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/localidades/[distrito]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_87d6822c._.js.map