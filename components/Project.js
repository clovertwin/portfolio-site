import { useRef } from "react";
import useSectionVisible from "../hooks/useSectionVisible";

export default function Project({
  projectTitle,
  description,
  imageLink,
  githubLink,
  liveDemo,
  isFirst,
}) {
  const projectRef = useRef();

  const projectVisible = useSectionVisible(projectRef);

  return (
    <div
      ref={projectRef}
      className={`${projectVisible ? "animate-slide-up" : "opacity-0"} ${
        isFirst ? "sm:mt-5" : "mt-5"
      } bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-600 sm:border-white sm:hover:border-blue-600 sm:hover:scale-105 transition ease-in-out duration-300 dark:bg-neutral-700 dark:border-sky-500 dark:hover:border-sky-500`}
    >
      <h3 className="text-slate-800 font-bold text-xl dark:text-neutral-50">
        {projectTitle}
      </h3>
      <p className="mt-2 text-neutral-500 dark:text-neutral-50">
        {description}
      </p>
      <div className="mt-5">
        <div className="flex justify-center">{imageLink}</div>
        <div className="flex items-center justify-end pr-2 mt-5">
          <div className="mr-5 hover:scale-125 transition ease-in-out duration-300">
            {githubLink}
          </div>
          <div className="hover:scale-125 transition ease-in-out duration-300">
            {liveDemo}
          </div>
        </div>
      </div>
    </div>
  );
}
