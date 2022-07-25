import React from 'react'
import CardViagens from './CardViagens'
import { useNavigate } from 'react-router-dom'
import { goBack, goSubscribePage } from '../routes/coordinator'

export function Viagens() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button onClick={() => goSubscribePage(navigate)}>Inscrever-se</button>
      <h2>Lista de Viagens</h2>
      <CardViagens />
      <CardViagens />
      <CardViagens />
      <CardViagens />
    </div>
  )
}
