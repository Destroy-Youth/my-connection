import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getUser = async userId => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_GET_USER_PATH}`
  )
  return data
}

export default function useGetUser(userId) {
  return useQuery({
    queryKey: [`user-${userId}`],
    queryFn: () => getUser(userId),
  })
}
