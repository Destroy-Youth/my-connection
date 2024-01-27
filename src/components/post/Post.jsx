import React from 'react'
import styled from 'styled-components'
import { ProfilePic } from '../profile-pic/ProfilePic'
import { Content } from './content/Content'

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

const Text = styled.div``

export const Post = ({ children: post }) => {
  return (
    <Container>
      <ProfilePic />
      <Content>{post.content}</Content>
    </Container>
  )
}
