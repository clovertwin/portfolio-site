import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return { props: { posts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dates = posts.map((post) => {
    let dt = new Date(post.date.split("T")[0]);
    return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  });

  return (
    <div>
      <div className="text-center">
        <div className="border-b-4 border-blue-600 inline-block mb-5 sm:mb-10 dark:border-sky-500">
          <h1 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-4xl sm:text-5xl dark:text-neutral-50">
            Blog posts
          </h1>
        </div>
      </div>
      <div className="text-lg sm:text-xl ">
        <ul>
          {posts.map((post, id) => (
            <li
              key={post.slug}
              className="mt-5 pl-4 flex flex-col justify-start sm:flex-row sm:pl-0"
            >
              <time
                dateTime={post.date}
                className="text-slate-800 mr-5 before:content-['-'] dark:text-neutral-50"
              >
                {format(dates[id], "LLLL d, yyyy")}
              </time>
              <p className="mr-5 text-neutral-500 font-bold dark:text-neutral-50">
                {post.description}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <a className="text-blue-600 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600">
                  read more...
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
