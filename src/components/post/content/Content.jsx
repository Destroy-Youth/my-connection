import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  padding: 0.2rem;
`

const ImageContainer = styled.div`
  margin: 0.1rem;
  border-radius: 8px;
`

export const Content = ({ children: content }) => {
  return (
    <section>
      <div>{content.text}</div>

      {/* {!content.images.length || (
        <ImageContainer>
          {content.images.map(image => (
            <Image src={image.url}></Image>
          ))}
        </ImageContainer>
      )} */}
    </section>
  )
}
