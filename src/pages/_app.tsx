import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { CurrentWeatherDataProvider } from 'src/contexts/CurrentWeatherDataContext'
import 'src/styles/index.css'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrentWeatherDataProvider>
        <Component {...pageProps} />
      </CurrentWeatherDataProvider>
    </QueryClientProvider>
  )
}

export default MyApp
