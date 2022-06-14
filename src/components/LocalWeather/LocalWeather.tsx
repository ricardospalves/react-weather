import { TemperatureUnit } from '../TemperatureUnit'
import { SpeedUnit } from '../SpeedUnit'
import { ComplementaryWeather } from '../ComplementaryWeather'

type Props = {
  temperature: number
}

export const LocalWeather = ({ temperature }: Props) => {
  return (
    <article className="mt-4 p-4">
      <h2 className="font-bold text-2xl text-center">
        O tempo agora em Lorem Ipsum, XX
      </h2>

      <p className="text-center mt-2">Sexta-feira, 00 de junho de 2022.</p>

      <p className="text-center mt-8 mb-1">Lorem ipsum dolor.</p>

      <h3 className="text-center text-8xl font-bold">
        <TemperatureUnit temperature={temperature} removeDecoration />
      </h3>

      <p className="text-center mt-2">
        Sensação de <TemperatureUnit temperature={temperature} />.
      </p>

      <ComplementaryWeather
        className="mt-8"
        list={[
          {
            title: 'Vento',
            description: <SpeedUnit speed={0} />,
          },
          {
            title: 'Umidade',
            description: '0%',
          },
        ]}
      />
    </article>
  )
}
