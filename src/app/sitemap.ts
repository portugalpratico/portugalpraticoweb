import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portugalpratico.pt";

const distritos = [
  "aveiro", "beja", "braga", "braganca", "castelo-branco", "coimbra",
  "evora", "faro", "guarda", "leiria", "lisboa", "portalegre", "porto",
  "santarem", "setubal", "viana-do-castelo", "vila-real", "viseu", "acores", "madeira",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${siteUrl}/codigo-postal`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/simuladores`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/simuladores/salario-liquido`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/simuladores/iva`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/simuladores/juros-compostos`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/simuladores/credito-habitacao`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/nif`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/iban`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/feriados`, priority: 0.8, changeFrequency: "yearly" as const },
    { url: `${siteUrl}/localidades`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const distritoPages = distritos.map((d) => ({
    url: `${siteUrl}/localidades/${d}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const codigoPostalPages = [
    "lisboa", "porto", "braga", "aveiro", "coimbra", "faro", "setubal",
    "leiria", "viseu", "evora",
  ].map((c) => ({
    url: `${siteUrl}/codigo-postal/${c}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...distritoPages, ...codigoPostalPages];
}
