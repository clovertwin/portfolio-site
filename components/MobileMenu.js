import Link from "next/link";

export default function MobileMenu({ mobileNavOpen, setMobileNavOpen }) {
  const handleCloseMenu = () => {
    setMobileNavOpen(false);
  };

  return (
    <div>
      <div
        className={`${
          mobileNavOpen ? "flex" : "hidden"
        } fixed z-50 items-end bg-slate-900/50 pl-10 backdrop-blur w-screen justify-end`}
      >
        <div className="min-h-screen bg-neutral-50 px-4 pt-5 max-w-xs w-full">
          <div className="flex justify-end pr-5">
            <button onClick={handleCloseMenu}>X</button>
          </div>
          <nav>
            <ul className="text-center mt-14 text-2xl font-inter text-slate-400">
              <li className="pt-6 hover:text-blue-600">
                <Link href="#">Home</Link>
              </li>
              <li className="pt-6 hover:text-blue-600">
                <Link href="#aboutMe">About</Link>
              </li>
              <li className="pt-6 hover:text-blue-600">
                <Link href="#projects">Projects</Link>
              </li>
              <li className="pt-6 hover:text-blue-600">
                <Link href="#">Contact</Link>
              </li>
              <li className="pt-6 hover:text-blue-600">
                <Link href="#">Blog</Link>
              </li>
              <li className="pt-6 hover:text-blue-600">
                <Link href="#">Resume</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
