import React from 'react'
import styled from 'styled-components'
import { Post } from '../post/Post'
import data from '../../services/MockPostsService'
import { NewPostForm } from '../post/NewPostForm/NewPostForm'

const Container = styled.div`
  margin-top: 0.5rem;
  padding: 0.1rem 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Feed = () => {
  return (
    <Container>
      <NewPostForm />
      {data.map(post => (
        <Post key={post.id}>{post}</Post>
      ))}
    </Container>
  )
}

export default Feed