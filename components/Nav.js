import Link from "next/link";

export default function Nav() {
  return (
    <div className="sticky top-0 pt-5 backdrop-blur animate-slide-up z-10">
      <div className="flex items-center justify-center">
        <Link href="#aboutMe" scroll={false}>
          <a className="transition duration-300 text-blue-600 hover:text-blue-400 font-bold text-lg mr-8 sm:px-7 sm:py-3 sm:border-blue-600 sm:border-2 sm:rounded-full sm:hover:text-white sm:hover:bg-blue-600">
            about
          </a>
        </Link>
        <a
          href="#"
          className="transition duration-300 text-blue-600 hover:text-blue-400 font-bold text-lg mr-8 sm:px-7 sm:py-3 sm:border-blue-600 sm:border-2 sm:rounded-full sm:hover:text-white sm:hover:bg-blue-600"
        >
          projects
        </a>
        <a
          href="#"
          className="transition duration-300 text-blue-600 hover:text-blue-400 font-bold text-lg sm:px-7 sm:py-3 sm:border-blue-600 sm:border-2 sm:rounded-full sm:hover:text-white sm:hover:bg-blue-600"
        >
          blog
        </a>
      </div>
      <div className="border-b-2 border-neutral-300 mt-5"></div>
    </div>
  );
}
