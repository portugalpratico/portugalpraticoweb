import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const distritos = [
  { nome: "Aveiro", slug: "aveiro", codigo: "01", populacao: 714200 },
  { nome: "Beja", slug: "beja", codigo: "02", populacao: 152758 },
  { nome: "Braga", slug: "braga", codigo: "03", populacao: 848185 },
  { nome: "Bragança", slug: "braganca", codigo: "04", populacao: 136252 },
  { nome: "Castelo Branco", slug: "castelo-branco", codigo: "05", populacao: 196264 },
  { nome: "Coimbra", slug: "coimbra", codigo: "06", populacao: 430104 },
  { nome: "Évora", slug: "evora", codigo: "07", populacao: 166726 },
  { nome: "Faro", slug: "faro", codigo: "08", populacao: 451006 },
  { nome: "Guarda", slug: "guarda", codigo: "09", populacao: 160939 },
  { nome: "Leiria", slug: "leiria", codigo: "10", populacao: 470930 },
  { nome: "Lisboa", slug: "lisboa", codigo: "11", populacao: 2250533 },
  { nome: "Portalegre", slug: "portalegre", codigo: "12", populacao: 118506 },
  { nome: "Porto", slug: "porto", codigo: "13", populacao: 1817174 },
  { nome: "Santarém", slug: "santarem", codigo: "14", populacao: 453638 },
  { nome: "Setúbal", slug: "setubal", codigo: "15", populacao: 851258 },
  { nome: "Viana do Castelo", slug: "viana-do-castelo", codigo: "16", populacao: 244836 },
  { nome: "Vila Real", slug: "vila-real", codigo: "17", populacao: 206661 },
  { nome: "Viseu", slug: "viseu", codigo: "18", populacao: 377653 },
  { nome: "Açores", slug: "acores", codigo: "20", populacao: 246772 },
  { nome: "Madeira", slug: "madeira", codigo: "30", populacao: 255082 },
];

async function main() {
  console.log("Seeding database...");

  for (const d of distritos) {
    await prisma.distrito.upsert({
      where: { slug: d.slug },
      update: {},
      create: d,
    });
  }

  const feriados2025 = [
    { nome: "Ano Novo", data: new Date("2025-01-01"), tipo: "nacional", ano: 2025 },
    { nome: "Carnaval", data: new Date("2025-03-04"), tipo: "nacional", ano: 2025 },
    { nome: "Sexta-Feira Santa", data: new Date("2025-04-18"), tipo: "nacional", ano: 2025 },
    { nome: "Páscoa", data: new Date("2025-04-20"), tipo: "nacional", ano: 2025 },
    { nome: "Dia da Liberdade", data: new Date("2025-04-25"), tipo: "nacional", ano: 2025 },
    { nome: "Dia do Trabalhador", data: new Date("2025-05-01"), tipo: "nacional", ano: 2025 },
    { nome: "Corpo de Deus", data: new Date("2025-06-19"), tipo: "nacional", ano: 2025 },
    { nome: "Dia de Portugal", data: new Date("2025-06-10"), tipo: "nacional", ano: 2025 },
    { nome: "Assunção de Nossa Senhora", data: new Date("2025-08-15"), tipo: "nacional", ano: 2025 },
    { nome: "Implantação da República", data: new Date("2025-10-05"), tipo: "nacional", ano: 2025 },
    { nome: "Todos os Santos", data: new Date("2025-11-01"), tipo: "nacional", ano: 2025 },
    { nome: "Restauração da Independência", data: new Date("2025-12-01"), tipo: "nacional", ano: 2025 },
    { nome: "Imaculada Conceição", data: new Date("2025-12-08"), tipo: "nacional", ano: 2025 },
    { nome: "Natal", data: new Date("2025-12-25"), tipo: "nacional", ano: 2025 },
  ];

  const feriados2026 = [
    { nome: "Ano Novo", data: new Date("2026-01-01"), tipo: "nacional", ano: 2026 },
    { nome: "Carnaval", data: new Date("2026-02-17"), tipo: "nacional", ano: 2026 },
    { nome: "Sexta-Feira Santa", data: new Date("2026-04-03"), tipo: "nacional", ano: 2026 },
    { nome: "Páscoa", data: new Date("2026-04-05"), tipo: "nacional", ano: 2026 },
    { nome: "Dia da Liberdade", data: new Date("2026-04-25"), tipo: "nacional", ano: 2026 },
    { nome: "Dia do Trabalhador", data: new Date("2026-05-01"), tipo: "nacional", ano: 2026 },
    { nome: "Dia de Portugal", data: new Date("2026-06-10"), tipo: "nacional", ano: 2026 },
    { nome: "Corpo de Deus", data: new Date("2026-06-04"), tipo: "nacional", ano: 2026 },
    { nome: "Assunção de Nossa Senhora", data: new Date("2026-08-15"), tipo: "nacional", ano: 2026 },
    { nome: "Implantação da República", data: new Date("2026-10-05"), tipo: "nacional", ano: 2026 },
    { nome: "Todos os Santos", data: new Date("2026-11-01"), tipo: "nacional", ano: 2026 },
    { nome: "Restauração da Independência", data: new Date("2026-12-01"), tipo: "nacional", ano: 2026 },
    { nome: "Imaculada Conceição", data: new Date("2026-12-08"), tipo: "nacional", ano: 2026 },
    { nome: "Natal", data: new Date("2026-12-25"), tipo: "nacional", ano: 2026 },
  ];

  for (const f of [...feriados2025, ...feriados2026]) {
    await prisma.feriado.upsert({
      where: { id: (await prisma.feriado.findFirst({ where: { nome: f.nome, ano: f.ano } }))?.id ?? 0 },
      update: {},
      create: f,
    });
  }

  console.log("Seed complete!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
