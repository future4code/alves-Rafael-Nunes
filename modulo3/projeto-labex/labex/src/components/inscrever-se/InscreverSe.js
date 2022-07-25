import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../routes/coordinator'

const ContainerInsc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 25px;
`

export default function InscreverSe() {
  const navigate = useNavigate()

  return (
    <ContainerInsc>
      <h1>Inscrever-se para uma viagem</h1>
      <select>
        <option>Escolha uma viagem</option>
        <option>Opção</option>
        <option>Opção</option>
        <option>Opção</option>
      </select>
      <input placeHolder="Nome"></input>
      <input placeHolder="Idade"></input>
      <input placeHolder="Texto de candidatura"></input>
      <input placeHolder="Profissão"></input>
      <select>
        <option>Escolha um País</option>
        <option>Opção</option>
        <option>Opção</option>
        <option>Opção</option>
      </select>
      <Botoes>
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button>Enviar</button>
      </Botoes>
    </ContainerInsc>
  )
}
