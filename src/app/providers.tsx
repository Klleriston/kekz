"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptTranslations from "../locales/pt/translation.json";
import enTranslations from "../locales/en/translation.json";

export function Providers({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    if (!i18n.isInitialized) {
      i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          resources: {
            pt: {
              translation: ptTranslations
            },
            en: {
              translation: enTranslations
            }
          },
          fallbackLng: 'pt',
          interpolation: {
            escapeValue: false
          }
        });
    }

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return <>{children}</>;

    return (
        <>
          <ThemeProvider 
            attribute="class" defaultTheme="system" 
            enableSystem={true}
          >
            {children}
          </ThemeProvider>
        </>
    );
}
