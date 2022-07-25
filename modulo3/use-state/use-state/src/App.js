import React from 'react'
import styled from 'styled-components'
import Footer from './components/footer'
import Main from './components/principal'
import Header from './components/header'

const Conteudo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <Conteudo>
      <Header />
      <Main />
      <Footer />
    </Conteudo>
  )
}

export default App
