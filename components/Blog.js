import { useRef } from "react";
import Link from "next/link";
import useSectionVisible from "../hooks/useSectionVisible";

export default function Blog({ posts }) {
  const blogRef = useRef();
  const isBlogVisible = useSectionVisible(blogRef);

  const lastThreePosts = posts.slice(-3);

  return (
    <div
      ref={blogRef}
      className={isBlogVisible ? "animate-slide-up" : "opacity-0"}
    >
      <section
        id="blog"
        className="text-lg mt-20 text-center sm:text-xl sm:mt-40"
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
            You can see all posts{" "}
            <Link href="/blog">
              <a className="text-blue-600 hover:text-blue-400">here</a>
            </Link>
            , or check out some of my recent posts:
          </p>
          <ul>
            {lastThreePosts.map((post) => (
              <li key={post.slug} className="mt-5">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-blue-600 hover:text-blue-400">
                    {post.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
