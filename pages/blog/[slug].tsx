import Link from "next/link";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { allPosts, type Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({
  params,
}) => ({
  props: {
    post: allPosts.find((post) => post.slug === params?.slug),
  },
});

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <div className="absolute top-10 text-blue-600 hover:text-blue-400 dark:text-sky-500 dark:hover:text-sky-600">
        <Link href="/blog">
          <a>&#8592; Back to all posts</a>
        </Link>
      </div>
      <div className="text-center mt-20 md:mt-28">
        <div className="border-b-4 border-blue-600 inline-block mb-10 mt-10 sm:mb-20 sm:mt-0 dark:border-sky-500">
          <h1 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-4xl sm:text-5xl dark:text-neutral-50">
            {post.title}
          </h1>
        </div>
      </div>
      <div className="prose prose-neutral prose-lg sm:prose-xl dark:prose-invert">
        <MDXContent />
      </div>
    </>
  );
}
