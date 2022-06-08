import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/layout.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Index page</title>
        <meta name="description" content="next tutorial" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <div className='app'>
          <div className='app-top'>
            <Header/>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </SessionProvider>
    </>
  )
}

export default MyApp
