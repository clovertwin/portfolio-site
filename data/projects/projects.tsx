import Image from "next/image";
import CodeIcon from "../../components/CodeIcon";
import LiveDemoIcon from "../../components/LiveDemoIcon";

export const projects = [
  {
    projectTitle: "Ecommerce Store",
    description: "Built using Next.js, Tailwind, Typescript, and Sanity",
    imageLink: (
      <a
        href="https://github.com/clovertwin/ecommerce-ts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt="screenshot of ecommerce store"
          src="/images/ecommerce-site-pic.jpg"
          width={400}
          height={400}
        />
      </a>
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/ecommerce-ts"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeIcon />
      </a>
    ),
    liveDemo: (
      <a
        href="https://ecommerce-ts-mu.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LiveDemoIcon />
      </a>
    ),
  },
  {
    projectTitle: "Chat Application",
    description:
      "Real-time chat application built with React, Node, Express, and Socket.io",
    imageLink: (
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
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/send-it"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeIcon />
      </a>
    ),
    liveDemo: (
      <a
        href="https://gregarious-phoenix-9b68a5.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LiveDemoIcon />
      </a>
    ),
  },
  {
    projectTitle: "Mac Calculator",
    description:
      "Clone of the desktop Mac Calculator built with Vanilla Javascript and CSS.",
    imageLink: (
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
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/mac-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeIcon />
      </a>
    ),
    liveDemo: (
      <a
        href="https://clovertwin.github.io/mac-calculator/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LiveDemoIcon />
      </a>
    ),
  },
  {
    projectTitle: "Advice Generator",
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
    ),
    githubLink: (
      <a
        href="https://github.com/clovertwin/advice-generator"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeIcon />
      </a>
    ),
    liveDemo: (
      <a
        href="https://advice-generator-ruddy-ten.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LiveDemoIcon />
      </a>
    ),
  },
];
