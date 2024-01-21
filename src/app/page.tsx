"use client";

import Spline from "@splinetool/react-spline";
import Navbar from "../components/base/Navbar";
import About from "@/components/page/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <Spline scene="https://prod.spline.design/TcO3zPBQlR00FnU2/scene.splinecode" />
      </div>
      <section id="about" className="h-screen">
        <About />
      </section>
      <section id="projects" className="h-screen bg-black">
        <div>Promects</div>
      </section>
      <section id="contact" className="h-screen">
        <div>Contact</div>
      </section>
    </>
  );
}
