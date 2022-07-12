import React from 'react'
import styled from 'styled-components'

const StyleCard = styled.div`
  margin: 15px;
  border: 1px solid black;
`
const StyleImg = styled.img`
  width: 100%;
  display: block;
`

const InfoPerfil = styled.div`
  padding: 16px;
`

export default function CardPerfil(props) {
  const profile = props.profile
  return (
    <StyleCard>
      <StyleImg src={'https://picsum.photos/300/400'} />
      <InfoPerfil>
        <p>
          {profile.name}, {profile.age}
        </p>
        <p>{profile.bio}</p>
      </InfoPerfil>
    </StyleCard>
  )
}
