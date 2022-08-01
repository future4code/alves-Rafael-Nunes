import React from 'react'
import styled from 'styled-components'

const ContainerFinal = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Final() {
  return (
    <ContainerFinal>
      <h1>Cadastro Completo!</h1>
      <h2>aguarde nossa resposta</h2>
    </ContainerFinal>
  )
}
