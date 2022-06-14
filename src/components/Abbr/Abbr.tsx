import { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  title: string
  removeDecoration?: boolean
}

export const Abbr = ({ children, title, removeDecoration }: Props) => {
  return (
    <abbr
      title={title}
      className={classNames([
        'cursor-help',
        removeDecoration && 'no-underline',
      ])}
    >
      {children}
    </abbr>
  )
}
