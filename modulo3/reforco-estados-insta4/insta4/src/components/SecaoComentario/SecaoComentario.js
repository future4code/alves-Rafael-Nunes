import React, { Component, useState } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`

export function SecaoComentario(props) {
  const [inputComent, handleComentInput] = useState('')

  const onChangeComentario = event => {
    handleComentInput(event.target.value)
    console.log('Comentou!', event.target.value)
  }

  return (
    <CommentContainer>
      <InputComentario
        placeholder={'Comentário'}
        value={inputComent}
        onChange={onChangeComentario}
      />
      <button onClick={props.aoEnviar}>Enviar</button>
    </CommentContainer>
  )
}

export default SecaoComentario
