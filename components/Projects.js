import { useRef } from "react";
import useSectionVisible from "../hooks/useSectionVisible";

export default function Projects() {
  const projectsRef = useRef();
  const isVisible = useSectionVisible(projectsRef);

  return (
    <div
      ref={projectsRef}
      className={isVisible ? "animate-slide-up" : "opacity-0"}
    >
      <section
        id="projects"
        className="text-lg mt-20 text-center sm:text-xl sm:mt-32"
      >
        <div className="border-b-4 border-blue-600 inline-block">
          <h2 className="font-manrope text-black font-bold text-2xl sm:text-3xl">
            Projects
          </h2>
        </div>
        <div className="mt-5 p-4 border-2 border-blue-500 rounded-2xl text-left bg-white shadow-lg text-neutral-500 sm:p-7">
          <p>projects will go here :)</p>
        </div>
      </section>
    </div>
  );
}
