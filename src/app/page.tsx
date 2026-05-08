import Link from "next/link";
import Image from "next/image";
import ToolCard from "@/components/ToolCard";
import AdSlot from "@/components/AdSlot";
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

const categories = [
  { label: "Códigos Postais", href: "/codigo-postal", icon: <IconPostal />, color: "bg-blue-50 text-blue-600" },
  { label: "Simuladores", href: "/simuladores", icon: <IconSalary />, color: "bg-green-50 text-[#046A38]" },
  { label: "NIF & IBAN", href: "/nif", icon: <IconNif />, color: "bg-purple-50 text-purple-600" },
  { label: "Localidades", href: "/localidades", icon: <IconMap />, color: "bg-orange-50 text-orange-600" },
  { label: "Feriados", href: "/feriados", icon: <IconCalendar />, color: "bg-red-50 text-[#DA291C]" },
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
                src="/logo.png"
                alt="Portugal Prático"
                width={480}
                height={160}
                className="h-28 sm:h-36 lg:h-44 w-auto drop-shadow-sm dark:bg-gray-300 dark:rounded-[15px]"
                priority
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

            <p className="text-xs text-gray-400 dark:text-gray-500 mt-3">
              Ex: &quot;1000-001&quot;, &quot;Rua Augusta Lisboa&quot;, &quot;Porto&quot;
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Ad top */}
        <AdSlot format="horizontal" className="mb-10" />

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
