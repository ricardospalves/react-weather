import classNames from 'classnames'
import { Fragment } from 'react'
import { IconBase } from 'react-icons'
import {
  MdArrowDownward as ArrowDownwardIcon,
  MdArrowUpward as ArrowUpwardIcon,
} from 'react-icons/md'

import { TemperatureUnit } from '../TemperatureUnit'

type ListItemProps = {
  text: string
  Icon: typeof IconBase
  temperature: number
  iconTheme: string
}

type MinMaxProps = {
  min: number
  max: number
  className?: string
}

export const MinMax = ({ max, min, className }: MinMaxProps) => {
  const list: ListItemProps[] = [
    {
      text: 'Mínima:',
      Icon: ArrowDownwardIcon,
      temperature: min,
      iconTheme: 'fill-blue-700 dark:fill-blue-500',
    },
    {
      text: 'Máxima:',
      Icon: ArrowUpwardIcon,
      temperature: max,
      iconTheme: 'fill-red-600 dark:fill-red-500',
    },
  ]
  return (
    <dl className={classNames(['flex justify-center font-bold', className])}>
      {list.map(({ Icon, temperature, text, iconTheme }) => {
        return (
          <Fragment key={text}>
            <dt className="shrink-0 last-of-type:before:content-['/'] last-of-type:before:inline-block  last-of-type:before:mx-4">
              {text}
            </dt>

            <dd className="flex shrink-0 ml-2">
              <TemperatureUnit temperature={temperature} className="shrink-0" />

              <Icon
                title={text}
                className={classNames(['shrink-0 w-6 h-6 ml-1', iconTheme])}
                aria-hidden={true}
              />
            </dd>
          </Fragment>
        )
      })}
    </dl>
  )
}
