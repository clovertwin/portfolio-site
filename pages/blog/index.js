import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return { props: { posts } };
}

export default function PostListPage({ posts }) {
  return (
    <div>
      <div className="text-center">
        <div className="border-b-4 border-blue-600 inline-block mb-5 sm:mb-10">
          <h1 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-4xl sm:text-5xl">
            Blog posts
          </h1>
        </div>
      </div>
      <div className="prose prose-blue text-lg sm:text-xl ">
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mt-5">
              <div className="flex justify-start items-center">
                <time dateTime={post.date} className="text-slate-800 mr-5">
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
    </div>
  );
}
