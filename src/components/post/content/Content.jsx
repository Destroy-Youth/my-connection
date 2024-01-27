import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  padding: 0.2rem;
  width: 100%;
  border-radius: 5px;
`

const ImageContainer = styled.div`
  margin: 0.5rem;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Content = ({ children: content }) => {
  return (
    <section>
      <div>{content.text}</div>
      {!content.image || (
        <ImageContainer>
          <Image src={content.image.url} />
        </ImageContainer>
      )}
    </section>
  )
}
