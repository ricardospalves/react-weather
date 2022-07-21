import { pluralize } from 'src/helpers/pluralize'
import { Abbr } from '../Abbr'

type Props = {
  temperature: number
  removeDecoration?: boolean
  className?: string
}

export const TemperatureUnit = ({
  temperature,
  removeDecoration,
  className,
}: Props) => {
  temperature = Math.round(temperature)

  const title = `${Math.abs(temperature)} ${pluralize(temperature, {
    singular: 'grau',
  })} Celsius`
  const negativeTitle = `${title} ${pluralize(temperature, {
    singular: 'negativo',
  })}`
  const isNegative = temperature < 0

  return (
    <Abbr
      title={isNegative ? negativeTitle : title}
      removeDecoration={removeDecoration}
      className={className}
    >
      {temperature}°C
    </Abbr>
  )
}
