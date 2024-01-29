import React, { useState } from 'react'
import styled from 'styled-components'
import { Post } from '../post/Post'
import data from '../../services/MockPostsService'
import { NewPostForm } from '../post/NewPostForm/NewPostForm'
import useGetMovies from '../../hooks/useGetMovies'

const Container = styled.div`
  margin-top: 0.5rem;
  padding: 0.1rem 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Feed = () => {
  const { isLoading, error, data } = useGetMovies()

  const [show, setShow] = useState(false)

  console.log(data)

  // if (!!error) return <p>Error!!</p>

  // if (isLoading) return <p>Loading...</p>

  return (
    <Container>
      <NewPostForm />
      {!data ||
        data.map(moviePost => <Post key={moviePost._id}>{moviePost}</Post>)}
    </Container>
  )
}

export default Feed
