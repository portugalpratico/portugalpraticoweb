"use client";

interface AdSlotProps {
  slot?: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
}

export default function AdSlot({ format = "horizontal", className = "" }: AdSlotProps) {
  const heights = {
    horizontal: "h-[90px]",
    rectangle: "h-[250px]",
    vertical: "h-[600px]",
  };

  return (
    <div className={`ad-slot ${heights[format]} w-full ${className}`}>
      <span>Publicidade</span>
    </div>
  );
}
