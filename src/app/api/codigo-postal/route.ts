import { NextRequest, NextResponse } from "next/server";

// Sample data — replace with Prisma DB query once database is populated
const sampleData = [
  { codigoCompleto: "1000-001", rua: "Rua do Comércio", localidade: "Lisboa", concelho: "Lisboa", distrito: "Lisboa" },
  { codigoCompleto: "1000-010", rua: "Praça do Comércio", localidade: "Lisboa", concelho: "Lisboa", distrito: "Lisboa" },
  { codigoCompleto: "1200-109", rua: "Rua Augusta", localidade: "Lisboa", concelho: "Lisboa", distrito: "Lisboa" },
  { codigoCompleto: "1100-150", rua: "Alfama", localidade: "Lisboa", concelho: "Lisboa", distrito: "Lisboa" },
  { codigoCompleto: "4000-001", rua: "Rua de Santa Catarina", localidade: "Porto", concelho: "Porto", distrito: "Porto" },
  { codigoCompleto: "4050-001", rua: "Avenida dos Aliados", localidade: "Porto", concelho: "Porto", distrito: "Porto" },
  { codigoCompleto: "3000-001", rua: "Rua Ferreira Borges", localidade: "Coimbra", concelho: "Coimbra", distrito: "Coimbra" },
  { codigoCompleto: "4700-001", rua: "Praça da República", localidade: "Braga", concelho: "Braga", distrito: "Braga" },
  { codigoCompleto: "2750-001", rua: "Avenida 25 de Abril", localidade: "Cascais", concelho: "Cascais", distrito: "Lisboa" },
  { codigoCompleto: "8000-001", rua: "Rua de Santo António", localidade: "Faro", concelho: "Faro", distrito: "Faro" },
  { codigoCompleto: "2900-001", rua: "Praça do Giraldo", localidade: "Setúbal", concelho: "Setúbal", distrito: "Setúbal" },
  { codigoCompleto: "7000-001", rua: "Praça do Giraldo", localidade: "Évora", concelho: "Évora", distrito: "Évora" },
  { codigoCompleto: "2400-001", rua: "Rua Dr. Correia Mateus", localidade: "Leiria", concelho: "Leiria", distrito: "Leiria" },
  { codigoCompleto: "3500-001", rua: "Rua Direita", localidade: "Viseu", concelho: "Viseu", distrito: "Viseu" },
];

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.toLowerCase().trim() ?? "";

  if (!q || q.length < 2) {
    return NextResponse.json({ error: "Query too short" }, { status: 400 });
  }

  // In production, this would be a Prisma query:
  // const results = await prisma.codigoPostal.findMany({
  //   where: {
  //     OR: [
  //       { codigoCompleto: { contains: q, mode: "insensitive" } },
  //       { rua: { contains: q, mode: "insensitive" } },
  //       { localidade: { contains: q, mode: "insensitive" } },
  //       { concelho: { contains: q, mode: "insensitive" } },
  //     ],
  //   },
  //   take: 20,
  // });

  const results = sampleData.filter(
    (d) =>
      d.codigoCompleto.toLowerCase().includes(q) ||
      (d.rua?.toLowerCase().includes(q)) ||
      d.localidade.toLowerCase().includes(q) ||
      d.concelho.toLowerCase().includes(q) ||
      d.distrito.toLowerCase().includes(q)
  );

  return NextResponse.json({ results, total: results.length });
}
