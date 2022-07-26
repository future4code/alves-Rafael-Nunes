import React from 'react'
import {
  BigCard,
  BigCardImg,
  ConatainerName,
  TextName
} from './StyleCardGrande.js'

function CardGrande(props) {
  return (
    <BigCard>
      <BigCardImg src={props.imagem} />
      <ConatainerName>
        <TextName>{props.nome}</TextName>
        <p>{props.descricao}</p>
      </ConatainerName>
    </BigCard>
  )
}

export default CardGrande
