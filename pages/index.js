import { allPosts } from "contentlayer/generated";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export async function getStaticProps() {
  return { props: { posts: allPosts } };
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
