import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Base } from 'src/components/Base'
import { Footer } from 'src/components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Weather</title>
      </Head>

      <Base>
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
