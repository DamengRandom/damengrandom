import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="author" content="dameng"></meta>
          <meta name="keywords" content="dameng, damengrandom, speedi, tipify(DM), damon" />
          <meta name="description" content="Who is damengrandom?" />
          <title>Dameng - DamengRandom</title>
          <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
