import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export async function getStaticProps() {
  return { props: { posts: allPosts } };
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
      <div className="prose prose-blue">
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <h2>
                <Link href={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
