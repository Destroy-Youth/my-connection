import React from 'react'
import styled from 'styled-components'
import { Post } from '../post/Post'

const Container =  styled.div`
  padding-top: 5rem;
`

const Posts = [
  {
    id:'1',
    text: 'Post 1',
    images: [{
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ppeR-2FjZy9Jzg4EKOWcgwHaFj%26pid%3DApi&f=1&ipt=74cc7a599393d169be4a1daa80549781ff0159c8dfedd78e0f6f3d009f477968&ipo=images'
    }],
    likes: 1,
    comments:[{
      comment:'comment 1',
      profile: {
        name: 'name 1',
        picture: 'url'
      }
    }]
  }, {
    id:'2',
    text: 'Post 2',
    images: [{
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ppeR-2FjZy9Jzg4EKOWcgwHaFj%26pid%3DApi&f=1&ipt=74cc7a599393d169be4a1daa80549781ff0159c8dfedd78e0f6f3d009f477968&ipo=images'
    }],
    likes: 1,
    comments:[{
      comment:'comment 2',
      profile: {
        name: 'name 2',
        picture: 'url'
      }
    }]
  }
]

const Feed = () => {


  return (
    <Container>
      {(Posts.map(post => <Post key={post.id}>{post}</Post>))}
    </Container>
  )
}

export default Feed