import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-2 bg-neutral-50 selection:bg-blue-600/90 selection:text-white">
      <main className="relative w-full mx-auto sm:max-w-screen-sm px-4 pt-48">
        <div>
          <section>
            <div className="flex items-center space-x-10">
              <div className="rounded-full h-[200px] w-[200px] overflow-hidden">
                <Image
                  alt="picture of me"
                  src="/images/profile-pic.jpg"
                  width={597}
                  height={597}
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold">
                  Hello I&apos;m Shaun,
                  <br />a web developer.
                </h1>
                <h2 className="text-neutral-500 text-xl mt-2">
                  Welcome to <i>my</i> corner of the internet 👋
                </h2>
                <div className="mt-6 text-xl font-bold text-blue-700">
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
