import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main className="scroll-smooth">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
