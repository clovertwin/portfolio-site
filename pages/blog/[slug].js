import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  return {
    props: {
      post: allPosts.find((post) => post.slug === params?.slug),
    },
  };
};

export default function SinglePostPage({ post }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="prose">
      <h1>{post.title}</h1>
      <MDXContent />
    </div>
  );
}
