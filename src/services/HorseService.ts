import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3016',
})

const fetchHorseList = async () => {
  const { data } = await client.get('/horse')

  return data
}

const fetchHorseById = async (horseId: string) => {
  const { data } = await client.get(`/horse/${horseId}`)

  return data
}

const useHorses = () => {
  const { data } = useQuery(['horses'], fetchHorseList)

  return data
}

const useHorse = <T>(horseId: string): T => {
  const { data } = useQuery(['horses', horseId], () => fetchHorseById(horseId))

  return data
}

export { useHorses, useHorse }
