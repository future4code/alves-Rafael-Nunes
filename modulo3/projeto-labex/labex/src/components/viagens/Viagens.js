import React from 'react'
import CardViagens from './CardViagens'
import { useNavigate } from 'react-router-dom'

export function Viagens() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goSubscribePage = () => {
    navigate('/inscreverse')
  }

  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goSubscribePage}>Inscrever-se</button>
      <h2>Lista de Viagens</h2>
      <CardViagens />
      <CardViagens />
      <CardViagens />
      <CardViagens />
    </div>
  )
}
