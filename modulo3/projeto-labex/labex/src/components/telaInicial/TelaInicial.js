import React from 'react'
import { useNavigate } from 'react-router-dom'

export function TelaInicial() {
  const navigate = useNavigate()

  const goViagensPage = () => {
    navigate('/viagens')
  }

  const goToLoginPage = () => {
    navigate('/login')
  }

  return (
    <div>
      <h3>Labex</h3>
      <button onClick={goViagensPage}>Ver viagens</button>
      <button onClick={goToLoginPage}>Área Adm</button>
    </div>
  )
}
