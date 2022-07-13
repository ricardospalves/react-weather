import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { GENERAL } from 'src/constants'
import { Base } from 'src/components/Base'
import { Container } from 'src/components/Container'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { SearchForm } from 'src/components/SearchForm'
import { CurrentWeather } from 'src/components/CurrentWeather'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{GENERAL.appName}</title>
        <meta name="description" content={GENERAL.description} />
      </Head>

      <Base>
        <Header />

        <Container as="main" className="grow py-8" edgePadding>
          <SearchForm />
          <CurrentWeather />
        </Container>

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
