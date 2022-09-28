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
              <p className="mr-5 text-neutral-600 font-bold dark:text-neutral-50">
                {post.description}
              </p>
              <Link href={`/blog/${post.slug}`}>
                <a
                  aria-label={`link to blog post titled ${post.title}`}
                  className="text-blue-600 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600"
                >
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
