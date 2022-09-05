import React, { useState } from 'react'
import styled from 'styled-components'

const StyleButtons = styled.div`
  width: 200px;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

const StyleButton = styled.button``

function Footer() {
  const [curtida , descurtida] = useState('1')
const botaoCurtir = () =>{
  if()
  }
}

  return (
    <div>
      <StyleButtons>
        <StyleButton>Curtir</StyleButton>
        <StyleButton>Comentarios</StyleButton>
        <StyleButton>Compartilhar</StyleButton>
      </StyleButtons>
      <p>Comentarios</p>
    </div>
  )
}

export default Footer
