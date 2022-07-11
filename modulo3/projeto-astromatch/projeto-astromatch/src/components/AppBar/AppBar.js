import React from 'react'
import styled from 'styled-components'

const StyleBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid gray;
  align-items: center;
`

export default function AppBar() {
  return (
    <StyleBar>
      <button>mudar Tela</button>
      <h4>AstroMatch</h4>
      <button>Lista de Matches</button>
    </StyleBar>
  )
}
