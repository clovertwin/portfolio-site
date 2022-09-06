const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="scroll-mt-24 text-lg text-center sm:text-xl sm:scroll-m-30"
    >
      <div className="border-b-4 border-blue-600 inline-block transition ease-in-out duration-300 dark:border-sky-500">
        <h2 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-3xl sm:text-4xl dark:text-neutral-50">
          A little about myself
        </h2>
      </div>
      <div className="mt-5 p-4 border-2 border-blue-600 rounded-2xl text-left bg-white shadow-lg text-neutral-600 sm:p-7 dark:border-sky-500 dark:bg-neutral-700 dark:text-neutral-50">
        <p>
          Hi! <strong>My name is Shaun</strong>, and my passion is creating
          delightful things that live on the internet. I started teaching myself
          web development in 2021 as a hobby, but the more I learned, the more I
          was hooked.
        </p>
        <br />
        <p>
          Since then, I&apos;ve cultivated that passion by diving deeper into
          the world of Javascript. It feels like magic to me when I see the
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
              Here are a few of the technologies I&apos;ve been using recently:
            </strong>
          </summary>
          <div className="mt-4 flex text-base gap-8 sm:text-xl sm:gap-20 sm:justify-start">
            <div className="flex flex-col">
              <p>-Javascript</p>
              <p>-React</p>
              <p>-Next.js</p>
            </div>
            <div className="flex flex-col">
              <p>-Typescript</p>
              <p>-Tailwindcss</p>
              <p>-Node.js</p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};

export default AboutMe;
