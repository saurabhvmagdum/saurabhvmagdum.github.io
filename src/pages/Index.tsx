import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import TechStack from "@/components/portfolio/TechStack";
import Projects from "@/components/portfolio/Projects";
import Stats from "@/components/portfolio/Stats";
import Services from "@/components/portfolio/Services";
import Process from "@/components/portfolio/Process";
import Contact from "@/components/portfolio/Contact";
import FAQ from "@/components/portfolio/FAQ";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Stats />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
