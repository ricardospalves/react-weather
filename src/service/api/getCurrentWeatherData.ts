import { apiClient } from './apiClient'

type Coordinates = {
  lon: number
  lat: number
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

type Wind = {
  speed: number
  deg: number
}

type Clouds = {
  all: number
}

type Sys = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type GetCurrentWeatherDataResponseData = {
  coord: Coordinates
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
  message?: string
}

export type GetCurrentWeatherDataProps = {
  q?: string
  lat?: number
  lon?: number
}

export const getCurrentWeatherData = async ({
  q,
  lat,
  lon,
}: GetCurrentWeatherDataProps) => {
  const response = await apiClient.get('weather', {
    params: {
      ...(q && { q }),
      ...(lat && { lat }),
      ...(lon && { lon }),
    },
  })

  return response
}
