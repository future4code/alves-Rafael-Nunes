import React from 'react'
import styled from 'styled-components'

const StyleBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid gray;
  align-items: center;
`

export default function AppBar(props) {
  return (
    <StyleBar>
      <button onClick={props.goToChoosePfrofile}>Inicio</button>
      <h4>AstroMatch</h4>
      <button onClick={props.goToMatchPage}>Lista de Matches</button>
    </StyleBar>
  )
}
