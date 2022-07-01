import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: process.env.NEXT_PUBLIC_API_KEY,
    units: 'metric',
    lang: 'pt_br',
  },
})
