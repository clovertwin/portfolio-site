export default function AboutMe() {
  return (
    <section id="aboutMe" className="mt-40 text-lg text-center sm:text-xl">
      <div className="border-b-4 border-blue-600 inline-block">
        <h2 className="font-manrope text-black font-bold text-2xl sm:text-3xl">
          A little about myself
        </h2>
      </div>
      <div className="mt-5 p-4 border-2 border-blue-500 rounded-2xl text-left bg-white shadow-lg text-neutral-500 indent-8 sm:p-7">
        {/* <p>
          A few years ago, if someone were to tell me that people would be
          scrolling through a{" "}
          <strong>website that I had built myself from scratch</strong>, I
          wouldn&apos;t <i>hesitate to call them crazy!</i> Not that I
          haven&apos;t been around computers...heck I grew up on the internet 😅
          but it all just seemed so <i>mysterious and impossible</i> to ever
          learn.
        </p>{" "}
        <br /> */}
        {/* <p>
          If there is <i>one thing I have learned</i> in this life though,
          it&apos;s that most things are not <i>actually impossible</i>,{" "}
          <strong>they just take work to achieve</strong>.
        </p>
        <br /> */}
        <p>
          {/* The <i>crazy</i> thing is, this dosen&apos;t really feel like work to
          me.  */}
          As I journey further into my understanding of{" "}
          <strong>CSS, Javascript, and React</strong>, and the challenges grow
          steeper, I get more excited to put my skills to use and see what
          I&apos;ve built come to life on the internet.
        </p>
        <br />
        <p>
          I have never gone to college for computer science or ever worked at a
          tech company before, I dont have much to list here for experience.
          What I do have is a{" "}
          <strong>
            burning desire to step up and take my learning to the next level,
            with a company looking for someone who loves a challenge
          </strong>
          !
        </p>
      </div>
    </section>
  );
}
