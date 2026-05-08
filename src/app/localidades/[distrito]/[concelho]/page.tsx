import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

interface Props {
  params: Promise<{ distrito: string; concelho: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { distrito, concelho } = await params;
  const dName = distrito.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const cName = concelho.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title: `Concelho de ${cName} — ${dName} | Código Postal e Freguesias`,
    description: `Informação sobre o Concelho de ${cName} (Distrito de ${dName}): código postal, freguesias e população.`,
    alternates: { canonical: `/localidades/${distrito}/${concelho}` },
  };
}

export default async function ConcelhoPage({ params }: Props) {
  const { distrito, concelho } = await params;
  const dName = distrito.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const cName = concelho.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Localidades", href: "/localidades" },
          { label: dName, href: `/localidades/${distrito}` },
          { label: cName },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Concelho de {cName}</h1>
        <p className="text-gray-500">Distrito de {dName}</p>
      </div>

      <AdSlot format="horizontal" className="mb-6" />

      <div className="card mb-6">
        <p className="text-sm text-gray-600 mb-3">
          Pesquise os códigos postais do Concelho de <strong>{cName}</strong>:
        </p>
        <Link
          href={`/codigo-postal?q=${encodeURIComponent(cName)}`}
          className="btn-primary"
        >
          Ver Códigos Postais de {cName}
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AdministrativeArea",
            name: `Concelho de ${cName}`,
            containedInPlace: { "@type": "AdministrativeArea", name: `Distrito de ${dName}` },
            addressCountry: "PT",
          }),
        }}
      />
    </div>
  );
}
