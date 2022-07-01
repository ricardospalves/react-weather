import type { SetStateAction, Dispatch } from 'react'
import { createContext, ReactNode, useState } from 'react'
import { UseQueryResult } from 'react-query'

import type { UseCurrentWeatherDataData } from 'src/hooks/useCurrentWeatherData'
import { useCurrentWeatherData } from 'src/hooks/useCurrentWeatherData'

type CurrentWeatherDataContextProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  query: UseQueryResult<UseCurrentWeatherDataData>
}

export const CurrentWeatherDataContext = createContext(
  {} as CurrentWeatherDataContextProps,
)

type Props = {
  children: ReactNode
}

export const CurrentWeatherDataProvider = ({ children }: Props) => {
  const [search, setSearch] = useState('')
  const query = useCurrentWeatherData({
    q: search,
  })

  return (
    <CurrentWeatherDataContext.Provider
      value={{
        search,
        setSearch,
        query,
      }}
    >
      {children}
    </CurrentWeatherDataContext.Provider>
  )
}
