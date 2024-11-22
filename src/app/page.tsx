import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Links } from "./components/Links";
import { Profile } from "./components/Profile";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center mx-4 my-8 space-y-8">
        <Profile />
        <Links />
      </main>
      <Footer />
    </>
  );
}
