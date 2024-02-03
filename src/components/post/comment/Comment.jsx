import React from 'react'

export const Comment = ({ comment }) => {
  return (
    <div>
      <h3>{comment.name}</h3>
      <p>{comment.text}</p>
    </div>
  )
}
