import { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  title: string
  removeDecoration?: boolean
  className?: string
}

export const Abbr = ({
  children,
  title,
  removeDecoration,
  className,
}: Props) => {
  return (
    <abbr
      title={title}
      className={classNames([
        'cursor-help',
        removeDecoration && 'no-underline',
        className,
      ])}
    >
      {children}
    </abbr>
  )
}
