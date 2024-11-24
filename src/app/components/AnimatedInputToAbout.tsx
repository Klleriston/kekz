"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

export function AnimatedInputToAbout() {
    const [expanded, setExpanded] = useState<boolean>(false);

    useEffect(() => {
        setExpanded(true);
    }, []);

    return (
        <>
            <Link
                href="/"
                className="absolute top-4 left-4 flex items-center text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transition-colors duration-300"
                aria-label="Voltar para a página principal"
            >
                <FiArrowLeft className="mr-2 w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 hover:translate-x-1" />
                <span className="text-sm md:text-base transition-transform duration-300 hover:translate-x-1"></span>

            </Link>
            <div
                className={`transition-all duration-1000 ease-in-out ${expanded ? "w-full max-w-lg md:max-w-3xl p-8" : "w-full max-w-xs h-[50px]"
                    } bg-white dark:bg-black border-2 border-gray-400 rounded-lg shadow-lg overflow-hidden`}
            >

                {expanded ? (
                    <div className="flex flex-col justify-between items-center h-full text-gray-500 dark:text-white">
                        <h1 className="text-2xl font-bold mb-4">Sobre mim</h1>
                        <p className="text-sm leading-relaxed">
                            Como desenvolvedor de software, possuo uma sólida experiência no
                            desenvolvimento de soluções escaláveis e inovadoras, atuei ativamente
                            em projetos com parceria do Google. Tenho um histórico robusto no ciclo
                            completo de desenvolvimento de software, da prototipação à entrega do
                            produto. Minhas competências incluem desenvolvimento frontend e
                            backend, usando tecnologias como Node.js, TypeScript, React e Java
                            com ferramentas como Docker e GitHub. Certificado pela Azure e com
                            experiência profissional com GCP, sou adepto de metodologias ágeis
                            (SCRUM, KANBAN) e me adapto rapidamente a novas ferramentas e
                            frameworks para desenvolver soluções de alto impacto.
                        </p>
                        <footer className="text-xs mt-auto">
                            <a
                                href="mailto:klleandrade@outlook.com"
                                className="underline hover:text-gray-400"
                            >
                                klleandrade@outlook.com
                            </a>
                        </footer>
                    </div>
                ) : null}
            </div>
        </>
    );
}
