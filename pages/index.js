import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import CircleType from "circletype";

export default function Home() {
  const circleInstance = useRef();

  useEffect(() => {
    new CircleType(circleInstance.current).radius(73);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-blue-600/90 selection:text-white">
      <div
        role="complementary"
        className="hidden absolute lg:block lg:right-[10%] lg:top-16 lg:fixed lg:animate-spin-slow xl:right-[15%]"
      >
        <p ref={circleInstance} className="text-xl text-blue-600">
          SITE-IS-UNDER-CONSTRUCTION-
        </p>
      </div>
      <main className="font-inter relative w-full mx-auto pb-20 px-4 pt-28 sm:max-w-screen-sm sm:pt-44">
        <Header />
        <Nav />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}
