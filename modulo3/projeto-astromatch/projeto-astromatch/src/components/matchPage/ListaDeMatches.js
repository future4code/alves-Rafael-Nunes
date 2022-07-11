import React from 'react'
import styled from 'styled-components'

const MatchList = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 10px;
  justify-content: space-around;

  :hover {
    background-color: gray;
  }
`
const StyleAvatar = styled.img`
  border-radius: 50%;
`

export default function ListaDeMatches() {
  return (
    <MatchList>
      <StyleAvatar src={'https://picsum.photos/30/30'} />
      <p>pessoa</p>
    </MatchList>
  )
}
