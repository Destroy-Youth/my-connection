import React from 'react'
import { useForm } from 'react-hook-form'

export const NewPostForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>What are you thinking?</label>
        <input {...register('postText')} />
        <input type="submit" />
      </form>
    </div>
  )
}
