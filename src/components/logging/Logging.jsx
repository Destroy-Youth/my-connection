import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../services/userService'
import { userContext } from '../context/UserContext'

export const Logging = () => {
  const { register, handleSubmit, setValue } = useForm()
  //FIXME add logging process
  const { setUser } = useContext(userContext)

  //FIXME replace for actual process of login
  useEffect(() => {
    setValue('email', 'lena_headey@gameofthron.es')
    setValue(
      'password',
      '$2b$12$FExjgr7CLhNCa.oUsB9seub8mqcHzkJCFZ8heMc8CeIKOZfeTKP8m'
    )
  }, [])

  const onsubmit = async data => {
    const fetchedUser = await loginUser(data.email, data.password)
    setUser(fetchedUser)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label>email</label>
        <input {...register('email')} />
        <label>password</label>
        <input {...register('password')} />
        <input type="submit" />
      </form>
    </div>
  )
}
