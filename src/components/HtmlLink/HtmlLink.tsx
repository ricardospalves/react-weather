import type { FC, HTMLProps, ReactNode } from 'react'

type Props = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode
}

export const HtmlLink: FC<Props> = ({ children, ...rest }) => {
  return (
    <a
      className="underline text-blue-700 hover:text-blue-900 focus-visible:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 dark:focus-visible:text-blue-300 transition-colors"
      {...rest}
    >
      {children}
    </a>
  )
}
