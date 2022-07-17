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
    new CircleType(circleInstance.current).radius(73);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-blue-600/90 selection:text-white dark:bg-zinc-800 dark:selection:bg-sky-500/90">
      <div
        role="complementary"
        className="hidden absolute lg:block lg:right-[10%] lg:top-28 lg:fixed lg:animate-spin-slow xl:right-[15%]"
      >
        <p
          ref={circleInstance}
          className="text-xl text-blue-600 dark:text-sky-500"
        >
          SITE-IS-UNDER-CONSTRUCTION-
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
  );
}
