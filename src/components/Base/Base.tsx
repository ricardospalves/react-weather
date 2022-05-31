import type { FC, ReactNode } from 'react'
import { useContext } from 'react'

import { DarkThemeContext } from 'src/context/DarkThemeContext'

type Props = {
  children: ReactNode
}

export const Base: FC<Props> = ({ children }) => {
  const { isDark } = useContext(DarkThemeContext)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col text-black bg-white dark:text-white dark:bg-neutral-900">
        {children}
      </div>
    </div>
  )
}
