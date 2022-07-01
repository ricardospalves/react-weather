import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { GENERAL } from 'src/constants'
import { Base } from 'src/components/Base'
import { Container } from 'src/components/Container'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { SearchForm } from 'src/components/SearchForm'
import { LocalWeather } from 'src/components/LocalWeather'
import { CurrentWeatherDataProvider } from 'src/contexts/CurrentWeatherDataContext'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{GENERAL.appName}</title>
        <meta name="description" content={GENERAL.description} />
      </Head>

      <CurrentWeatherDataProvider>
        <Base>
          <Header />

          <Container as="main" className="grow py-8" edgePadding>
            <SearchForm />
            <LocalWeather />
          </Container>

          <Footer />
        </Base>
      </CurrentWeatherDataProvider>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  }
}

export default Home
