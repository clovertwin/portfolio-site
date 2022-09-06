import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DarkIcon from "./DarkIcon";
import LightIcon from "./LightIcon";
import { useTheme } from "next-themes";
import { FiMenu } from "react-icons/fi";
import navImage from "../public/images/profile-pic.jpg";

const PageNav = ({ setMobileNavOpen }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-20 w-full sticky top-0 z-30 bg-neutral-50 shadow-md shadow-neutral-900/5 dark:bg-zinc-800 dark:shadow-none"></div>
    );
  }

  const handleOpenMenu = () => {
    setMobileNavOpen(true);
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-neutral-50 px-5 py-5 shadow-md transition ease-in-out duration-300 shadow-neutral-900/5 sm:px-14 dark:bg-zinc-800 dark:shadow-none">
      <div className="rounded-full h-[40px] w-[40px] overflow-hidden ring-4 ring-blue-600 transition ease-in-out duration-300 hover:cursor-pointer dark:ring-sky-500">
        <Link href="/">
          <a>
            <div className="h-10 w-10 relative">
              <Image alt="photo of me" src={navImage} />
            </div>
          </a>
        </Link>
      </div>
      <div className="font-inter hidden sm:block">
        <ul className="flex items-center">
          <li className="p-2 mr-5">
            <div className="hover:cursor-pointer text-neutral-500 hover:text-sky-500 dark:text-neutral-50 dark:hover:text-sky-500">
              <Link href="/#aboutMe">About</Link>
            </div>
          </li>
          <li className="p-2 mr-5 text-neutral-500 hover:text-sky-500 dark:text-neutral-50 dark:hover:text-sky-500">
            <div className="hover:cursor-pointer text-neutral-500 hover:text-sky-500 dark:text-neutral-50 dark:hover:text-sky-500">
              <Link href="/#projects">Projects</Link>
            </div>
          </li>
          <li className="p-2 mr-5 text-neutral-500 hover:text-sky-500 dark:text-neutral-50 dark:hover:text-sky-500">
            <div className="hover:cursor-pointer text-neutral-500 hover:text-sky-500 dark:text-neutral-50 dark:hover:text-sky-500">
              <Link href="/#blog">Blog</Link>
            </div>
          </li>
          <li className="p-2 mr-5 text-neutral-500 hover:text-sky-500 dark:text-neutral-50 dark:hover:text-sky-500">
            <div className="hover:cursor-pointer text-neutral-500 hover:text-sky-500 dark:text-neutral-50 dark:hover:text-sky-500">
              <Link href="/#contact">Contact</Link>
            </div>
          </li>
          {mounted ? (
            <li>
              {theme === "dark" || resolvedTheme === "dark" ? (
                <div
                  className="hover:cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <DarkIcon />
                </div>
              ) : (
                <div
                  className="hover:cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  <LightIcon />
                </div>
              )}
            </li>
          ) : (
            <li>
              <div className="w-6 h-6"></div>
            </li>
          )}
        </ul>
      </div>
      {mounted && (
        <div className="sm:hidden pb-1 flex items-center">
          {theme === "dark" || resolvedTheme === "dark" ? (
            <div className="mr-5" onClick={() => setTheme("light")}>
              <DarkIcon />
            </div>
          ) : (
            <div className="mr-5" onClick={() => setTheme("dark")}>
              <LightIcon />
            </div>
          )}
          <div>
            <div onClick={handleOpenMenu}>
              <FiMenu className="text-blue-700 text-3xl dark:text-sky-500" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default PageNav;
