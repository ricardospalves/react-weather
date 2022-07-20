import classNames from 'classnames'
import { IconBase } from 'react-icons'
import {
  MdError as ErrorIcon,
  MdLocationOff as LocationOffIcon,
} from 'react-icons/md'

type Theme = {
  classes: string
  Icon: typeof IconBase
}

type ThemesKeys = 'danger' | 'neutral'

const THEMES: Record<ThemesKeys, Theme> = {
  danger: {
    classes:
      'border bg-red-400 border-red-600 dark:bg-red-600 dark:border-red-800',
    Icon: ErrorIcon,
  },
  neutral: {
    classes: '',
    Icon: LocationOffIcon,
  },
}

type CurrentWeatherErrorProps = {
  heading: string
  description: string
  theme?: keyof typeof THEMES
}

export const CurrentWeatherError = ({
  description,
  heading,
  theme,
}: CurrentWeatherErrorProps) => {
  const { Icon, classes } = THEMES[theme || 'neutral']

  return (
    <section
      className={classNames([
        'rounded p-4 text-center max-w-sm mx-auto mt-8',
        classes,
      ])}
    >
      <Icon
        className="block w-12 h-12 fill-current mx-auto"
        aria-hidden={true}
      />

      <h2 className="font-bold mb-4 text-3xl">{heading}</h2>

      <p>{description}</p>
    </section>
  )
}
