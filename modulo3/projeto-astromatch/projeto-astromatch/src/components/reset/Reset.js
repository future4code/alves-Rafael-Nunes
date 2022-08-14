import axios from 'axios'
import React from 'react'
import { baseURL } from '../constants'

export default function Reset() {
  const ClickReset = () => {
    axios
      .put(`${baseURL}/clear`)
      .then(response => {
        console.log('reset', response)
      })
      .catch(err => {
        console.log('erro', err)
      })
  }

  return (
    <div>
      <button onClick={() => ClickReset}>reset</button>
    </div>
  )
}
