export default function MobileMenu(props) {
  return (
    <div>
      <div className="flex fixed z-50 items-end bg-slate-900/50 pl-10 backdrop-blur w-screen justify-end">
        <div className="min-h-screen bg-neutral-50 px-4 pt-5">
          <button>X</button>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>blog</li>
              <li>Resume</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
