"use client";

import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

export function AnimatedInputToAbout() {
    const [expanded, setExpanded] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        setExpanded(true);
    }, []);

    return (
        <>
            <div
                className={`transition-all duration-1000 ease-in-out ${
                    expanded ? "w-full max-w-lg md:max-w-3xl p-8" : "w-full max-w-xs h-[50px]"
                } bg-white dark:bg-black border-2 border-gray-400 rounded-lg shadow-lg overflow-hidden`}
            >
                {expanded ? (
                    <div className="flex flex-col h-full text-gray-500 dark:text-white">
                        <h1 className="text-2xl font-bold mb-4 text-center">{t('about.title')}</h1>
                        <h3 className="text-xl font-bold mb-2">{t('titles.career summary')}</h3>
                        <p className="text-sm leading-relaxed">
                            {t('about.description')}
                        </p>

                        {t('about.certifications') && (
                          <div className="mt-4">
                            <h3 className="text-xl font-bold mb-2">{t('titles.certifications')}</h3>
                            <p className="text-sm leading-relaxed font-semibold">
                              {t('about.certifications')}
                            </p>
                          </div>
                        )}

                        {t('about.hardSkills') && (
                          <div className="mt-2">
                            <h3 className="text-xl font-bold mb-2">{t('titles.hard skills')}</h3>
                            <p className="text-sm leading-relaxed text-justify">
                              {t('about.hardSkills')}
                            </p>
                          </div>
                        )}
                        <div className="text-center mt-6">
                            <a
                                href="mailto:klleandrade@outlook.com"
                                className="text-xs underline hover:text-gray-400"
                            >
                                klleandrade@outlook.com
                            </a>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
}