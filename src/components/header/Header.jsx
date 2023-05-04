import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  background-color: gray;
  height: 5rem;
  position: fixed;
  width: 100%;
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
