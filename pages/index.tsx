import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      date: post.date,
      description: post.description,
      title: post.title,
    }));
  return { props: { posts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <Header />
      <AboutMe />
      <Projects />
      <Blog posts={posts} />
      <Contact />
    </main>
  );
}
