import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>

        {/*Link For the google Font lobster that was used*/}
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com crossorigin"/>
            <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
        </Head>

        {/*Background color for the whole page(Changes on dark mode and light mode)*/}
        <body className='bg-gradient-to-r from-red-700 to-blue dark:from-dark-500 dark:to-dark-100 dark:text-yellow-50'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument