import React from 'react'
import styled from 'styled-components'

const ContainerHome = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DivButton = styled.div`
  margin-top: 36px;
`
const Botao = styled.button`
  width: 150px;
  height: 25px;
  border-radius: 10px;
  :hover {
    background-color: orange;
    color: white;
  }
`

export default function Home(props) {
  return (
    <ContainerHome>
      <h1>Bem Vido ao LabeForm</h1>
      <DivButton>
        <h2>Vamos iniciar</h2>
        <Botao onClick={() => props.proxima(0)}>Clique Aqui</Botao>
      </DivButton>
    </ContainerHome>
  )
}
