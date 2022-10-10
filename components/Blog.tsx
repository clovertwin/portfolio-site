import { format } from "date-fns";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface Post {
  slug: string;
  date: string;
  description: string;
  title: string;
}

interface Props {
  posts: Post[];
}

const Blog = ({ posts }: Props) => {
  const dates = posts.map((post) => {
    let dt = new Date(post.date.split("T")[0]);
    return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  });

  return (
    <Fade fraction={0.2}>
      <section
        id="blog"
        className="text-lg mt-20 text-center scroll-m-24 sm:text-xl sm:mt-40"
      >
        <div className="border-b-4 border-blue-600 inline-block transition ease-in-out duration-300 dark:border-sky-500">
          <h2 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-3xl sm:text-4xl dark:text-neutral-50">
            Blog posts
          </h2>
        </div>
        <div className="mt-5 p-4 border-2 border-blue-600 rounded-2xl text-left bg-white shadow-lg text-neutral-500 transition ease-in-out duration-300 sm:p-7 dark:border-sky-500 dark:bg-neutral-700 dark:text-neutral-50">
          <h3 className="text-slate-800 font-bold text-xl dark:text-neutral-50">
            This is my personal tech blog, where I write about projects I&apos;m
            working on and new exciting things I come across.
          </h3>
          <p className="mt-5 text-neutral-600 dark:text-neutral-50">
            You can see all of my posts 👉{" "}
            <Link href="/blog">
              <a
                aria-label="link to all blog posts"
                className="underline underline-offset-1 font-bold text-blue-600 transition ease-in-out duration-300 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600"
              >
                here
              </a>
            </Link>
            , or check out some of my recent ones below.
          </p>
          <ul>
            {posts.map((post, id) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="mt-5 rounded-2xl border-2 border-blue-500  p-4 text-left shadow-lg transition ease-in-out duration-300 hover:cursor-pointer hover:bg-gray-200 dark:border-sky-500 dark:bg-neutral-500 dark:hover:bg-neutral-700">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-neutral-50">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1 dark:text-neutral-50">
                      {format(dates[id], "LLLL d, yyyy")}
                    </p>
                    <p className="mt-4 text-neutral-600 text-lg dark:text-neutral-50">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Fade>
  );
};

export default Blog;
