import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { baseHeaders as headers } from '../utils/constants'
import { useContext } from 'react'
import {
  UserContextProvider,
  userContext,
} from '../components/context/UserContext'
import { loginUser } from '../services/userService'

export default function useLoginUser(email, password) {
  const { setUser } = useContext(userContext)

  const user = useMutation({
    queryKey: [`user-${email}`],
    queryFn: () => loginUser(email, password),
  })

  setUser(user)
}
