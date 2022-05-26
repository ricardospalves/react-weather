import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Weather</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="font-bold">React Weather</h1>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Home
