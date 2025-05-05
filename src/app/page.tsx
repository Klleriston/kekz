"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

export default function Home() {
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    setExpanded(true);
  }, []);

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center mx-4 my-8 mt-16 space-y-8">
        <div
          className={`transition-all duration-700 ease-in-out ${expanded ? "w-full max-w-lg md:max-w-3xl p-8"  : "w-full max-w-xs h-[50px]"
            }  overflow-hidden flex flex-col items-center justify-center `}
        >
          {expanded ? (
            <>
              <Profile />
              <Links />
            </>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
