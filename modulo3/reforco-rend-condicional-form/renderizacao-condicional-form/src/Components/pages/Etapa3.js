import React from 'react'
import styled from 'styled-components'

const Etapa3Container = styled.div`
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

export default function Etapa3(props) {
  return (
    <Etapa3Container>
      <h1>Etapa: Informações gerais de ensino</h1>

      <h2>Por que você não cocluiu a graduação?</h2>
      <StyleInput placeholder="" />

      <h2>Você algum curso complementar?</h2>
      <StyleSect>
        <StyleOptions>Curso Tecnico</StyleOptions>
        <StyleOptions>Curso de Ingles</StyleOptions>
        <StyleOptions>Outros</StyleOptions>
      </StyleSect>

      <button onClick={() => props.proxima(3)}>Próxima etapa</button>
    </Etapa3Container>
  )
}
