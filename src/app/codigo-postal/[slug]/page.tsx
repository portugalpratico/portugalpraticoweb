import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    title: `Código Postal ${name} — Pesquisa de Códigos Postais`,
    description: `Pesquise e encontre os códigos postais de ${name}. Ruas, localidades e freguesias com código postal de ${name}.`,
    alternates: { canonical: `/codigo-postal/${slug}` },
  };
}

export default async function CodigoPostalCidadePage({ params }: Props) {
  const { slug } = await params;
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Código Postal", href: "/codigo-postal" },
          { label: name },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Código Postal {name}</h1>
        <p className="text-gray-500">Todos os códigos postais de {name} e arredores.</p>
      </div>

      <div className="card mb-6">
        <p className="text-sm text-gray-600">
          Para ver os códigos postais de <strong>{name}</strong>, utilize a pesquisa abaixo ou consulte a{" "}
          <Link href="/codigo-postal" className="text-[#046A38] hover:underline">
            ferramenta de pesquisa de código postal
          </Link>.
        </p>
      </div>

      <AdSlot format="horizontal" className="my-6" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name,
            addressCountry: "PT",
            description: `Códigos postais de ${name}, Portugal`,
          }),
        }}
      />
    </div>
  );
}
