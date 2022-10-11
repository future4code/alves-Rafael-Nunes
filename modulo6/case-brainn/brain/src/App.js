import React from 'react'
import { Lotery } from './services/callAPI'
import HomePage from './components/pages/homePage/HomePage'
import axios from 'axios'
import BASE_URL from './services/baseURL'

function App() {
  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
