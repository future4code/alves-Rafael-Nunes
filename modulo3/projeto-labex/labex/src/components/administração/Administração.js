import React from 'react'
import CardsAdm from './CardsAdm'

export default function Administração() {
  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button>Voltar</button>
      <button>Criar Viagem</button>
      <button>Logout</button>

      <CardsAdm />
      <CardsAdm />
      <CardsAdm />
      <CardsAdm />
      <CardsAdm />
    </div>
  )
}
