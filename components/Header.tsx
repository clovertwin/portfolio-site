import { useState, useEffect } from "react";
import Image from "next/image";
import ReactTooltip from "react-tooltip";

const Header = () => {
  const [tooltip, setTooltip] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return (
    <header className="h-[90vh] flex flex-col justify-center sm:mx-4 md:mx-14">
      <div className="flex flex-col items-center justify-center sm:space-x-10 sm:flex-row">
        <div
          data-tip
          data-for="me"
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => {
            setTooltip(false);
            setTimeout(() => setTooltip(true), 50);
          }}
          className="rounded-full h-[150px] w-[150px] ring-8 ring-blue-600 transition ease-in-out duration-300 dark:ring-sky-500"
        >
          <Image
            alt="picture of me"
            src="https://res.cloudinary.com/diyccpxjc/image/upload/v1678848993/profile-pic_pwwtly.jpg"
            width={400}
            height={400}
            priority
            unoptimized
            className="rounded-full"
          />
        </div>
        <div className="mt-5 text-center sm:mt-3 sm:text-left">
          <h1 className="font-manrope tracking-tighter text-slate-800 text-4xl font-extrabold sm:text-5xl dark:text-neutral-50">
            Hello I&apos;m Shaun,
            <br />a web developer.
          </h1>
        </div>
      </div>
      <p className="text-neutral-600 text-lg mt-4 text-center sm:text-2xl sm:mt-5 ml-6 sm:text-left dark:text-neutral-50">
        <strong>Welcome to my corner of the internet!</strong> 👋 This is where
        I share what I&apos;m working on and learning. 🌱
      </p>
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
