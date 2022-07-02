import Image from "next/image";
import Link from "next/link";

export default function PageNav({ setMobileNavOpen }) {
  const handleOpenMenu = () => {
    setMobileNavOpen(true);
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-neutral-50 px-5 py-5 shadow-md shadow-neutral-900/5 sm:px-14">
      <div className="rounded-full h-[40px] w-[40px] overflow-hidden ring-4 ring-blue-600 hover:cursor-pointer">
        <Link href="#">
          <a>
            <Image
              alt="photo of me"
              src="/images/profile-pic.jpg"
              width={300}
              height={300}
              priority
            />
          </a>
        </Link>
      </div>
      <div className="font-inter text-neutral-500 hidden sm:block">
        <ul className="flex">
          <li className="p-2 mr-2 hover:text-blue-600">
            <Link href="#aboutMe">About</Link>
          </li>
          <li className="p-2 mr-2 hover:text-blue-600">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="p-2 mr-2 hover:text-blue-600">
            <Link href="#">Contact</Link>
          </li>
          <li className="p-2 mr-2 hover:text-blue-600">
            <Link href="#">Blog</Link>
          </li>
          <li className="p-2 hover:text-blue-600">
            <Link href="#">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden pb-1">
        <button
          onClick={handleOpenMenu}
          className="h-[30px] w-[30px] text-3xl text-blue-600"
        >
          &#9776;
        </button>
      </div>
    </header>
  );
}
