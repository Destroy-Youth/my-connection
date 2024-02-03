import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { GET_COMMENTS_PATH } from '../utils/constants'
import { getComments } from '../services/commentService'

export default function useGetComments(movieId) {
  return useQuery({
    queryKey: [`comments-${movieId}`],
    queryFn: () => getComments(movieId),
  })
}
