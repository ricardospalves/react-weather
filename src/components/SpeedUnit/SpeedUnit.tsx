import { pluralize } from 'src/helpers/pluralize'
import { Abbr } from '../Abbr'

type Props = {
  speed: number
}

export const SpeedUnit = ({ speed }: Props) => {
  speed = Math.round(speed)

  const title = `${Math.abs(speed)} ${pluralize(speed, {
    singular: 'quilômetro',
  })} por hora`

  return <Abbr title={title}>{speed} km/h</Abbr>
}
