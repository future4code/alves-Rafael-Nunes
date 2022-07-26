import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { baseURL } from '../constants'

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
`

export default function Botoes(props) {
  return (
    <ContainerButtons>
      <button onClick={props.nao}>Não</button>
      <button onClick={props.sim}>Sim</button>
    </ContainerButtons>
  )
}
