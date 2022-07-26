import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import MobileMenu from "./MobileMenu";
import PageNav from "./PageNav";
import CircleType from "circletype";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const circleInstance = useRef();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    //73
    new CircleType(circleInstance.current).radius(73);
  }, []);

  return (
    <>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="delbarocks">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#delbarocks)"></rect>
      </svg>
      <div className="min-h-screen bg-neutral-50 selection:bg-blue-600/90 selection:text-white transition ease-in-out duration-300 dark:bg-zinc-800 dark:selection:bg-sky-500/90">
        <div
          role="complementary"
          className="hidden absolute lg:block lg:right-[10%] lg:top-28 lg:fixed lg:animate-spin-slow xl:right-[15%]"
        >
          <p
            ref={circleInstance}
            className="text-xl text-blue-600 dark:text-sky-500"
          >
            THANKS-FOR-STOPPING-BY-YOU-ROCK-
          </p>
        </div>
        <MobileMenu
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
        <PageNav
          setMobileNavOpen={setMobileNavOpen}
          theme={theme}
          setTheme={setTheme}
        />
        <div className="flex flex-col justify-between min-h-screen">
          <main className="font-inter relative w-full mx-auto pb-20 px-4 pt-20 sm:max-w-screen-md sm:pt-40">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
