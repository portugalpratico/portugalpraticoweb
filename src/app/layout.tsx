import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portugalpratico.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portugal Prático — Ferramentas Úteis para o Dia a Dia",
    template: "%s | Portugal Prático",
  },
  description:
    "Portal de ferramentas úteis para Portugal: pesquisa de códigos postais, validação de NIF e IBAN, simuladores financeiros, feriados e muito mais.",
  keywords: [
    "código postal", "NIF", "IBAN", "simulador salário", "feriados Portugal",
    "calculadora IVA", "localidades Portugal", "ferramentas Portugal",
  ],
  authors: [{ name: "Portugal Prático" }],
  creator: "Portugal Prático",
  publisher: "Portugal Prático",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Portugal Prático",
    title: "Portugal Prático — Ferramentas Úteis para o Dia a Dia",
    description:
      "Portal de ferramentas úteis para Portugal: códigos postais, NIF, IBAN, simuladores e feriados.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portugal Prático",
    description: "Ferramentas úteis para o dia a dia em Portugal.",
  },
  alternates: { canonical: siteUrl },
  verification: { google: "lHjXaJGY2veKkH11Ju0lGOn98HgkeQyt2cuFPANycG8" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8340172955044180"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Portugal Prático",
              url: siteUrl,
              description: "Portal de ferramentas úteis para Portugal",
              potentialAction: {
                "@type": "SearchAction",
                target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/codigo-postal?q={search_term_string}` },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
