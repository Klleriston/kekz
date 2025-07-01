"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export function Providers({ children }: { children: React.ReactNode }) {
    const [isMounted, setIsMounted] = useState(false);

    if (!i18n.isInitialized) {
      i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          resources: {
            pt: {
              translation: import('../locales/pt/translation.json')
            },
            en: {
              translation: import('../locales/en/translation.json')
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
