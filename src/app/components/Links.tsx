"use client";
import Link from "next/link";
export function Links() {
  const links = [
    { label: "Repositórios", url: "https://github.com/Klleriston" },
    { label: "Artigos", url: "/artigos", isInternal: true },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/klleriston-andrade/" },
    { label: "Currículo", url: "/KlleristonAndrade.pdf", isDownload: true },
    { label: "Sobre Mim", url: "/sobre", isInternal: true },
  ];

  return (
    <div className="flex flex-col items-center mt-5 space-y-4">
      {links.map((link, index) =>
        link.isDownload ? (
          <a
            key={index}
            href={link.url}
            download
            className="px-5 py-3 w-80 text-center text-black bg-white border-black border-2 rounded-lg hover:bg-gray-200
              dark:hover:bg-gray-900 dark:border-white dark:bg-black dark:text-white"
          >
            {link.label}
          </a>
        ) : link.isInternal ? (
          <Link
            key={index}
            href={link.url}
            className="px-5 py-3 w-80 text-center text-black bg-white border-black border-2 rounded-lg hover:bg-gray-200
              dark:hover:bg-gray-900 dark:border-white dark:bg-black dark:text-white"
          >
            {link.label}
          </Link>
        ) : (
          <button
            key={index}
            className="px-5 py-3 w-80 text-black bg-white border-black border-2 rounded-lg hover:bg-gray-200
            dark:hover:bg-gray-900 dark:border-white dark:bg-black dark:text-white"
            onClick={() => window.open(link.url, "_blank")}
          >
            {link.label}
          </button>
        )
      )}
    </div>
  );
}
