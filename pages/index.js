import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-2 bg-neutral-50 selection:bg-blue-600/90 selection:text-white">
      <main className="font-inter relative w-full mx-auto px-4 pt-20 sm:max-w-screen-sm sm:pt-40">
        <div>
          <section>
            <div className="flex flex-col items-center justify-center sm:space-x-10 sm:flex-row">
              <div className="rounded-full h-[150px] w-[150px] overflow-hidden">
                <Image
                  alt="picture of me"
                  src="/images/profile-pic.jpg"
                  width={597}
                  height={597}
                />
              </div>
              <div className="mt-2 text-center sm:mt-0 sm:text-left">
                <h1 className="font-manrope text-3xl font-bold">
                  Hello I&apos;m Shaun,
                  <br />a web developer.
                </h1>
                <h2 className="text-neutral-500 text-lg mt-2">
                  Welcome to <i>my</i> corner of the internet 👋
                </h2>
                <div className="mt-6 text-lg font-bold text-blue-700">
                  <a href="#">contact me</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
