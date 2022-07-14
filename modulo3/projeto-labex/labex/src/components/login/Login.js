import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const goToAdminPage = () => {
    navigate('/administracao')
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="E-mail"></input>
      <input placeholder="Senha"></input>
      <div>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToAdminPage}>Entrar</button>
      </div>
    </div>
  )
}
