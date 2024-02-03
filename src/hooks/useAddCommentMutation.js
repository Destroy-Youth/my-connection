import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { POST_COMMENTS_PATH, baseHeaders as headers } from '../utils/constants'

const createComment = async newComment => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}${POST_COMMENTS_PATH}`,
    newComment,
    { headers }
  )

  return data
}

export default function useAddCommentMutation(movieId) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`comments-${movieId}`] })
    },
  })
}
