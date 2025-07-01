"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FiGlobe } from "react-icons/fi";

export function TranslateSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentLanguage = i18n.language;

  return (
    <div className="relative">
      <button
        onClick={() => {
          if (currentLanguage === "pt") {
            i18n.changeLanguage("en");
          } else {
            i18n.changeLanguage("pt");
          }
        }}
        className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
      >
        <FiGlobe className="w-5 h-5 text-gray-900 dark:text-white" />
        <span className="text-sm text-gray-900 dark:text-white">
          {currentLanguage === "pt" ? "PT" : "EN"}
        </span>
      </button>
    </div>
  );
}
