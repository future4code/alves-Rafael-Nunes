import React from 'react'
import styled from 'styled-components'

const StyleCard = styled.div`
  margin: 15px;
  border: 1px solid black;
  display: block;
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
      <StyleImg src={profile.photo} />
      <InfoPerfil>
        <p>
          {profile.name}, {profile.age}
        </p>
        <p>{profile.bio}</p>
      </InfoPerfil>
    </StyleCard>
  )
}
