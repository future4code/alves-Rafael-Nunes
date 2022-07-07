import React from 'react'
import styled from 'styled-components'
import Home from './components/home'
import { useState } from 'react'

const Header = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  const [tela, setTela] = useState()

  const mudarTela = () => {
    setTela(!tela)
  }

  const alternarTelas = () => {}
  return (
    <div>
      <Header>
        <h1>AstroMatch</h1>
      </Header>
      <Home />
    </div>
  )
}

export default App
