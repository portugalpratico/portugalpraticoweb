import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import AdSlot from "@/components/AdSlot";
import FeriadosViewer from "./FeriadosViewer";

export const metadata: Metadata = {
  title: "Feriados Nacionais Portugal 2025, 2026 e 2027",
  description:
    "Lista completa dos feriados nacionais de Portugal para 2025, 2026 e 2027. Inclui feriados obrigatórios e tolerâncias de ponto.",
  alternates: { canonical: "/feriados" },
};

const feriados = {
  2025: [
    { data: "2025-01-01", nome: "Ano Novo", dia: "Quarta-feira" },
    { data: "2025-03-04", nome: "Carnaval", dia: "Terça-feira", facultativo: true },
    { data: "2025-04-18", nome: "Sexta-Feira Santa", dia: "Sexta-feira" },
    { data: "2025-04-20", nome: "Domingo de Páscoa", dia: "Domingo" },
    { data: "2025-04-25", nome: "Dia da Liberdade", dia: "Sexta-feira" },
    { data: "2025-05-01", nome: "Dia do Trabalhador", dia: "Quinta-feira" },
    { data: "2025-06-10", nome: "Dia de Portugal", dia: "Terça-feira" },
    { data: "2025-06-19", nome: "Corpo de Deus", dia: "Quinta-feira" },
    { data: "2025-08-15", nome: "Assunção de Nossa Senhora", dia: "Sexta-feira" },
    { data: "2025-10-05", nome: "Implantação da República", dia: "Domingo" },
    { data: "2025-11-01", nome: "Dia de Todos os Santos", dia: "Sábado" },
    { data: "2025-12-01", nome: "Restauração da Independência", dia: "Segunda-feira" },
    { data: "2025-12-08", nome: "Imaculada Conceição", dia: "Segunda-feira" },
    { data: "2025-12-25", nome: "Natal", dia: "Quinta-feira" },
  ],
  2026: [
    { data: "2026-01-01", nome: "Ano Novo", dia: "Quinta-feira" },
    { data: "2026-02-17", nome: "Carnaval", dia: "Terça-feira", facultativo: true },
    { data: "2026-04-03", nome: "Sexta-Feira Santa", dia: "Sexta-feira" },
    { data: "2026-04-05", nome: "Domingo de Páscoa", dia: "Domingo" },
    { data: "2026-04-25", nome: "Dia da Liberdade", dia: "Sábado" },
    { data: "2026-05-01", nome: "Dia do Trabalhador", dia: "Sexta-feira" },
    { data: "2026-06-04", nome: "Corpo de Deus", dia: "Quinta-feira" },
    { data: "2026-06-10", nome: "Dia de Portugal", dia: "Quarta-feira" },
    { data: "2026-08-15", nome: "Assunção de Nossa Senhora", dia: "Sábado" },
    { data: "2026-10-05", nome: "Implantação da República", dia: "Segunda-feira" },
    { data: "2026-11-01", nome: "Dia de Todos os Santos", dia: "Domingo" },
    { data: "2026-12-01", nome: "Restauração da Independência", dia: "Terça-feira" },
    { data: "2026-12-08", nome: "Imaculada Conceição", dia: "Terça-feira" },
    { data: "2026-12-25", nome: "Natal", dia: "Sexta-feira" },
  ],
  2027: [
    { data: "2027-01-01", nome: "Ano Novo", dia: "Sexta-feira" },
    { data: "2027-02-09", nome: "Carnaval", dia: "Terça-feira", facultativo: true },
    { data: "2027-03-26", nome: "Sexta-Feira Santa", dia: "Sexta-feira" },
    { data: "2027-03-28", nome: "Domingo de Páscoa", dia: "Domingo" },
    { data: "2027-04-25", nome: "Dia da Liberdade", dia: "Domingo" },
    { data: "2027-05-01", nome: "Dia do Trabalhador", dia: "Sábado" },
    { data: "2027-05-27", nome: "Corpo de Deus", dia: "Quinta-feira" },
    { data: "2027-06-10", nome: "Dia de Portugal", dia: "Quinta-feira" },
    { data: "2027-08-15", nome: "Assunção de Nossa Senhora", dia: "Domingo" },
    { data: "2027-10-05", nome: "Implantação da República", dia: "Terça-feira" },
    { data: "2027-11-01", nome: "Dia de Todos os Santos", dia: "Segunda-feira" },
    { data: "2027-12-01", nome: "Restauração da Independência", dia: "Quarta-feira" },
    { data: "2027-12-08", nome: "Imaculada Conceição", dia: "Quarta-feira" },
    { data: "2027-12-25", nome: "Natal", dia: "Sábado" },
  ],
};

const faqs = [
  {
    question: "Quantos feriados nacionais tem Portugal?",
    answer: "Portugal tem 13 feriados nacionais obrigatórios. O Carnaval é facultativo (a entidade empregadora decide se é feriado).",
  },
  {
    question: "O que acontece quando um feriado cai ao fim de semana?",
    answer: "Em Portugal, quando um feriado cai ao sábado ou domingo, não existe compensação obrigatória com dia de descanso extra, exceto se o contrato coletivo de trabalho previr essa situação.",
  },
  {
    question: "Os municípios têm feriados próprios?",
    answer: "Sim. Cada município tem um feriado municipal, geralmente no dia do santo padroeiro. Por exemplo, Lisboa celebra Santo António a 13 de junho, e Porto celebra São João a 24 de junho.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Feriados Nacionais de Portugal 2026",
  itemListElement: feriados[2026].map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: f.nome,
    description: f.dia,
  })),
};

export default function FeriadosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "Feriados" }]} />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Feriados Nacionais de Portugal</h1>
          <p className="text-gray-500">Lista completa dos feriados obrigatórios por ano.</p>
        </div>

        <AdSlot format="horizontal" className="mb-8" />

        <FeriadosViewer feriados={feriados} />

        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </div>
    </>
  );
}
