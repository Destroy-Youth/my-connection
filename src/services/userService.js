import axios from 'axios'
import { LOG_USER_PATH, baseHeaders as headers } from '../utils/constants'

export const loginUser = async (email, password) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}${LOG_USER_PATH}`,
    {
      email,
      password,
    },
    {
      headers,
    }
  )
  return data
}
