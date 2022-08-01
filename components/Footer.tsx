const Footer = () => {
  return (
    <footer className="text-center py-14 bg-neutral-50 text-black transition ease-in-out duration-300 dark:bg-zinc-800 dark:text-neutral-50">
      <div>
        <p className="text-neutral-500 dark:text-neutral-50">Shaun Carr 2022</p>
        <div className="mt-2 text-neutral-500 dark:text-neutral-50">
          Built using{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500 dark:hover:text-sky-600"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500 dark:hover:text-sky-600"
          >
            Tailwindcss
          </a>
          , and{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 transition ease-in-out duration-300 hover:text-blue-600 dark:text-sky-500 dark:hover:text-sky-600"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
