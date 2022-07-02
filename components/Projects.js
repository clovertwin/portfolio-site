import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useSectionVisible from "../hooks/useSectionVisible";

export default function Projects() {
  const projectsRef = useRef();
  const project1Ref = useRef();
  const project2Ref = useRef();
  const project3Ref = useRef();
  const project4Ref = useRef();

  const projectsVisible = useSectionVisible(projectsRef);
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
        className="text-lg mt-20 text-center sm:text-xl sm:mt-40 scroll-m-28"
      >
        <div className="border-b-4 border-blue-600 inline-block">
          <h2 className="font-manrope text-black font-bold text-2xl sm:text-3xl">
            Some things I&apos;ve built
          </h2>
        </div>
        <div className="mt-5 text-left text-neutral-500 text-base sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 sm:mt-0">
          <div
            ref={project1Ref}
            className={`${
              project1Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-600 sm:border-white sm:grayscale sm:hover:grayscale-0 sm:hover:border-blue-600 sm:hover:scale-105 transition ease-in-out duration-300 sm:mt-5`}
          >
            <h3 className="text-black font-bold text-xl">Chat Application</h3>
            <p className="mt-2">
              Real-time web chat application, built with React, Node, Express,
              and Socket.io
            </p>
            <div className="mt-5">
              <div>
                <Link href="https://github.com/clovertwin/send-it">
                  <a>
                    <Image
                      alt="screenshot of chat application"
                      src="/images/chat-app.jpg"
                      width={400}
                      height={400}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex items-center justify-end pr-2 mt-5">
                <div className="mr-5 hover:scale-125 transition ease-in-out duration-300">
                  <Link href="https://github.com/clovertwin/send-it">
                    <a>
                      <Image
                        title="view code"
                        alt="github badge"
                        src="/images/github-badge.svg"
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hover:scale-125 transition ease-in-out duration-300">
                  <Link href="https://gregarious-phoenix-9b68a5.netlify.app/">
                    <a>
                      <Image
                        title="view live demo"
                        alt="play symbol"
                        src="/images/go-badge.svg"
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={project2Ref}
            className={`${
              project2Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg mt-5 border-2 border-white hover:border-blue-600 hover:scale-105 transition ease-in-out duration-300`}
          >
            Project 2
          </div>
          <div
            ref={project3Ref}
            className={`${
              project3Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg mt-5 border-2 border-white hover:border-blue-600 hover:scale-105 transition ease-in-out duration-300`}
          >
            Project 3
          </div>
          <div
            ref={project4Ref}
            className={`${
              project4Visible ? "animate-slide-up" : "opacity-0"
            } bg-white rounded-2xl p-4 shadow-lg mt-5 border-2 border-white hover:border-blue-600 hover:scale-105 transition ease-in-out duration-300`}
          >
            Project 4
          </div>
        </div>
      </section>
    </div>
  );
}
