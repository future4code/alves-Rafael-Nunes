import React from 'react'
import './CardMenor.css'

function CardMenor(props) {
  return (
    <div className="little-Card">
      <img src={props.imagem} />
      <h3>{props.conteudo}</h3>
    </div>
  )
}

export default CardMenor
