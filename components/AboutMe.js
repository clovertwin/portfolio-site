export default function AboutMe() {
  return (
    <section id="aboutMe" className="mt-40 text-lg text-center sm:text-xl">
      <div className="border-b-4 border-blue-600 inline-block">
        <h2 className="font-manrope text-black font-bold text-2xl sm:text-3xl">
          A little about myself
        </h2>
      </div>
      <div className="mt-5 p-4 border-2 border-blue-500 rounded-2xl text-left bg-white shadow-lg text-neutral-500 sm:p-7">
        <p>
          Hi! <strong>My name is Shaun</strong> and creating delightful things
          that live on the internet is my passion. I started teaching myself web
          development in 2020 as a hobby, but the more I learned the more I
          realized I was hooked.
        </p>
        <br />
        <p>
          Since then I have cultivated that passion by diving deeper into the
          world of Javascript. It feels like magic to me when i see the things I
          create come to life in front of people&apos;s eyes.
        </p>
        <br />
        <p>
          I currently am looking for my first developer position to finally kick
          start my career and learn among professionals.
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
              <p>-Styled Components</p>
              <p>-Tailwindcss</p>
              <p>-Node.js</p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
