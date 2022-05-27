import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { Footer } from 'src/components/Footer'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col text-black bg-white dark:text-white dark:bg-neutral-900">
      <Head>
        <title>React Weather</title>
      </Head>

      <main className="grow">
        <h1 className="font-bold">React Weather</h1>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Home
