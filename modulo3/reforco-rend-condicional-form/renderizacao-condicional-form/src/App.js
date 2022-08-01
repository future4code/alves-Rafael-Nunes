import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Components/Header/Header'
import Etapa1 from './Components/pages/Etapa1'
import Etapa2 from './Components/pages/Etapa2'
import Etapa3 from './Components/pages/Etapa3'
import Final from './Components/pages/Final'
import Home from './Components/pages/Home'

const DivPai = styled.div``

function App() {
  const [componente, setCponente] = useState(0)

  const renderComponent = () => {
    switch (componente) {
      case 0:
        return <Home proxima={proximaPage} />
      case 1:
        return <Etapa1 proxima={proximaPage} />
      case 2:
        return <Etapa2 proxima={proximaPage} />
      case 3:
        return <Etapa3 proxima={proximaPage} />
      case 4:
        return <Final proxima={proximaPage} />
    }
  }

  const proximaPage = () => {
    setCponente(componente + 1)
  }

  return (
    <DivPai>
      <Header />
      {renderComponent()}
      {/* <Etapa1 /> */}
      {/* <Etapa2 /> */}
      {/* <Etapa3 /> */}
    </DivPai>
  )
}

export default App
