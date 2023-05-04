import React from 'react'
import { ReactComponent as ProfileLogo } from '../../assets/svg/profile-circle.svg'
import styled from 'styled-components'

const Container = styled.div`
  height: 2rem;
  width: 2rem;

  svg {
    height: 100%;
    width: 100%;
  }
`

export const ProfilePic = () => {
  return (
    <Container>
      <ProfileLogo/>
    </Container>
  )
}
