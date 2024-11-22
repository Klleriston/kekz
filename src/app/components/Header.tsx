"use client";

import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  return (
    <header className="flex items-center justify-end p-7">
      <ThemeSwitcher />
    </header>
  );
}
