import type { Metadata } from "next";
import { Suspense } from "react";
import CodigoPostalSearch from "./CodigoPostalSearch";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pesquisa de Código Postal — Todos os Códigos Postais de Portugal",
  description:
    "Pesquise qualquer código postal de Portugal por rua, localidade ou código. Base de dados completa e atualizada de todos os CTT.",
  alternates: { canonical: "/codigo-postal" },
};

const faqs = [
  {
    question: "Como é composto um código postal português?",
    answer: "Um código postal português tem 7 dígitos separados por um traço: os primeiros 4 identificam a zona e os últimos 3 a sub-zona. Ex: 1000-001.",
  },
  {
    question: "Quantos códigos postais existem em Portugal?",
    answer: "Existem mais de 300.000 códigos postais em Portugal, cobrindo ruas, localidades e apartados em todo o país e ilhas.",
  },
  {
    question: "Os códigos postais são geridos pelos CTT?",
    answer: "Sim. Os Correios de Portugal (CTT) são responsáveis pela atribuição e manutenção dos códigos postais em Portugal.",
  },
  {
    question: "O que significa o CP4 e o CP3?",
    answer: "CP4 é a parte principal do código postal (4 dígitos) que identifica a área de distribuição. CP3 (3 dígitos após o traço) identifica a rota ou troço específico.",
  },
];

const popularCities = [
  "Lisboa", "Porto", "Braga", "Aveiro", "Coimbra", "Faro", "Setúbal",
  "Leiria", "Viseu", "Évora", "Beja", "Santarém",
];

export default function CodigoPostalPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "Código Postal" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Pesquisa de Código Postal</h1>
        <p className="text-gray-500 dark:text-gray-400">Encontre qualquer código postal português por rua, localidade ou código.</p>
      </div>

      <Suspense fallback={<div className="card animate-pulse h-20" />}>
        <CodigoPostalSearch />
      </Suspense>

      <AdSlot format="horizontal" className="my-8" />

      {/* Popular cities */}
      <section className="mb-8">
        <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Pesquisas populares</h2>
        <div className="flex flex-wrap gap-2">
          {popularCities.map((city) => (
            <Link
              key={city}
              href={`/codigo-postal?q=${encodeURIComponent(city)}`}
              className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-[#046A38] hover:text-[#046A38] dark:hover:border-green-500 dark:hover:text-green-400 transition-colors"
            >
              Código postal {city}
            </Link>
          ))}
        </div>
      </section>

      <FAQ items={faqs} />
    </div>
  );
}
