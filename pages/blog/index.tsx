import { compareDesc, format } from "date-fns";
import { allPosts } from "contentlayer/generated";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

interface BlogPost {
  slug: string;
  date: string;
  description: string;
  title: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((post) => ({
      slug: post.slug,
      date: post.date,
      description: post.description,
      title: post.title,
    }));
  return { props: { posts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const dates = posts.map((post: BlogPost) => {
    let dt = new Date(post.date.split("T")[0]);
    return new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  });

  return (
    <div>
      <div className="text-center mt-20 md:mt-28">
        <div className="border-b-4 border-blue-600 inline-block mb-5 sm:mb-10 dark:border-sky-500">
          <h1 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-4xl sm:text-5xl dark:text-neutral-50">
            Blog posts
          </h1>
        </div>
      </div>
      <div className="text-lg sm:text-xl ">
        <ul>
          {posts.map((post: BlogPost, id: number) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="mt-5 rounded-2xl border-2 border-blue-500 p-4 text-left shadow-lg transition ease-in-out duration-300 hover:cursor-pointer hover:bg-gray-200 dark:border-sky-500 dark:bg-neutral-700 dark:hover:bg-neutral-500">
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
    </div>
  );
}
