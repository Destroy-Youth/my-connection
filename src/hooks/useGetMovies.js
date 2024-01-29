import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { GET_MOVIES_PATH } from '../utils/constants'

const getMovies = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${GET_MOVIES_PATH}`
  )
  return data
}

export default function useGetMovies() {
  return useQuery({ queryKey: ['movies'], queryFn: getMovies })
}
