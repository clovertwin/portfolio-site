import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export const getStaticProps = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({ posts }) {
  return (
    <div>
      <div className="border-b-4 border-blue-600 inline-block mb-10">
        <h1 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-4xl sm:text-5xl">
          Blog
        </h1>
      </div>
      <div className="prose prose-blue">
        {posts.map((post) => (
          <div key={post.slug}>
            <h2>
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
