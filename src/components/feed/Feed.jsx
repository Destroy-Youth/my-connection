import React, { useState } from 'react'
import styled from 'styled-components'
import useGetMovies from '../../hooks/useGetMovies'
import { Post } from '../post/Post'

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

  // if (!!error) return <p>Error!!</p>

  // if (isLoading) return <p>Loading...</p>

  return (
    <Container>
      {/* <NewPostForm /> */}
      {!data ||
        data.map(moviePost => <Post key={moviePost._id}>{moviePost}</Post>)}
    </Container>
  )
}

export default Feed
