import { useRef } from "react";
import Image from "next/image";
import useSectionVisible from "../hooks/useSectionVisible";

export default function Projects() {
  const projectsRef = useRef();
  const project1Ref = useRef();
  const project2Ref = useRef();
  const project3Ref = useRef();
  const project4Ref = useRef();

  const projectsVisible = useSectionVisible(projectsRef, 0.05);
  const project1Visible = useSectionVisible(project1Ref);
  const project2Visible = useSectionVisible(project2Ref);
  const project3Visible = useSectionVisible(project3Ref);
  const project4Visible = useSectionVisible(project4Ref);

  return (
    <div
      ref={projectsRef}
      className={projectsVisible ? "animate-slide-up" : "opacity-0"}
    >
      <section
        id="projects"
        className="text-lg mt-20 text-center sm:text-xl sm:mt-40 scroll-m-24"
      >
        <div className="border-b-4 border-blue-600 inline-block">
          <h2 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-3xl sm:text-4xl">
            Some things I&apos;ve built
          </h2>
        </div>
        <div className="mt-5 text-left text-neutral-500 text-base sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 sm:mt-0">
          <div
            ref={project1Ref}
            className={`${
              project1Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-600 sm:border-white sm:hover:border-blue-600 sm:hover:scale-105 transition ease-in-out duration-300 sm:mt-5`}
          >
            <h3 className="text-slate-800 font-bold text-xl">
              Chat Application
            </h3>
            <p className="mt-2">
              Real-time chat application built with React, Node, Express, and
              Socket.io
            </p>
            <div className="mt-5">
              <div>
                <a
                  href="https://github.com/clovertwin/send-it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="screenshot of chat application"
                    src="/images/chat-app.jpg"
                    width={400}
                    height={400}
                  />
                </a>
              </div>
              <div className="flex items-center justify-end pr-2 mt-5">
                <div className="mr-5 hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://github.com/clovertwin/send-it"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view code"
                      alt="github badge"
                      src="/images/github-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <div className="hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://gregarious-phoenix-9b68a5.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view live demo"
                      alt="play symbol"
                      src="/images/go-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={project2Ref}
            className={`${
              project2Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-600 mt-5 sm:border-white sm:hover:border-blue-600 sm:hover:scale-105 transition ease-in-out duration-300`}
          >
            <h3 className="text-slate-800 font-bold text-xl">Mac Calculator</h3>
            <p className="mt-2">
              Clone of the desktop Mac Calculator built with Vanilla Javascript
              and CSS.
            </p>
            <div className="mt-5">
              <div>
                <a
                  href="https://github.com/clovertwin/mac-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="screenshot of calculator"
                    src="/images/calculator-pic.jpg"
                    width={400}
                    height={400}
                  />
                </a>
              </div>
              <div className="flex items-center justify-end pr-2 mt-5">
                <div className="mr-5 hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://github.com/clovertwin/mac-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view code"
                      alt="github badge"
                      src="/images/github-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <div className="hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://clovertwin.github.io/mac-calculator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view live demo"
                      alt="play symbol"
                      src="/images/go-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={project3Ref}
            className={`${
              project3Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-600 mt-5 sm:border-white sm:hover:border-blue-600 sm:hover:scale-105 transition ease-in-out duration-300`}
          >
            <h3 className="text-slate-800 font-bold text-xl">
              Advice Generator
            </h3>
            <p className="mt-2">
              Get advice using the{" "}
              <a
                href="https://api.adviceslip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-400"
              >
                Advice Slip api
              </a>
              . Built using Next.js and Styled Components.
            </p>
            <div className="mt-5">
              <div>
                <a
                  href="https://github.com/clovertwin/advice-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="screenshot of advice generator"
                    src="/images/advice-pic.jpg"
                    width={400}
                    height={400}
                  />
                </a>
              </div>
              <div className="flex items-center justify-end pr-2 mt-5">
                <div className="mr-5 hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://github.com/clovertwin/advice-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view code"
                      alt="github badge"
                      src="/images/github-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <div className="hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://advice-generator-ruddy-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view live demo"
                      alt="play symbol"
                      src="/images/go-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={project4Ref}
            className={`${
              project4Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-600 mt-5 sm:border-white sm:hover:border-blue-600 sm:hover:scale-105 transition ease-in-out duration-300`}
          >
            <h3 className="text-slate-800 font-bold text-xl">Pokedex</h3>
            <p className="mt-2">
              Fetch and display the first 150 pokemon using the{" "}
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PokeApi
              </a>
            </p>
            <div className="mt-5">
              <div>
                <a
                  href="https://github.com/clovertwin/pokedex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    alt="screenshot of pokedex"
                    src="/images/pokedex-pic.jpg"
                    width={400}
                    height={400}
                  />
                </a>
              </div>
              <div className="flex items-center justify-end pr-2 mt-5">
                <div className="mr-5 hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://github.com/clovertwin/pokedex"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view code"
                      alt="github badge"
                      src="/images/github-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <div className="hover:scale-125 transition ease-in-out duration-300">
                  <a
                    href="https://clovertwin.github.io/pokedex/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      title="view live demo"
                      alt="play symbol"
                      src="/images/go-badge.svg"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
