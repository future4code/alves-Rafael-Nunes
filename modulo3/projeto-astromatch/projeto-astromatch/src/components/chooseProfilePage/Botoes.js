import React from 'react'
import styled from 'styled-components'

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

export default function Botoes() {
  return (
    <ContainerButtons>
      <button>Não</button>
      <button>Sim</button>
    </ContainerButtons>
  )
}
