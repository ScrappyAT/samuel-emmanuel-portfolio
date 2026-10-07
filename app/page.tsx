import { Navigation } from "@/app/components/navigation";
import { Hero } from "@/app/components/hero";
import { SelectedWork } from "@/app/components/selected-work";
import { About } from "@/app/components/about";
import { Experience } from "@/app/components/experience";
import { TechStack } from "@/app/components/tech-stack";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
