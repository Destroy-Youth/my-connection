import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Heart } from '../../../assets/svg/posts/actions/heart.svg'
import { ReactComponent as Comment } from '../../../assets/svg/posts/actions/comment.svg'

const Bar = styled.div`
  border-top: 1px solid #908d96b0;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
`

const ActionButton = styled.div`
  cursor: pointer;
  height: 1.5rem;
  display: flex;
  flex-grow: 1;

  &:active {
    background-color: ${props => props.theme.active};
  }

  svg {
    height: 100%;
    width: 100%;
  }
`

export const Actions = () => {
  return (
    <Bar>
      <ActionButton>
        <Comment />
      </ActionButton>
      <ActionButton>
        <Heart />
      </ActionButton>
    </Bar>
  )
}
