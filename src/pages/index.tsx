import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { GENERAL } from 'src/constants'
import { Base } from 'src/components/Base'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{GENERAL.appName}</title>
        <meta name="description" content={GENERAL.description} />
      </Head>

      <Base>
        <Header />

        <main className="grow">
          <h1 className="font-bold">React Weather</h1>
        </main>

        <Footer />
      </Base>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Home
