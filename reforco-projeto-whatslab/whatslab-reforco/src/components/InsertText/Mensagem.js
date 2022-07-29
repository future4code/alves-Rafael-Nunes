import React, { useState } from 'react'
import { MensageContainer, NameUser, StyleMensage } from './Style'

export default function Mensagem(props) {
  return (
    <MensageContainer>
      <NameUser>{props.nome}</NameUser>
      <strong> </strong>
      <StyleMensage>{props.direct}</StyleMensage>
    </MensageContainer>
  )
}
