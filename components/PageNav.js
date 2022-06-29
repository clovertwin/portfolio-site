import Image from "next/image";
import Link from "next/link";

export default function PageNav() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-neutral-50 px-5 py-5 shadow-md shadow-neutral-900/5 sm:px-14">
      <div className="rounded-full h-[40px] w-[40px] overflow-hidden ring-4 ring-blue-600 hover:cursor-pointer">
        <Link href="#">
          <Image
            alt="photo of me"
            src="/images/profile-pic.jpg"
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="font-inter text-slate-400 hidden sm:block">
        <ul className="flex">
          <li className="p-2 mr-2 hover:text-slate-500">
            <Link href="#aboutMe">About</Link>
          </li>
          <li className="p-2 mr-2 hover:text-slate-500">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="p-2 mr-2 hover:text-slate-500">
            <Link href="#">Contact</Link>
          </li>
          <li className="p-2 mr-2 hover:text-slate-500">
            <Link href="#">Blog</Link>
          </li>
          <li className="p-2 hover:text-slate-500">
            <Link href="#">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center sm:hidden">
        <button className="h-[30px] w-[30px]">
          <Image
            alt="menu icon"
            src="/images/icons8-menu.svg"
            width={30}
            height={30}
          />
        </button>
      </div>
    </header>
  );
}
