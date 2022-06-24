import Header from "../layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 selection:bg-blue-600/90 selection:text-white">
      <main className="font-inter relative w-full mx-auto px-4 pt-20 sm:max-w-screen-sm sm:pt-40">
        <Header />
        <hr className="mt-5 border-2 border-neutral-300 rounded"></hr>
      </main>
    </div>
  );
}
