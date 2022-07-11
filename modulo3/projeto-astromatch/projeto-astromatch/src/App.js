import React, { useState } from 'react'
import Header from './components/header'
import Principal from './components/principal'
import Tela1 from './components/tela1'

function App() {
  const [tela, setTela] = useState(0)

  return (
    <div>
      <Header />
      <Principal />
      <Tela1 />
    </div>
  )
}

export default App
