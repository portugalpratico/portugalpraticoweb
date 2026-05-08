import Link from "next/link";
import Image from "next/image";

const links = {
  ferramentas: [
    { label: "Código Postal", href: "/codigo-postal" },
    { label: "Validar NIF", href: "/nif" },
    { label: "Validar IBAN", href: "/iban" },
    { label: "Feriados", href: "/feriados" },
    { label: "Localidades", href: "/localidades" },
  ],
  simuladores: [
    { label: "Salário Líquido", href: "/simuladores/salario-liquido" },
    { label: "Calculadora IVA", href: "/simuladores/iva" },
    { label: "Juros Compostos", href: "/simuladores/juros-compostos" },
    { label: "Crédito Habitação", href: "/simuladores/credito-habitacao" },
  ],
  localidades: [
    { label: "Lisboa", href: "/localidades/lisboa" },
    { label: "Porto", href: "/localidades/porto" },
    { label: "Braga", href: "/localidades/braga" },
    { label: "Aveiro", href: "/localidades/aveiro" },
    { label: "Coimbra", href: "/localidades/coimbra" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/">
              <Image src="/logo_horizontal.png" alt="Portugal Prático" width={238} height={119} className="h-13 w-auto mb-3 dark:bg-gray-300 dark:rounded-[15px]" />
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Ferramentas úteis para o dia a dia em Portugal. Rápido, simples e gratuito.
            </p>
          </div>

          {(["ferramentas", "simuladores", "localidades"] as const).map((key) => (
            <div key={key}>
              <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                {key === "ferramentas" ? "Ferramentas" : key === "simuladores" ? "Simuladores" : "Distritos"}
              </h3>
              <ul className="space-y-2">
                {links[key].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#046A38] dark:hover:text-green-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Portugal Prático. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            {[["Privacidade", "/privacidade"], ["Termos", "/termos"], ["Contacto", "/contacto"]].map(([l, h]) => (
              <Link key={h} href={h} className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
