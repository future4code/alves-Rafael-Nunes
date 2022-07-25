import React from 'react'
import styled from 'styled-components'

const StyleCard = styled.div`
  border: 1px solid black;
  margin: 10px;
`

export default function CardViagens() {
  return (
    <StyleCard>
      <h4>Nome: Lugar Maravilhoso</h4>
      <h5>Descrição: é um lugar bonito</h5>
      <h5>Planeta: Terra</h5>
      <h5>Duração: 100</h5>
      <h5> 2024-12-31</h5>
    </StyleCard>
  )
}
