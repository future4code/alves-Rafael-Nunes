import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goViagensPage, goToLoginPage } from '../routes/coordinator'

export function TelaInicial() {
  const navigate = useNavigate()

  return (
    <div>
      <h3>Labex</h3>
      <button onClick={() => goViagensPage(navigate)}>Ver viagens</button>
      <button onClick={() => goToLoginPage(navigate)}>Área Adm</button>
    </div>
  )
}
