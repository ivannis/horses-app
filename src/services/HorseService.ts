import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Horse } from './types'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3016',
})

type HorseValues = Partial<Omit<Horse, 'id'>>

const fetchHorseList = async () => {
  const { data } = await client.get('/horse')

  return data
}

const fetchHorseById = async (horseId: string) => {
  const { data } = await client.get(`/horse/${horseId}`)

  return data
}

const updateHorse = async (horseId: string, values: HorseValues) => {
  const { data } = await client.put(`/horse/${horseId}`, values)

  return data
}

const useHorses = (): Horse[] => {
  const { data } = useQuery(['horses'], fetchHorseList)

  return data
}

const useHorse = (horseId: string): Horse => {
  const { data } = useQuery(['horses', horseId], () => fetchHorseById(horseId))

  return data
}

const useUpdateHorse = (horseId: string) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation((values: HorseValues) => updateHorse(horseId, values), {
    onSuccess: () => {
      queryClient.invalidateQueries(['horses', horseId])
    },
  })

  return mutate
}

export { useHorses, useHorse, useUpdateHorse }
