import { Link as Scroll } from "react-scroll";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center fixed h-24 text-gray-500 font-montserrat">
      <div className="ml-14 my-10 tracking-widest">Matthew's Portfolio</div>
      <div className="flex">
        <Scroll
          to="about"
          smooth
          duration={400}
          className="mx-12 my-10 cursor-pointer"
        >
          About
        </Scroll>
        <Scroll
          to="projects"
          smooth
          duration={400}
          className="mx-12 my-10 cursor-pointer"
        >
          Projects
        </Scroll>
        <Scroll
          to="contact"
          smooth
          duration={400}
          className="mr-14 ml-12 my-10 cursor-pointer"
        >
          Contact
        </Scroll>
      </div>
    </div>
  );
}
