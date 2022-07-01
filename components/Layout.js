import { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import PageNav from "./PageNav";
import CircleType from "circletype";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(73);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-blue-600/90 selection:text-white">
      <div
        role="complementary"
        className="hidden absolute lg:block lg:right-[10%] lg:top-28 lg:fixed lg:animate-spin-slow xl:right-[15%]"
      >
        <p ref={circleInstance} className="text-xl text-blue-600">
          SITE-IS-UNDER-CONSTRUCTION-
        </p>
      </div>
      <MobileMenu
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <PageNav setMobileNavOpen={setMobileNavOpen} />
      <main className="font-inter relative w-full mx-auto pb-20 px-4 pt-14 sm:max-w-screen-md sm:pt-40">
        {children}
      </main>
      <Footer />
    </div>
  );
}
