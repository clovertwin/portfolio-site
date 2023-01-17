import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Layout from "../components/Layout";
import { SmoothScroll } from "components/SmoothScroll";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SmoothScroll>
        <Head>
          <title>Shaun Carr</title>
          <meta name="description" content="shauncarr.dev" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
        </Head>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </SmoothScroll>
    </>
  );
}

export default MyApp;
