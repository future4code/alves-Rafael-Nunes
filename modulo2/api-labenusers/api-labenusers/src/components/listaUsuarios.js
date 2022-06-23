import React from 'react'

export default class ListaUsuarios extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.irCadastro}>Ir para Cadastro</button>
        <h2>Lista de Usuarios</h2>
      </div>
    )
  }
}
