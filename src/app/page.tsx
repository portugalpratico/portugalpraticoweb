import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import ToolCard from "@/components/ToolCard";
import AdSlot from "@/components/AdSlot";
import TrendingNews from "@/components/TrendingNews";
import {
  IconPostal,
  IconNif,
  IconIban,
  IconSalary,
  IconIva,
  IconCalendar,
  IconMap,
  IconInterest,
  IconHome,
} from "@/components/Icons";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const categories = [
  { label: "Códigos Postais", href: "/codigo-postal", icon: <IconPostal />, color: "bg-blue-50 text-blue-600" },
  { label: "Simuladores", href: "/simuladores", icon: <IconSalary />, color: "bg-green-50 text-[#046A38]" },
  { label: "NIF & IBAN", href: "/nif", icon: <IconNif />, color: "bg-purple-50 text-purple-600" },
  { label: "Localidades", href: "/localidades", icon: <IconMap />, color: "bg-orange-50 text-orange-600" },
  { label: "Feriados", href: "/feriados", icon: <IconCalendar />, color: "bg-red-50 text-[#DA291C]" },
];

const externalLinks = [
  {
    title: "Portal das Finanças",
    description: "Aceda ao portal da Autoridade Tributária para IRS, faturas e serviços fiscais.",
    href: "https://www.portaldasfinancas.gov.pt",
    logo: "/logos/financas.png",
    logoBg: "bg-white",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  {
    title: "Renovação de Autorização de Residência",
    description: "Portal da AIMA para pedidos e renovações de autorização de residência em Portugal.",
    href: "https://portal-renovacoes.aima.gov.pt/",
    logo: "/logos/aima.png",
    logoBg: "bg-white",
    color: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
  {
    title: "Segurança Social",
    description: "Consulte prestações, contribuições e serviços da Segurança Social portuguesa.",
    href: "https://www.seg-social.pt",
    logo: "/logos/seg-social.svg",
    logoBg: "bg-white",
    color: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
  {
    title: "e-Fatura",
    description: "Consulte e valide as suas faturas no portal e-Fatura das Finanças.",
    href: "https://faturas.portaldasfinancas.gov.pt",
    logo: "/logos/efatura.svg",
    logoBg: "bg-[#1a56a0]",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
];

const popularTools = [
  {
    title: "Simulador Salário Líquido",
    description: "Calcule o seu salário líquido a partir do bruto com os descontos de IRS e Segurança Social.",
    href: "/simuladores/salario-liquido",
    icon: <IconSalary />,
    badge: "Popular",
  },
  {
    title: "Pesquisa Código Postal",
    description: "Encontre qualquer código postal português por rua, localidade ou código.",
    href: "/codigo-postal",
    icon: <IconPostal />,
  },
  {
    title: "Validar NIF",
    description: "Verifique se um Número de Identificação Fiscal português é válido.",
    href: "/nif",
    icon: <IconNif />,
  },
  {
    title: "Calculadora IVA",
    description: "Calcule rapidamente o valor com ou sem IVA nas taxas de 6%, 13% e 23%.",
    href: "/simuladores/iva",
    icon: <IconIva />,
    badge: "Rápido",
    badgeColor: "red" as const,
  },
  {
    title: "Validar IBAN",
    description: "Verifique se um IBAN português ou internacional é válido.",
    href: "/iban",
    icon: <IconIban />,
  },
  {
    title: "Simulador Crédito Habitação",
    description: "Simule a prestação mensal do seu crédito habitação.",
    href: "/simuladores/credito-habitacao",
    icon: <IconHome />,
  },
  {
    title: "Feriados Nacionais",
    description: "Consulte os feriados nacionais e municipais de Portugal.",
    href: "/feriados",
    icon: <IconCalendar />,
  },
  {
    title: "Juros Compostos",
    description: "Calcule o crescimento do seu investimento com juros compostos.",
    href: "/simuladores/juros-compostos",
    icon: <IconInterest />,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo_white.png"
                alt="Portugal Prático"
                width={827}
                height={422}
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 350px"
                className="h-28 sm:h-36 lg:h-44 w-auto drop-shadow-sm dark:hidden"
                priority
                fetchPriority="high"
              />
              <Image
                src="/logo_dark.png"
                alt="Portugal Prático"
                width={827}
                height={396}
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 350px"
                className="h-28 sm:h-36 lg:h-44 w-auto drop-shadow-sm hidden dark:block"
                priority
                fetchPriority="high"
              />
            </div>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto">
              Pesquise códigos postais, valide NIF e IBAN, simule o seu salário e muito mais — grátis e sem registo.
            </p>

            {/* Quick search */}
            <form action="/codigo-postal" method="get" className="flex gap-3 max-w-xl mx-auto">
              <input
                type="search"
                name="q"
                placeholder="Pesquisar código postal, rua, localidade..."
                className="input-field flex-1 text-base"
                aria-label="Pesquisar código postal"
              />
              <button type="submit" className="btn-primary px-6 text-base">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Pesquisar
              </button>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              Ex: &quot;1000-001&quot;, &quot;Rua Augusta Lisboa&quot;, &quot;Porto&quot;
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Ad top */}
        <AdSlot format="horizontal" className="mb-10" />

        {/* Links Úteis */}
        <section className="mb-12">
          <h2 className="section-title mb-6">Links Úteis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {externalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {/* Logo area */}
                <div className={`w-full h-20 rounded-xl flex items-center justify-center overflow-hidden p-3 ${link.logoBg}`}>
                  <Image
                    src={link.logo}
                    alt={`Logo ${link.title}`}
                    width={200}
                    height={80}
                    className="max-h-full w-auto object-contain"
                    unoptimized
                  />
                </div>
                {/* Info */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 group-hover:text-[#046A38] dark:group-hover:text-green-400 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="section-title mb-6">Categorias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="flex flex-col items-center gap-2.5 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 text-center group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.color}`}>
                  {cat.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Popular tools */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title">Ferramentas Populares</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {popularTools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        </section>

        {/* Trending news */}
        <Suspense fallback={null}>
          <TrendingNews limit={6} />
        </Suspense>

        {/* Ad mid */}
        <AdSlot format="horizontal" className="mb-12" />

        {/* SEO text block */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Portugal Prático — O Seu Portal de Referência</h2>
          <div className="prose prose-sm text-gray-600 dark:text-gray-400 max-w-none space-y-3">
            <p>
              O <strong>Portugal Prático</strong> é o portal de ferramentas úteis para o dia a dia em Portugal.
              Disponibilizamos acesso rápido a informação essencial: desde a pesquisa de <strong>códigos postais</strong> de
              todas as localidades portuguesas, à validação de <strong>NIF</strong> e <strong>IBAN</strong>, passando
              por <strong>simuladores financeiros</strong> como o cálculo do salário líquido e a calculadora de IVA.
            </p>
            <p>
              Com uma base de dados atualizada de todas as <strong>freguesias, concelhos e distritos</strong> de Portugal
              continental e ilhas, o Portugal Prático é a referência online para quem precisa de informação geográfica
              e administrativa fiável. Consulte também os <strong>feriados nacionais</strong> e municipais de Portugal.
            </p>
            <p>
              Todas as ferramentas são gratuitas, sem necessidade de registo, e otimizadas para funcionar em qualquer
              dispositivo. O nosso compromisso é fornecer informação útil de forma simples, rápida e acessível a todos.
            </p>
          </div>
        </section>

        {/* Distritos quick links */}
        <section>
          <h2 className="section-title mb-4">Distritos de Portugal</h2>
          <div className="flex flex-wrap gap-2">
            {["Lisboa","Porto","Braga","Aveiro","Coimbra","Setúbal","Leiria","Faro","Viseu","Santarém","Évora","Beja","Viana do Castelo","Vila Real","Bragança","Guarda","Castelo Branco","Portalegre","Açores","Madeira"].map((d) => (
              <Link
                key={d}
                href={`/localidades/${d.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-[#046A38] hover:text-[#046A38] dark:hover:border-green-500 dark:hover:text-green-400 transition-colors"
              >
                {d}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
