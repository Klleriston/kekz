"use client";

import { useState, useEffect } from "react";

export function AnimatedInputToAbout() {
    const [expanded, setExpanded] = useState<boolean>(false);

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
                        <h1 className="text-2xl font-bold mb-4 text-center">Sobre mim</h1>
                        <p className="text-sm leading-relaxed">
                            Como desenvolvedor de software, atuo na criação de soluções escaláveis e performáticas, com experiência prática em ambientes corporativos e projetos de alto impacto. Tenho domínio de todo o ciclo de desenvolvimento de software, desde a análise de requisitos e prototipação até entregas contínuas (CI/CD) e sustentação em produção.
                        </p>
                        <p className="text-sm leading-relaxed mt-4">
                            Minha principal stack inclui Node.js, TypeScript e React.js, tenho familiaridade na construção e consumo de REST APIs, automações com GitHub Actions,containerização com Docker e implementações em nuvem.
                        </p>
                        <p className="text-sm leading-relaxed mt-4">
                            Tenho vivência sólida com provedores de nuvem como AWS e Azure.
                        </p>
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