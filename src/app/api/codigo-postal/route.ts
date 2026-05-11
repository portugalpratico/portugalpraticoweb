import { NextRequest, NextResponse } from "next/server";
import { searchPostalCodes } from "@/lib/postalSearch";

export async function GET(req: NextRequest) {
  if (req.headers.get("x-api-source") !== "pp-web") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const q = req.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (!q || q.length < 2) {
    return NextResponse.json({ error: "Query too short" }, { status: 400 });
  }

  const start = Date.now();
  const results = searchPostalCodes(q, 50);
  const ms = Date.now() - start;

  return NextResponse.json({ results, total: results.length, ms });
}
