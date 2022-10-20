import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            // crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Manrope:wght@700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="preload" as="image" href="/images/profile-pic.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
