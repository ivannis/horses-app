import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3016',
})

const fetchHorseList = async () => {
  const { data } = await client.get('/horse')

  return data
}

const useHorses = () => {
  const { data } = useQuery(['horses'], fetchHorseList)

  return data
}

export { useHorses }
