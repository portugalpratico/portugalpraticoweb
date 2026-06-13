import { fetchTrends, TrendItem, NewsItem } from "@/lib/trends";
import Link from "next/link";

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
          className="w-14 h-10 object-cover rounded-lg shrink-0 bg-gray-100 dark:bg-gray-700"
          loading="lazy"
        />
      ) : (
        <div className="w-14 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 shrink-0 flex items-center justify-center">
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

function TrendCard({ trend }: { trend: TrendItem }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-700">
        <TrafficBadge traffic={trend.traffic} />
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
          {trend.title}
        </h3>
      </div>
      <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
        {trend.newsItems.map((item) => (
          <NewsArticle key={item.url} item={item} />
        ))}
      </div>
    </div>
  );
}

export default async function TrendingNews({ limit = 6 }: { limit?: number }) {
  const trends = await fetchTrends(limit);
  if (!trends.length) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <h2 className="section-title">Em Alta em Portugal</h2>
        </div>
        <Link
          href="/noticias"
          className="text-sm text-[#046A38] dark:text-green-400 hover:underline flex items-center gap-1"
        >
          Ver todas
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trends.map((trend) => (
          <TrendCard key={trend.title} trend={trend} />
        ))}
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">
        Fonte: Google Trends Portugal · atualizado de 6 em 6 horas
      </p>
    </section>
  );
}
