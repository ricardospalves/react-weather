import type { ReactNode } from 'react'
import { Fragment } from 'react'
import classNames from 'classnames'
import { IconBase } from 'react-icons'

type ComplementaryProps = {
  title: string
  description: ReactNode
  Icon?: typeof IconBase
  iconClassName?: string
}

type Props = {
  list: ComplementaryProps[]
  className?: string
}

export const ComplementaryWeather = ({ list, className }: Props) => {
  return (
    <dl className={classNames(['flex justify-center flex-wrap', className])}>
      {list.map(({ description, title, Icon, iconClassName }) => {
        return (
          <Fragment key={title}>
            <dt className="font-bold basis-1/2 shrink-0 p-1 text-right">
              {title}
            </dt>

            <dd
              className={classNames([
                'basis-1/2 shrink-0 text-left p-1',
                Icon && 'flex items-center',
              ])}
            >
              {description}

              {Icon && (
                <Icon
                  className={classNames([
                    'shrink-0 w-6 h-6 ml-1',
                    iconClassName,
                  ])}
                />
              )}
            </dd>
          </Fragment>
        )
      })}
    </dl>
  )
}
