import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export const getStaticProps = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className="prose">
          <h2>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
