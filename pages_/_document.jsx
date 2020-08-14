import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import documentLang from 'next-translate/documentLang'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang={documentLang(this.props)}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
