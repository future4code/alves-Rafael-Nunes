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
  width: 30px;
  height: 30px;
`
//*itens da lista
export default function ListaDeMatches(props) {
  const profile = props.profile
  return (
    <MatchList>
      <StyleAvatar src={profile.photo} />
      <p>{profile.name}</p>
    </MatchList>
  )
}
