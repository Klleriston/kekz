"use client";

import { useState, useEffect } from "react";
import { Article } from "../types/artigo";

export function AnimatedArticles() {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                "https://dev.to/api/articles?username=klleriston"
            );
            if (!response.ok) {
                throw new Error("rede nao ta legal :/");
            }
            const data = await response.json();
            setArticles(data);
        } catch (error) {
            console.error("deu erro buscando os artigos: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
        setExpanded(true);
    }, []);

    return (
        <>
            <div
                className={`transition-all duration-1000 ease-in-out ${
                    expanded ? "w-full max-w-lg md:max-w-3xl p-8" : "w-full max-w-xs h-[50px]"
                } bg-white dark:bg-black  border-gray-400 rounded-lg shadow-lg overflow-hidden mt-5`}
            >
                {expanded ? (
                    <div className="flex flex-col items-center h-full text-gray-500 dark:text-white">
                        <h1 className="text-2xl font-bold mb-4">Meus Artigos</h1>

                        {loading ? (
                            <p className="text-xl">Carregando artigos...</p>
                        ) : articles.length === 0 ? (
                            <p className="text-2xl font-bold">Nenhum artigo encontrado.</p>
                        ) : (
                            <div className="w-full">
                                {articles.map((article) => (
                                    <a
                                        key={article.id}
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div
                                            className="px-5 py-3 mb-5 text-center text-black bg-white border-black border-2 rounded-lg hover:bg-gray-200
                                                dark:hover:bg-gray-900 dark:border-white dark:bg-black dark:text-white flex flex-col"
                                        >
                                            <div className="p-6 flex-grow">
                                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                    {article.title}
                                                </h2>
                                                <p className="font-bold text-gray-900 dark:text-white mb-4 line-clamp-3">
                                                    {article.description || ""}
                                                </p>
                                                <div className="flex justify-between items-center text-sm text-gray-900 dark:text-white">
                                                    <span>
                                                        {new Date(article.published_at).toLocaleDateString(
                                                            "pt-BR"
                                                        )}
                                                    </span>
                                                    <span>{article.public_reactions_count} Likes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        </>
    );
}