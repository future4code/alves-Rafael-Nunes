import React from 'react'
import { ConatainerCardPeqeno, ImagemCardPequeno } from './StyleCardPequeno'

export default function CardPequeno(props) {
  return (
    <div>
      <ConatainerCardPeqeno>
        <ImagemCardPequeno src={props.imagem} />
        <strong>{props.titulo}</strong>
        <h4>: {props.dado}</h4>
      </ConatainerCardPeqeno>
    </div>
  )
}

//strong
