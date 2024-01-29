import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  padding: 0.2rem;
  width: 100%;
  border-radius: 5px;
`

const ImageContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Container = styled.section`
  padding: 0.5rem;
`

export const Content = ({ plot: text, poster: image }) => {
  return (
    <Container>
      <p>{text}</p>
      {!image || (
        <ImageContainer>
          <Image src={image.url} />
        </ImageContainer>
      )}
    </Container>
  )
}
