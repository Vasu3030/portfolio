import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Projects />
        <Contact />
      </div>
  );
}
