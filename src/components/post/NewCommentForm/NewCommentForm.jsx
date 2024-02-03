import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { userContext } from '../../context/UserContext'
import useAddCommentMutation from '../../../hooks/useAddCommentMutation'

export const NewCommentForm = ({ moviePost: movie }) => {
  const { register, handleSubmit } = useForm()
  const { user } = useContext(userContext)
  const { mutate: addComment } = useAddCommentMutation(movie._id)

  const onSubmit = data => {
    addComment({
      userId: user._id,
      movieId: movie._id,
      text: data.text,
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>What are you thinking?</label>
        <input {...register('text')} />
        <input type="submit" />
      </form>
    </div>
  )
}
