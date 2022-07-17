import Link from "next/link";
import CloseIcon from "./CloseIcon";

export default function MobileMenu({ mobileNavOpen, setMobileNavOpen }) {
  const handleCloseMenu = () => {
    setMobileNavOpen(false);
  };

  return (
    <div>
      <div
        className={`${
          mobileNavOpen ? "flex" : "hidden"
        } fixed z-40 items-end bg-slate-900/50 pl-10 backdrop-blur w-screen justify-end`}
      >
        <div className="min-h-screen bg-neutral-50 px-4 pt-5 max-w-xs w-full">
          <div className="flex justify-end pr-2">
            <div onClick={handleCloseMenu}>
              <CloseIcon />
            </div>
          </div>
          <nav>
            <ul className="text-center mt-14 text-2xl font-inter text-slate-400">
              <li
                onClick={handleCloseMenu}
                className="pt-6 hover:text-blue-600"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleCloseMenu}
                className="pt-6 hover:text-blue-600"
              >
                <Link href="/#aboutMe">About</Link>
              </li>
              <li
                onClick={handleCloseMenu}
                className="pt-6 hover:text-blue-600"
              >
                <Link href="/#projects">Projects</Link>
              </li>
              <li
                onClick={handleCloseMenu}
                className="pt-6 hover:text-blue-600"
              >
                <Link href="/#blog">Blog</Link>
              </li>
              <li
                onClick={handleCloseMenu}
                className="pt-6 hover:text-blue-600"
              >
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
