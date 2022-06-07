import type { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'

type Props = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode
}

export const HtmlLink: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <a
      className={classNames([
        'underline text-blue-700 hover:text-blue-900 focus-visible:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 dark:focus-visible:text-blue-300 transition-colors',
        className,
      ])}
      {...rest}
    >
      {children}
    </a>
  )
}
