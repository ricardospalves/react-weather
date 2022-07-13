import { useContext } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { AxiosError } from 'axios'

import { CurrentWeatherDataContext } from 'src/contexts/CurrentWeatherDataContext'
import { GENERAL } from 'src/constants'
import { Base } from 'src/components/Base'
import { Container } from 'src/components/Container'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { SearchForm } from 'src/components/SearchForm'
import { CurrentWeather } from 'src/components/CurrentWeather'
import { CurrentWeatherError } from 'src/components/CurrentWeatherError'

const Home: NextPage = () => {
  const { query } = useContext(CurrentWeatherDataContext)
  const isError = query.isError
  const error = query.error as AxiosError

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

          {isError && error?.response?.status === 404 && (
            <CurrentWeatherError
              heading="Localidade não encontrada"
              description="Desculpe, não encontramos nenhuma localidade. Por favor, verifique se o nome está correto ou tente outra localidade."
            />
          )}

          {isError && error?.response?.status !== 404 && (
            <CurrentWeatherError
              heading="Erro desconhecido"
              description="Desculpe, ocorreu um erro desconhecido, por favor, tente novamente. Se o problema continuar, tente novamente em alguns minutos."
            />
          )}

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
