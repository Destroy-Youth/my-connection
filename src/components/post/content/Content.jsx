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

const MovieTitle = styled.h1`
  color: ${props => props.theme.postTitle};
`

const DirectorReference = styled.h2`
  font-size: 1rem;
`

export const Content = ({ plot: text, poster: image, title, directors }) => {
  const mapDirectors = directors => {
    let directorsString = ''
    directors.map((director, i) => {
      directorsString += director
      if (i != directors.length - 1) directorsString += ', '
    })
    return directorsString
  }

  return (
    <Container>
      <MovieTitle>{title}</MovieTitle>
      <DirectorReference>by {mapDirectors(directors)}</DirectorReference>
      <p>{text}</p>
      {!image || (
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      )}
    </Container>
  )
}
