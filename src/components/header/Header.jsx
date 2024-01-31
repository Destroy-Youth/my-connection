import React, { useContext } from 'react'
import styled from 'styled-components'
import { userContext } from '../context/UserContext'

const Bar = styled.div`
  background-color: gray;
  height: 5rem;
  width: 100%;
  position: static;
`

const Title = styled.h1``

const LogOutButton = styled.button``

const Header = () => {
  const { setUser } = useContext(userContext)

  return (
    <Bar>
      <Title>MyConnection</Title>
      <LogOutButton onClick={() => setUser(null)}>Log out</LogOutButton>
    </Bar>
  )
}

export default Header
