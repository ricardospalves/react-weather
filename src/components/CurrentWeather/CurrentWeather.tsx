import { useContext } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { MdAir as AirIcon, MdWaterDrop as WaterDropIcon } from 'react-icons/md'

import { CurrentWeatherDataContext } from 'src/contexts/CurrentWeatherDataContext'
import { TemperatureUnit } from '../TemperatureUnit'
import { SpeedUnit } from '../SpeedUnit'
import { ComplementaryWeather } from '../ComplementaryWeather'
import { Skeleton } from '../Skeleton'
import { MinMax } from '../MinMax'

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
    <article className="mt-4 py-4">
      <h2 className="font-bold text-2xl text-center">
        O tempo agora em {data.name}, {data.sys.country}
      </h2>

      <p className="text-center mt-2">
        {date &&
          format(date, `EEEE, d 'de' MMMM 'de' yyyy, HH:mm`, {
            locale: ptBR,
          })}
        .
      </p>

      <p className="text-center mt-8">{data.weather[0].description}</p>

      <h3 className="text-center text-8xl font-bold">
        <TemperatureUnit temperature={data.main.temp || 0} removeDecoration />
      </h3>

      <p className="text-center">
        Sensação de <TemperatureUnit temperature={data.main.feels_like || 0} />.
      </p>

      <MinMax
        min={data.main.temp_min}
        max={data.main.temp_max}
        className="mt-8"
      />

      <ComplementaryWeather
        className="mt-8"
        list={[
          {
            title: 'Vento:',
            description: (
              <SpeedUnit speed={(data && data.wind.speed * 3.6) || 0} />
            ),
            Icon: AirIcon,
            iconClassName: 'fill-gray-500 dark:fill-gray-400',
          },
          {
            title: 'Umidade:',
            description: `${data.main.humidity || 0}%`,
            Icon: WaterDropIcon,
            iconClassName: 'fill-blue-700 dark:fill-blue-500',
          },
        ]}
      />
    </article>
  )
}
