import { useState, useEffect } from "react";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import headerImage from "../public/images/profile-pic.jpg";

const Header = () => {
  const [tooltip, setTooltip] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return (
    <header className="animate-slide-up sm:mx-4 md:mx-14">
      <div className="flex flex-col items-center justify-center sm:space-x-10 sm:flex-row sm:justify-start">
        <div
          data-tip
          data-for="me"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => {
            setTooltip(false);
            setTimeout(() => setTooltip(true), 50);
          }}
          className="rounded-full h-[150px] w-[150px] overflow-hidden ring-8 ring-blue-600 transition ease-in-out duration-300 dark:ring-sky-500"
        >
          <Image alt="picture of me" src={headerImage} priority />
        </div>
        <div className="mt-5 text-center sm:mt-3 sm:text-left">
          <h1 className="font-manrope tracking-tighter text-slate-800 text-4xl font-extrabold sm:text-5xl dark:text-neutral-50">
            Hello I&apos;m Shaun,
            <br />a web developer.
          </h1>
        </div>
      </div>
      <h2 className="text-neutral-600 text-lg mt-4 text-center sm:text-xl sm:mt-5 sm:text-left dark:text-neutral-50">
        <strong>Welcome</strong> to my <i>corner</i> of the internet! 👋{" "}
        <strong>
          This is where I share what I&apos;m working on and learning
        </strong>
        , in addition to serving as a <i>digital garden</i> where I can grow in
        my understanding of tech. 🌱
      </h2>
      <div className="border-b-2 border-neutral-300 mt-2"></div>
      {tooltip && mounted && (
        <ReactTooltip id="me">
          <span>{`hey! (◕‿‿◕)`}</span>
        </ReactTooltip>
      )}
    </header>
  );
};

export default Header;
