import Image from "next/image";

export default function Header() {
  return (
    <header className="animate-slide-up sm:mx-4 md:mx-14">
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
          <h1 className="font-manrope tracking-tighter text-slate-800 text-4xl font-extrabold sm:text-5xl">
            Hello I&apos;m Shaun,
            <br />a web developer.
          </h1>
        </div>
      </div>
      <h2 className="text-neutral-500 text-lg mt-4 text-center sm:text-xl sm:mt-5 sm:text-left">
        <strong>Welcome</strong> to my <i>corner</i> of the internet! 👋{" "}
        <strong>
          This is where I share what I&apos;m working on and learning
        </strong>
        , in addition to serving as a <i>digital garden</i> where I can grow in
        my understanding of tech. 🌱
      </h2>
      <div className="border-b-2 border-neutral-300 mt-2"></div>
    </header>
  );
}
