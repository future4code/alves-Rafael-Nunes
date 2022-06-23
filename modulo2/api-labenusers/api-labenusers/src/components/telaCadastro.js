import React from 'react'
import axios from 'axios'

export default class TelaCadastro extends React.Component {
  state = {
    nome: '',
    email: ''
  }

  pegaNome = e => {
    this.setState({ nome: e.target.value })
  }

  pegaEmail = e => {
    this.setState({ email: e.target.value })
  }

  concluirCadastro = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const body = {
      name: this.state.nome,
      email: this.state.email
    }

    axios
      .post(url, body, {
        headers: {
          Authorization: 'rafael-garcia-alves'
        }
      })
      .then(resposta => {
        console.log(resposta)
      })

      .catch(erro => {
        console.log(erro)
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.props.irLista}>Lista de Usuarios</button>
        <h2>cadastro</h2>
        <input
          placeholder="Nome"
          value={this.state.nome}
          onChange={this.pegaNome}
        />
        <input
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.pegaEmail}
        />
        <button onClick={this.concluirCadastro}>Cadastrar</button>
      </div>
    )
  }
}
