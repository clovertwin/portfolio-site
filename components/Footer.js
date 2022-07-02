export default function Footer() {
  return (
    <footer className="text-center py-14 bg-neutral-50 text-black">
      <div>
        <p>Shaun Carr 2022</p>
        <div className="mt-2">
          Built using{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-600"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-600"
          >
            Tailwindcss
          </a>
          , and{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-600"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}
