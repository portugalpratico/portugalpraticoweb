import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  badgeColor?: "green" | "red" | "gray";
}

export default function ToolCard({ title, description, href, icon, badge, badgeColor = "green" }: ToolCardProps) {
  const badgeClasses = {
    green: "bg-green-50 text-[#046A38]",
    red: "bg-red-50 text-[#DA291C]",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <Link href={href} className="tool-card group block">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-[#046A38] group-hover:bg-[#046A38] group-hover:text-white transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#046A38] transition-colors">{title}</h3>
            {badge && (
              <span className={`badge ${badgeClasses[badgeColor]}`}>{badge}</span>
            )}
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
        </div>
        <svg className="w-4 h-4 text-gray-300 group-hover:text-[#046A38] transition-colors shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
