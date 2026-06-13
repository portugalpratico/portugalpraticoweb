import type { Metadata } from "next";
import { fetchTrends, TrendItem, NewsItem } from "@/lib/trends";
import AdSlot from "@/components/AdSlot";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Notícias em Alta em Portugal",
  description:
    "Os temas mais pesquisados em Portugal hoje, com as notícias relacionadas. Atualizado automaticamente a partir do Google Trends.",
  alternates: { canonical: "/noticias" },
  openGraph: {
    title: "Notícias em Alta em Portugal",
    description: "Os temas mais pesquisados em Portugal hoje.",
  },
};

function TrafficBadge({ traffic }: { traffic: string }) {
  if (!traffic) return null;
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-100 dark:border-red-800 shrink-0">
      {traffic} pesquisas
    </span>
  );
}

function NewsArticle({ item }: { item: NewsItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-3 items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors group"
    >
      {item.picture ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.picture}
          alt=""
          className="w-16 h-12 object-cover rounded-lg shrink-0 bg-gray-100 dark:bg-gray-700"
          loading="lazy"
        />
      ) : (
        <div className="w-16 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 shrink-0 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-[#046A38] dark:group-hover:text-green-400 transition-colors">
          {item.title}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.source}</p>
      </div>
    </a>
  );
}

function TrendCard({ trend, rank }: { trend: TrendItem; rank: number }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
        <span className="text-lg font-bold text-gray-200 dark:text-gray-600 w-6 text-center shrink-0">
          {rank}
        </span>
        <TrafficBadge traffic={trend.traffic} />
        <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate flex-1">
          {trend.title}
        </h2>
      </div>
      <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
        {trend.newsItems.map((item) => (
          <NewsArticle key={item.url} item={item} />
        ))}
      </div>
    </div>
  );
}

export default async function NoticiasPage() {
  const trends = await fetchTrends(20);

  return (
    <>
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
              Em Alta em Portugal
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Os temas mais pesquisados hoje · atualizado de 6 em 6 horas a partir do Google Trends
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AdSlot format="horizontal" className="mb-10" />

        {trends.length === 0 ? (
          <div className="text-center py-20 text-gray-400 dark:text-gray-500">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Não foi possível carregar as notícias de momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {trends.map((trend, i) => (
              <TrendCard key={trend.title} trend={trend} rank={i + 1} />
            ))}
          </div>
        )}

        <AdSlot format="horizontal" className="mt-10" />
      </div>
    </>
  );
}
