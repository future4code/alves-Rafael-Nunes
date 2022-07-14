import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack, goToAdminPage } from '../routes/coordinator'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="E-mail"></input>
      <input placeholder="Senha"></input>
      <div>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button onClick={() => goToAdminPage(navigate)}>Entrar</button>
      </div>
    </div>
  )
}
