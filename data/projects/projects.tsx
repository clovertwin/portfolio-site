import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { MdLaunch } from "react-icons/md";

export const projects = [
  {
    projectTitle: "Spotify Clone",
    id: 1,
    description: "App to control Spotify built with Nextjs and Typescript.",
    imageLink: (
      <a
        href="https://song-share.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="screenshot of Song-Share"
          src="https://res.cloudinary.com/diyccpxjc/image/upload/v1678849918/Screenshot_2023-03-14_at_11.04.29_PM-min_puzi2r.png"
          width={400}
          height={400}
          unoptimized
        />
      </a>
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/song-share"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="text-blue-500 text-2xl transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500" />
      </a>
    ),
    liveDemo: (
      <a
        href="https://song-share.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdLaunch className="text-blue-500 text-2xl transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500" />
      </a>
    ),
  },
  {
    projectTitle: "Ecommerce Store",
    id: 2,
    description: "Built using Next.js, Tailwind, Typescript, and Sanity",
    imageLink: (
      <a
        href="https://ecommerce-ts-mu.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="screenshot of ecommerce store"
          src="/images/ecommerce-site-pic.jpg"
          width={400}
          height={400}
          unoptimized
        />
      </a>
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/ecommerce-ts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="text-blue-500 text-2xl transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500" />
      </a>
    ),
    liveDemo: (
      <a
        href="https://ecommerce-ts-mu.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdLaunch className="text-blue-500 text-2xl transition ease-in-out duration-300 text:fill-blue-600 dark:text-sky-500" />
      </a>
    ),
  },
  {
    projectTitle: "Chat Application",
    id: 3,
    description:
      "Real-time chat application built with React, Node, Express, and Socket.io",
    imageLink: (
      <a
        href="https://chat-app-clovertwin.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="screenshot of chat application"
          src="/images/chatapp.jpg"
          width={400}
          height={400}
          unoptimized
        />
      </a>
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/chat-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="text-blue-500 text-2xl transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500" />
      </a>
    ),
    liveDemo: (
      <a
        href="https://chat-app-clovertwin.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdLaunch className="text-blue-500 text-2xl transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500" />
      </a>
    ),
  },
  {
    projectTitle: "Advice Generator",
    id: 4,
    description: (
      <>
        Get advice using the{" "}
        <a
          href="https://api.adviceslip.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 transition ease-in-out duration-300 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600"
        >
          Advice Slip api
        </a>
        . Built using Next.js and Styled Components.
      </>
    ),
    imageLink: (
      <a
        href="https://advice-generator-ruddy-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="screenshot of advice generator"
          src="/images/advice-pic.jpg"
          width={400}
          height={400}
          unoptimized
        />
      </a>
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/advice-generator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub className="text-blue-500 text-2xl transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500" />
      </a>
    ),
    liveDemo: (
      <a
        href="https://advice-generator-ruddy-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdLaunch className="text-blue-500 text-2xl transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500" />
      </a>
    ),
  },
];
