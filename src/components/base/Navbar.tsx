"use client";

import { Link as Scroll } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center fixed text-gray-500 font-montserrat">
      <div className="ml-14 my-10 tracking-widest hidden md:block">
        Matthew&apos;s Portfolio
      </div>
      <div className="ml-6 my-6 tracking-widest block md:hidden">Portfolio</div>
      <div className="flex">
        <Scroll
          to="about"
          smooth
          duration={400}
          className="mx-1 md:mx-12 my-6 md:my-10 text-xs md:text-base cursor-pointer"
        >
          About
        </Scroll>
        <Scroll
          to="projects"
          smooth
          duration={400}
          className="mx-2 md:mx-12 my-6 md:my-10 text-xs md:text-base cursor-pointer"
        >
          Projects
        </Scroll>
        <Scroll
          to="contact"
          smooth
          duration={400}
          className="mr-6 md:mr-14 ml-1 md:ml-12 my-6 md:my-10 text-xs md:text-base cursor-pointer"
        >
          Contact
        </Scroll>
      </div>
    </div>
  );
}
