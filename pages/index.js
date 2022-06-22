import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-2">
      <Head>
        <title>Shaun Carr</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-col justify-center items-center text-center">
        <h1 className="font-bold lg:text-7xl text-6xl text-fuchsia-600">
          Hello I&apos;m Shaun.
        </h1>
        <p className="lg:text-2xl text-xl mt-10 text-neutral-500">
          Welcome to my web garden 🌱
        </p>
      </main>
    </div>
  );
}
