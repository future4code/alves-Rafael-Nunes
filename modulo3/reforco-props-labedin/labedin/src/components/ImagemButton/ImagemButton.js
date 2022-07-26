import React from 'react'
import { ButtonConatiner, ButtonImg } from './StyleImagemButton.js'

function ImagemButton(props) {
  return (
    <ButtonConatiner>
      <ButtonImg src={props.imagem} />
      <p>{props.texto}</p>
    </ButtonConatiner>
  )
}

export default ImagemButton
