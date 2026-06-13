"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Este site utiliza cookies para melhorar a sua experiência e mostrar publicidade relevante através
            do Google AdSense. Ao continuar a navegar, aceita o uso de cookies.{" "}
            <Link href="/privacidade" className="text-[#046A38] dark:text-green-400 hover:underline">
              Saber mais
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-medium bg-[#046A38] hover:bg-[#035530] text-white rounded-xl transition-colors"
          >
            Aceitar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
