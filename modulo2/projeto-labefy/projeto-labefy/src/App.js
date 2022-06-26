import React from 'react'
import styled from 'styled-components'
import AlterarPlays from './components/alterarPlaylist'
import Header from './components/cabecalho'
import Playists from './components/criarPlaylist'

export default class App extends React.Component {
  state = {
    paginas: 'Playlists'
  }

  render() {
    EscolherPaginas = () => {
      switch (this.state.paginas) {
        case 'Playlists':
          return <Playists />
        case 'Alterar':
          return <AlterarPlays />
        default:
          return 'Erro'
      }
    }
    return (
      <div>
        <Header />
        <Playists />
        <AlterarPlays />
      </div>
    )
  }
}
