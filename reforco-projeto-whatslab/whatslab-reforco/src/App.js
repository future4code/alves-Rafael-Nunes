import React, { useState } from 'react'
import styled from 'styled-components'
import Mensagem from './components/InsertText/Mensagem'
import { InputMensage, InputName } from './components/InsertText/Style'

const DivPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  color: green;
`

const LogoImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px;
`

const StyleApp = styled.div`
  display: flex;
  margin: 20px;
  width: 500px;
  height: 750px;
  padding: 25px;
  border: 1px solid black;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #eefff5;
`

const SectionInputs = styled.div`
  display: flex;
  margin-bottom: 0;
`

const Botao = styled.button`
  margin: 3px;
`

function App() {
  const [mensagem, setMensagem] = useState([
    {
      nome: 'Bot',
      direct: 'Olá Bem vindo ao WhatsLab'
    }
  ])

  const mensagens = mensagem.map((mensagem, index) => {
    return (
      <Mensagem key={index} nome={mensagem.nome} direct={mensagem.direct} />
    )
  })

  const [inserirNome, setinserirNome] = useState('')
  const [inserirMensagem, setInseriMensagem] = useState('')

  const novaMensagem = () => {
    const novaMensagem = {
      nome: inserirNome,
      direct: inserirMensagem
    }

    const criarMensagem = [...mensagem, novaMensagem]

    setMensagem(criarMensagem)
  }

  const onChangeName = e => {
    setinserirNome(e.target.value)
    console.log(e.target.value)
  }

  const onChangeMensagem = e => {
    setInseriMensagem(e.target.value)
    console.log(e.target.value)
  }

  return (
    <DivPai>
      <Logo>
        <LogoImg src="https://cdn-icons-png.flaticon.com/512/152/152740.png" />
        <h1>WhatsLab</h1>
      </Logo>
      <StyleApp>
        <div>
          <h3>{mensagens}</h3>
        </div>
        <SectionInputs>
          <InputName
            placeholder="Nome:"
            onChange={onChangeName}
            value={inserirNome}
          />
          <InputMensage
            placeholder="Mensagem:"
            onChange={onChangeMensagem}
            value={inserirMensagem}
          />
          <Botao onClick={novaMensagem}>Enviar</Botao>
        </SectionInputs>
        <Mensagem />
      </StyleApp>
    </DivPai>
  )
}

export default App
