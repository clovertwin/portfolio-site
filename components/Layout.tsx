import { useState } from "react";
import MobileMenu from "./MobileMenu";
import PageNav from "./PageNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
      <div className="min-h-screen selection:bg-blue-600/90 selection:text-white dark:selection:bg-sky-500/90">
        <MobileMenu
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
        <PageNav setMobileNavOpen={setMobileNavOpen} />
        <div className="flex flex-col justify-between transition ease-in-out duration-300 min-h-screen bg-neutral-50 dark:bg-zinc-800">
          <main className="font-inter relative w-full mx-auto pb-20 px-4 pt-20 sm:max-w-screen-md sm:pt-40">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
