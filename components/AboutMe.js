import { useEffect, useRef, useState } from "react";

export default function AboutMe() {
  const [isAboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          return;
        }
        setAboutVisible(false);
      });
    }, options);
    if (aboutRef.current) observer.observe(aboutRef.current);
  }, [aboutRef]);

  return (
    <div
      ref={aboutRef}
      className={isAboutVisible ? "animate-slide-up" : "opacity-0"}
    >
      <section
        id="aboutMe"
        className="text-lg text-center mt-20 sm:text-xl sm:mt-32"
      >
        <div className="border-b-4 border-blue-600 inline-block">
          <h2 className="font-manrope text-black font-bold text-2xl sm:text-3xl">
            A little about myself
          </h2>
        </div>
        <div className="mt-5 p-4 border-2 border-blue-500 rounded-2xl text-left bg-white shadow-lg text-neutral-500 sm:p-7">
          <p>
            Hi! <strong>My name is Shaun</strong>, and my passion is creating
            delightful things that live on the internet. I started teaching
            myself web development in 2020 as a hobby, but the more I learned,
            the more I was hooked.
          </p>
          <br />
          <p>
            Since then, I&apos;ve cultivated that passion by diving deeper into
            the world of Javascript. It feels like magic to me when i see the
            things I create come to life in front of people&apos;s eyes.
          </p>
          <br />
          <p>
            I&apos;m currently looking for my first developer position so I can
            finally kick start my career and learn among professionals.
          </p>
          <br />
          <details className="open:ring-0">
            <summary className="hover:cursor-pointer">
              <strong>
                Here are a few of the technologies I&apos;ve been using
                recently:
              </strong>
            </summary>
            <div className="mt-4 flex text-base gap-8 sm:text-xl sm:gap-20 sm:justify-start">
              <div className="flex flex-col">
                <p>-Javascript</p>
                <p>-React</p>
                <p>-Next.js</p>
              </div>
              <div className="flex flex-col">
                <p>-Styled Components</p>
                <p>-Tailwindcss</p>
                <p>-Node.js</p>
              </div>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
