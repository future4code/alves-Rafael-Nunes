import React from 'react'
import styled from 'styled-components'

const Cabecalho = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid black;
`
const Botoes = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
  border: 1px solid black;
`

Header = () => {
  return (
    <Cabecalho>
      <h1>LabeFy</h1>
      <Botoes>
        <button>Criar Playlist</button>
        <button>adicionar Musica</button>
      </Botoes>
    </Cabecalho>
  )
}

export default Header
