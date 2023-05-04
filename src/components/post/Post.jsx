import React from 'react'
import styled from 'styled-components'
import { ProfilePic } from '../profile-pic/ProfilePic'

const Container = styled.div`
  min-height: 6rem;
  margin: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 3px 3px 5px grey;
`

const Text = styled.div``

export const Post = ({ children: post }) => {
  return (
    <Container>
      <ProfilePic />
      <Text>{post.text}</Text>
    </Container>
  )
}
