import React from 'react'
import { getLotery } from './services/callAPI'
import HomePage from './components/pages/homePage/HomePage'
import axios from 'axios'

function App() {
  // getLotery()

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
