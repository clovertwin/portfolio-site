import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";

interface Props {
  mobileNavOpen: boolean;
  setMobileNavOpen: React.Dispatch<boolean>;
}

const MobileMenu = ({ mobileNavOpen, setMobileNavOpen }: Props) => {
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
          <Fade>
            <div className="flex justify-end">
              <div onClick={handleCloseMenu}>
                <IoCloseOutline className="text-blue-600 text-4xl hover:cursor-pointer dark:text-sky-500" />
              </div>
            </div>
            <nav>
              <ul className="text-center mt-14 text-2xl font-inter text-slate-400">
                <li
                  onClick={handleCloseMenu}
                  className="pt-6 hover:text-blue-600"
                >
                  <Link href="/">
                    <a aria-label="link to home page">Home</a>
                  </Link>
                </li>
                <li
                  onClick={handleCloseMenu}
                  className="pt-6 hover:text-blue-600"
                >
                  <Link href="/#aboutMe">
                    <a aria-label="link to about section">About</a>
                  </Link>
                </li>
                <li
                  onClick={handleCloseMenu}
                  className="pt-6 hover:text-blue-600"
                >
                  <Link href="/#projects">
                    <a aria-label="link to projects section">Projects</a>
                  </Link>
                </li>
                <li
                  onClick={handleCloseMenu}
                  className="pt-6 hover:text-blue-600"
                >
                  <Link href="/#blog">
                    <a aria-label="link to blog section">Blog</a>
                  </Link>
                </li>
                <li
                  onClick={handleCloseMenu}
                  className="pt-6 hover:text-blue-600"
                >
                  <Link href="/#contact">
                    <a aria-label="link to contact me section">Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
