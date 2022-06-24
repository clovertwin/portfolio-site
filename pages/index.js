import { useEffect, useRef } from "react";
import Header from "../components/Header";
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
      <main className="font-inter relative w-full mx-auto px-4 pt-20 sm:max-w-screen-sm sm:pt-40">
        <Header />
        <hr className="mt-5 border-2 border-neutral-300 rounded"></hr>
      </main>
    </div>
  );
}
