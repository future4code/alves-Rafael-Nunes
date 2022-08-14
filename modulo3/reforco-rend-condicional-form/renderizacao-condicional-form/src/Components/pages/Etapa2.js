import React from 'react'
import styled from 'styled-components'

const Etapa2Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyleTittle = styled.h1`
  padding: 10px;
  margin: 10px;
  margin-bottom: 32px;
`

const StyleInput = styled.input`
  width: 250px;
  height: 25px;
  font-size: 20px;
  margin: 8px;
  margin-bottom: 38px;
`

export default function Etapa2(props) {
  return (
    <Etapa2Container>
      <StyleTittle>
        Etapa 2: Informações do ensino superior (opcional)
      </StyleTittle>
      <h2>Qual curso?</h2>
      <StyleInput placeholder="Curso:" />

      <h2>Qual institução de ensino?</h2>
      <StyleInput placeholder="Institição:" />

      <button onClick={() => props.proxima(2)}>Próxima etapa</button>
    </Etapa2Container>
  )
}
