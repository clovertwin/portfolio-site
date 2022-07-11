import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: allPosts.find((post) => post.slug === params?.slug),
    },
  };
}

export default function SinglePostPage({ post }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <div className="absolute top-10 text-blue-600 hover:text-blue-400">
        <Link href="/blog">
          <a>&#8592; Back to all posts</a>
        </Link>
      </div>
      <div className="text-center">
        <div className="border-b-4 border-blue-600 inline-block mb-10 mt-10 sm:mb-20 sm:mt-0">
          <h1 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-4xl sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </div>
      <div className="prose prose-neutral sm:prose-lg">
        <MDXContent />
      </div>
    </>
  );
}
