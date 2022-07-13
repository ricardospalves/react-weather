import { SetStateAction, Dispatch, useEffect, useCallback } from 'react'
import { createContext, ReactNode, useState } from 'react'
import { UseQueryResult } from 'react-query'

import type { UseCurrentWeatherDataData } from 'src/hooks/useCurrentWeatherData'
import { useCurrentWeatherData } from 'src/hooks/useCurrentWeatherData'

type Coordinates = {
  latitude?: number
  longitude?: number
}

type CurrentWeatherDataContextProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  coordinates: Coordinates
  setCoordinates: Dispatch<SetStateAction<Coordinates>>
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
  const [coordinates, setCoordinates] = useState<Coordinates>({
    latitude: undefined,
    longitude: undefined,
  })
  const query = useCurrentWeatherData({
    q: search,
    lat: coordinates.latitude,
    lon: coordinates.longitude,
  })
  const { refetch } = query

  const dispatchRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  useEffect(() => {
    const { latitude, longitude } = coordinates

    if (latitude && longitude) {
      dispatchRefetch()
    }
  }, [coordinates, dispatchRefetch])

  return (
    <CurrentWeatherDataContext.Provider
      value={{
        search,
        setSearch,
        query,
        coordinates,
        setCoordinates,
      }}
    >
      {children}
    </CurrentWeatherDataContext.Provider>
  )
}
