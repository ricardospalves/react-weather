import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Base: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col text-black bg-white dark:text-white dark:bg-neutral-900">
      {children}
    </div>
  )
}
