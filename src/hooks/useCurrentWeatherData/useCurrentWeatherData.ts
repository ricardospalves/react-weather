import { useQuery } from 'react-query'

import type {
  GetCurrentWeatherDataResponseData,
  GetCurrentWeatherDataProps,
} from 'src/service/api/getCurrentWeatherData'
import { getCurrentWeatherData } from 'src/service/api/getCurrentWeatherData'

export type UseCurrentWeatherDataParams = GetCurrentWeatherDataProps

export type UseCurrentWeatherDataData = GetCurrentWeatherDataResponseData

const fetcher = async (params: UseCurrentWeatherDataParams) => {
  const { data } = await getCurrentWeatherData(params)

  return data as GetCurrentWeatherDataResponseData
}

export const useCurrentWeatherData = (params: UseCurrentWeatherDataParams) => {
  const query = useQuery(
    ['currentWeatherData', params],
    () => fetcher(params),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      keepPreviousData: true,
    },
  )

  return query
}
