"use client";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AnimatedArticles } from "../components/AnimatedArticles";

export default function Artigos() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <section>
          <AnimatedArticles />
        </section>
      </main>
      <Footer />
    </>
  );
}
