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
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/logo_horizontal.png"
                alt="Portugal Prático"
                width={238}
                height={119}
                className="h-13 w-auto mb-3"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Ferramentas úteis para o dia a dia em Portugal. Rápido, simples e gratuito.
            </p>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Ferramentas</h3>
            <ul className="space-y-2">
              {links.ferramentas.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-[#046A38] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Simuladores */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Simuladores</h3>
            <ul className="space-y-2">
              {links.simuladores.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-[#046A38] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Localidades */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Distritos</h3>
            <ul className="space-y-2">
              {links.localidades.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-600 hover:text-[#046A38] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Portugal Prático. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidade" className="text-xs text-gray-400 hover:text-gray-600">Privacidade</Link>
            <Link href="/termos" className="text-xs text-gray-400 hover:text-gray-600">Termos</Link>
            <Link href="/contacto" className="text-xs text-gray-400 hover:text-gray-600">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
