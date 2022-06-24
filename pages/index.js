import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-blue-600/90 selection:text-white">
      <main className="font-inter relative w-full mx-auto px-4 pt-20 sm:max-w-screen-sm sm:pt-40">
        <div>
          <section>
            <div className="flex flex-col items-center justify-center sm:space-x-10 sm:flex-row sm:justify-start">
              <div className="rounded-full h-[150px] w-[150px] overflow-hidden ring-8 ring-blue-600">
                <Image
                  alt="picture of me"
                  src="/images/profile-pic.jpg"
                  width={597}
                  height={597}
                  priority
                />
              </div>
              <div className="mt-5 text-center sm:mt-3 sm:text-left">
                <h1 className="font-manrope text-3xl font-extrabold sm:text-5xl">
                  Hello I&apos;m Shaun,
                  <br />a web developer.
                </h1>
              </div>
            </div>
            <h2 className="text-neutral-500 text-lg mt-5 text-center sm:text-xl sm:text-left sm:mt-10">
              <strong>Welcome</strong> to my <i>corner</i> of the internet 👋{" "}
              <strong>
                This is where I share what I&apos;m working on and learning
              </strong>
              , in addition to serving as a <i>digital garden</i> where I grow
              my career in tech 🌱
            </h2>
            <div className="flex items-center justify-center gap-8 mt-5 sm:justify-start">
              <a
                href="#"
                className="transition duration-300 text-blue-600 hover:text-blue-400 font-bold text-lg sm:px-8 sm:py-4 sm:border-blue-600 sm:border-2 sm:rounded-full sm:hover:text-white sm:hover:bg-blue-600"
              >
                about
              </a>
              <a
                href="#"
                className="transition duration-300 text-blue-600 hover:text-blue-400 font-bold text-lg sm:px-8 sm:py-4 sm:border-blue-600 sm:border-2 sm:rounded-full sm:hover:text-white sm:hover:bg-blue-600"
              >
                projects
              </a>
              <a
                href="#"
                className="transition duration-300 text-blue-600 hover:text-blue-400 font-bold text-lg sm:px-8 sm:py-4 sm:border-blue-600 sm:border-2 sm:rounded-full sm:hover:text-white sm:hover:bg-blue-600"
              >
                blog
              </a>
            </div>
          </section>
          <hr className="mt-5 border-2 border-neutral-300 rounded"></hr>
        </div>
      </main>
    </div>
  );
}
