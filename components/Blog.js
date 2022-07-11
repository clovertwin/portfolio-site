import { format, parseISO } from "date-fns";
import { useRef } from "react";
import Link from "next/link";
import useSectionVisible from "../hooks/useSectionVisible";

export default function Blog({ posts }) {
  const blogRef = useRef();
  const isBlogVisible = useSectionVisible(blogRef);

  return (
    <div
      ref={blogRef}
      className={isBlogVisible ? "animate-slide-up" : "opacity-0"}
    >
      <section
        id="blog"
        className="text-lg mt-20 text-center scroll-m-24 sm:text-xl sm:mt-40"
      >
        <div className="border-b-4 border-blue-600 inline-block">
          <h2 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-3xl sm:text-4xl">
            Blog posts
          </h2>
        </div>
        <div className="mt-5 p-4 border-2 border-blue-600 rounded-2xl text-left bg-white shadow-lg text-neutral-500 sm:p-7">
          <h3 className="text-slate-800 font-bold text-xl">
            This is my personal tech blog, where I write about projects I&apos;m
            working on and new exciting things I come across.
          </h3>
          <p className="mt-5">
            You can see all of my posts{" "}
            <Link href="/blog">
              <a className="underline underline-offset-1 text-blue-600 hover:text-blue-400">
                here
              </a>
            </Link>
            , or check out some of my recent ones below.
          </p>
          <ul>
            {posts.map((post) => (
              <li key={post.slug} className="mt-5">
                <div className="flex flex-col justify-start sm:flex-row">
                  <time
                    dateTime={post.date}
                    className="text-slate-800 mr-5 before:content-['-']"
                  >
                    {format(parseISO(post.date), "LLLL d, yyyy")}
                  </time>
                  <p className="mr-5">{post.description}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-blue-600 hover:text-blue-400">
                      read more...
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
