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

export default function CardPerfil() {
  return (
    <StyleCard>
      <StyleImg src={'https://picsum.photos/300/400'} />
      <InfoPerfil>
        <p>Rafael, 19</p>
        <p>descrição</p>
      </InfoPerfil>
    </StyleCard>
  )
}
