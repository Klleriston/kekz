import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { AnimatedInputToAbout } from "../components/AnimatedInputToAbout";

export default function Sobre() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center">
                <section className="flex justify-center">
                    <AnimatedInputToAbout />
                </section>
            </main>
            <Footer />
        </>
    );
};
