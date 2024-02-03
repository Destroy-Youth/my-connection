import axios from 'axios'
import { GET_COMMENTS_PATH } from '../utils/constants'

export const getComments = async movieId => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}${GET_COMMENTS_PATH}`,
    {
      params: {
        movieId,
      },
    }
  )
  return data
}
