import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
      <Blog posts={posts} />
      <Contact />
    </>
  );
}
