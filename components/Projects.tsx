import Project from "./Project";
import { projects as DATA } from "../data/projects/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="text-lg mt-20 text-center sm:text-xl sm:mt-40 scroll-m-24"
    >
      <div className="border-b-4 border-blue-600 inline-block transition ease-in-out duration-300 dark:border-sky-500">
        <h2 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-3xl sm:text-4xl dark:text-neutral-50">
          Some things I&apos;ve built
        </h2>
      </div>
      <div className="mt-5 text-left text-base sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 sm:mt-0">
        {DATA.map((project, index) => (
          <div key={project.id}>
            <Project
              projectTitle={project.projectTitle}
              description={project.description}
              imageLink={project.imageLink}
              githubLink={project.githubLink}
              liveDemo={project.liveDemo}
              isFirst={index === 0 ? true : false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
