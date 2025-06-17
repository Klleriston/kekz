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
                            Desenvolvedor de software com experiência no desenvolvimento de soluções end-to-end escaláveis e performáticas. Atuo com foco em back-end e front-end utilizando tecnologias como Java, Spring Boot, Kotlin, Node.js, React e TypeScript. Possuo vivência em ambientes ágeis, aplicando práticas do Scrum e da ITIL v4 em atividades de sustentação e suporte técnico.
                        </p>
                        <p className="text-sm leading-relaxed mt-4">
                            Tenho expertise em computação em nuvem com AWS e Microsoft Azure, incluindo certificações oficiais AI-900 e AZ-900. Experiência sólida com containers (Docker), bancos de dados relacionais (PostgreSQL, MySQL) e não relacionais (MongoDB), além de conhecimento em práticas de CI/CD.
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