import type { ReactNode } from 'react'
import { Fragment } from 'react'
import classNames from 'classnames'

type ComplementaryProps = {
  title: string
  description: ReactNode
}

type Props = {
  list: ComplementaryProps[]
  className?: string
}

export const ComplementaryWeather = ({ list, className }: Props) => {
  return (
    <dl className={classNames(['flex justify-center flex-wrap', className])}>
      {list.map(({ description, title }) => {
        return (
          <Fragment key={title}>
            <dt className="font-bold basis-1/2 shrink-0 p-1 text-right">
              {title}
            </dt>
            <dd className="basis-1/2 shrink-0 text-left p-1">{description}</dd>
          </Fragment>
        )
      })}
    </dl>
  )
}
