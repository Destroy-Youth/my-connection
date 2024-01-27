import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  background-color: gray;
  height: 5rem;
  width: 100%;
  position: static;
`

const Title = styled.h1``

const Header = () => {
  return (
    <Bar>
      <Title>MyConnection</Title>
    </Bar>
  )
}

export default Header
