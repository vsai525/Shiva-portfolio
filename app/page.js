import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Value from "@/components/Value";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experiments from "@/components/Experiments";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <div className="grain" />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Value />
        <Projects />
        <Skills />
        <Experiments />
        <Contact />
      </main>
    </>
  );
}
