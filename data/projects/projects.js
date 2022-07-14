import Image from "next/image";

export const projects = [
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
        <Image
          title="view code"
          alt="github badge"
          src="/images/github-badge.svg"
          width={20}
          height={20}
        />
      </a>
    ),
    liveDemo: (
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
        <Image
          title="view code"
          alt="github badge"
          src="/images/github-badge.svg"
          width={20}
          height={20}
        />
      </a>
    ),
    liveDemo: (
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
          className="text-blue-600 hover:text-blue-400"
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
        <Image
          title="view code"
          alt="github badge"
          src="/images/github-badge.svg"
          width={20}
          height={20}
        />
      </a>
    ),
    liveDemo: (
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
    ),
  },
  {
    projectTitle: "Pokedex",
    description: (
      <>
        Fetch and display the first 150 pokemon using the{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400"
        >
          PokeApi
        </a>
      </>
    ),
    imageLink: (
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
    ),
    githubLink: (
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
    ),
    liveDemo: (
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
    ),
  },
];
