import Document, { Head, Html, Main, NextScript } from "next/document";
import { Helmet } from "react-helmet";
import { NextSeo } from 'next-seo';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <>
        <NextSeo
          title="DamengRandom"
          description="https://damengrandom.now.sh"
        />
        <Html lang="en">
          <Head>
            <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
              <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet" />
              <meta property="og:title" content="damengrandom" key="ogtitle" />
              <meta property="og:description" content="please come to damengrandom.now.sh" key="ogdesc" />
              <meta property="og:site_name" content="damengrandom" key="ogsitename" />
            </Helmet>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </>
    )
  }
}

export default MyDocument;
