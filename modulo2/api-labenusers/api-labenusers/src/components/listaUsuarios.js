import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`

export default class ListaUsuarios extends React.Component {
  state = {
    usuarios: []
  }

  componentDidMount() {
    this.mostrarUsuarios()
  }

  mostrarUsuarios = () => {
    const url =
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    axios
      .get(url, {
        headers: {
          Authorization: 'rafael-garcia-alves'
        }
      })
      .then(res => {
        this.setState({ usuarios: res.data })
      })
      .catch(err => {
        alert('Erro: A pagina não responde')
      })
  }

  deletarUser = id => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios
      .delete(url, {
        headers: {
          Authorization: 'rafael-garcia-alves'
        }
      })
      .then(res => {
        alert('Usuario deletado com sucesso!')
        this.mostrarUsuarios()
      })
      .catch(err => {
        // alert('erro ao deletar usuario')
        console.log(err.response.data)
      })
  }

  render() {
    const listaUsuarios = this.state.usuarios.map(user => {
      return (
        <CardUsuario key={user.id}>
          {user.name}
          <button onClick={() => this.deletarUser(user.id)}>X</button>
        </CardUsuario>
      )
    })
    return (
      <div>
        <button onClick={this.props.irCadastro}>Ir para Cadastro</button>
        <h2>Lista de Usuarios</h2>
        {listaUsuarios}
      </div>
    )
  }
}
