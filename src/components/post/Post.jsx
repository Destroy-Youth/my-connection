import React, { useState } from 'react'
import styled from 'styled-components'
import { ProfilePic } from '../profile-pic/ProfilePic'
import { Content } from './content/Content'
import { Actions } from './actions/Actions'
import { Comment } from './comment/Comment'
import useGetComments from '../../hooks/useGetComments'
import { NewCommentForm } from './NewCommentForm/NewCommentForm'

const Container = styled.div`
  min-height: 6rem;
  margin: 0.5rem;
  border: 1px solid ${props => props.theme.detail};
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 3px 3px 5px grey;
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.fontColor};
`

export const Post = ({ children: moviePost }) => {
  const [showComments, setShowComments] = useState(false)
  const { data: comments } = useGetComments(moviePost._id)

  const mapComments = commentsArray => {
    if (!commentsArray) {
      return <></>
    }

    return commentsArray.map(comment => (
      <Comment key={comment._id} {...{ comment }} />
    ))
  }

  return (
    <Container>
      <ProfilePic />
      <Content {...moviePost} />
      <Actions {...{ setShowComments, showComments }} />
      {!showComments || mapComments(comments)}
      {!showComments || <NewCommentForm {...{ moviePost }} />}
    </Container>
  )
}
