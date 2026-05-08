import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://portugalpratico.pt"}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-gray-300">/</span>}
            {c.href && i < crumbs.length - 1 ? (
              <Link href={c.href} className="hover:text-[#046A38] transition-colors">{c.label}</Link>
            ) : (
              <span className="text-gray-700 font-medium">{c.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
