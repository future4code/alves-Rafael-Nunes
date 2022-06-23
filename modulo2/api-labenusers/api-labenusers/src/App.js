import React from 'react'
import TelaCadastro from './components/telaCadastro'
import ListaUsuarios from './components/listaUsuarios'

class App extends React.Component {
  state = {
    telaInicial: 'cadastro'
  }

  mudarTela = () => {
    switch (this.state.telaInicial) {
      case 'cadastro':
        return <TelaCadastro irLista={this.irLista} />
      case 'lista':
        return <ListaUsuarios irCadastro={this.irCadastro} />
      default:
        return <p>Hmmmm! não achei</p>
    }
  }

  irCadastro = () => {
    this.setState({ telaInicial: 'cadastro' })
  }

  irLista = () => {
    this.setState({ telaInicial: 'lista' })
  }

  render() {
    return <div>{this.mudarTela()}</div>
  }
}

export default App
