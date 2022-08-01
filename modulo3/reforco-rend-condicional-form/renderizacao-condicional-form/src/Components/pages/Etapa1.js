import React from 'react'
import styled from 'styled-components'

const Etapa1Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyleInput = styled.input`
  width: 250px;
  height: 25px;
  font-size: 20px;
  margin: 8px;
  margin-bottom: 38px;
`

const StyleSect = styled.select`
  width: 200px;
  height: 24px;
  margin-bottom: 38px;
`

const StyleOptions = styled.option`
  display: flex;
  justify-content: center;
  font-size: medium;
`

export default function Etapa1(props) {
  return (
    <Etapa1Container>
      <h1>Etapa 1: Dados Gerais</h1>
      <h2>Qual seu nome?</h2>
      <StyleInput placeholder="Nome:" />

      <h2>Qual sua idade?</h2>
      <StyleInput placeholder="idade:" />

      <h2>Qual seu E-mail?</h2>
      <StyleInput placeholder="E-mail:" />

      <h2>Qual sua escolaridade?</h2>
      <StyleSect>
        <StyleOptions>Ensino Fundamental incompleto</StyleOptions>
        <StyleOptions>Ensino Fundamental completo</StyleOptions>
        <StyleOptions>Ensino médio incopleto</StyleOptions>
        <StyleOptions>Ensino médio copleto</StyleOptions>
        <StyleOptions>Ensino superior incompleto</StyleOptions>
        <StyleOptions>Ensino superior completo</StyleOptions>
      </StyleSect>

      <button onClick={() => props.proxima(1)}>Próxima Etapa</button>
    </Etapa1Container>
  )
}
