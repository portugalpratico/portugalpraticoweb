import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.portugalpratico.pt";

const distritos = [
  "aveiro", "beja", "braga", "braganca", "castelo-branco", "coimbra",
  "evora", "faro", "guarda", "leiria", "lisboa", "portalegre", "porto",
  "santarem", "setubal", "viana-do-castelo", "vila-real", "viseu", "acores", "madeira",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { url: siteUrl, priority: 1.0, changeFrequency: "daily" as const, lastModified: now },
    { url: `${siteUrl}/codigo-postal`, priority: 0.9, changeFrequency: "weekly" as const, lastModified: now },
    { url: `${siteUrl}/simuladores`, priority: 0.9, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/simuladores/salario-liquido`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/simuladores/iva`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/simuladores/juros-compostos`, priority: 0.7, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/simuladores/credito-habitacao`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/nif`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/iban`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/feriados`, priority: 0.8, changeFrequency: "yearly" as const, lastModified: now },
    { url: `${siteUrl}/localidades`, priority: 0.8, changeFrequency: "monthly" as const, lastModified: now },
    { url: `${siteUrl}/noticias`, priority: 0.8, changeFrequency: "hourly" as const, lastModified: now },
  ];

  const distritoPages = distritos.map((d) => ({
    url: `${siteUrl}/localidades/${d}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [...staticPages, ...distritoPages];
}
