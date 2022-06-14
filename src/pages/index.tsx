import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { GENERAL } from 'src/constants'
import { Base } from 'src/components/Base'
import { Container } from 'src/components/Container'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { SearchForm } from 'src/components/SearchForm'
import { LocalWeather } from 'src/components/LocalWeather'

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
          <LocalWeather temperature={0} />
        </Container>
        {/* https://api.openweathermap.org/data/2.5/weather?q=s%C3%A3o+paulo&appid=4d8fb5b93d4af21d66a2948710284366&units=celcius&lang=pt_br */}

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
