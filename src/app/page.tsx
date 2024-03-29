import Navbar from "@/components/base/Navbar";
import About from "@/components/page/About";
import Projects from "@/components/page/Projects";
import Contact from "@/components/page/Contact";
import Footer from "@/components/base/Footer";
import Landing from "@/components/page/Landing";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Landing />
      </div>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
