"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
}

const AD_CLIENT = "ca-pub-8340172955044180";
const AD_SLOT = "9260461230";

export default function AdSlot({ format = "horizontal", className = "" }: AdSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {}
  }, []);

  const minH = format === "rectangle" ? "min-h-[250px]" : format === "vertical" ? "min-h-[600px]" : "min-h-[90px]";

  return (
    <div className={`overflow-hidden text-center ${minH} ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
