"use client";

import { FiArrowLeft } from "react-icons/fi";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { TranslateSwitcher } from "./TranslateSwitcher";
import Link from "next/link";

export function Header() {
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
      <header className="flex items-center justify-end p-3 gap-4">
        <TranslateSwitcher />
        <ThemeSwitcher />
      </header>
    </>
  );
}
