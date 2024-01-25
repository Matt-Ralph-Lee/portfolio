"use client";

import Spline from "@splinetool/react-spline";
import Navbar from "@/components/base/Navbar";
import About from "@/components/page/About";
import Projects from "@/components/page/Projects";
import Contact from "@/components/page/Contact";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Spline scene="https://prod.spline.design/TcO3zPBQlR00FnU2/scene.splinecode" />
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
