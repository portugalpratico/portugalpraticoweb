import type { Metadata } from "next";
import NifIbanTabs from "./NifIbanTabs";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Validar NIF e IBAN Português — Verificação Online Gratuita",
  description:
    "Valide gratuitamente o NIF (Número de Identificação Fiscal) e o IBAN português ou internacional. Ferramentas online rápidas e fiáveis.",
  alternates: { canonical: "/nif" },
};

export default function NifIbanPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs crumbs={[{ label: "Início", href: "/" }, { label: "NIF & IBAN" }]} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Validar NIF e IBAN</h1>
        <p className="text-gray-500 dark:text-gray-400">Verifique a validade de um NIF português ou de um IBAN nacional e internacional.</p>
      </div>

      <NifIbanTabs />
    </div>
  );
}
