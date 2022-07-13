import { useContext } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CurrentWeatherDataContext } from 'src/contexts/CurrentWeatherDataContext'
import { TemperatureUnit } from '../TemperatureUnit'
import { SpeedUnit } from '../SpeedUnit'
import { ComplementaryWeather } from '../ComplementaryWeather'
import { Skeleton } from '../Skeleton'

export const CurrentWeather = () => {
  const {
    query: { data, isFetching },
  } = useContext(CurrentWeatherDataContext)

  if (isFetching) {
    return (
      <div className="mt-4 p-4">
        <Skeleton className="h-8" />
        <Skeleton className="mt-2 h-6" />
        <Skeleton className="mt-8 mb-1 h-6" />
        <Skeleton className="h-24" />
        <Skeleton className="mt-2 h-6" />
        <Skeleton className="h-14 mt-8" />
      </div>
    )
  }

  if (!data) {
    return null
  }

  const date = data?.dt && new Date(data.dt * 1000)

  return (
    <article className="mt-4 p-4">
      <h2 className="font-bold text-2xl text-center">
        O tempo agora em {data?.name}, {data?.sys.country}
      </h2>

      <p className="text-center mt-2">
        {date &&
          format(date, `EEEE, d 'de' MMMM 'de' yyyy, HH:mm`, {
            locale: ptBR,
          })}
        .
      </p>

      <p className="text-center mt-8 mb-1">{data?.weather[0].description}</p>

      <h3 className="text-center text-8xl font-bold">
        <TemperatureUnit temperature={data?.main.temp || 0} removeDecoration />
      </h3>

      <p className="text-center mt-2">
        Sensação de <TemperatureUnit temperature={data?.main.feels_like || 0} />
        .
      </p>

      <ComplementaryWeather
        className="mt-8"
        list={[
          {
            title: 'Vento',
            description: (
              <SpeedUnit speed={(data && data?.wind.speed * 3.6) || 0} />
            ),
          },
          {
            title: 'Umidade',
            description: `${data?.main.humidity || 0}%`,
          },
        ]}
      />
    </article>
  )
}
