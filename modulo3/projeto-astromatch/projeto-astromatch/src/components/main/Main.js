import React, { useState } from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfile from '../chooseProfilePage/ChooseProfile'
import MatchPage from '../matchPage/MatchPage'
import styled from 'styled-components'
import ListaDeMatches from '../matchPage/ListaDeMatches'

const StyleMain = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  width: 400px;
  height: 640px;
  margin: 25px;
  display: flex;
  flex-direction: column;
`

export default function Main() {
  const [selecionarPage, setSelecionarPage] = useState('Choose-page')

  const mudarPaginas = () => {
    switch (selecionarPage) {
      case 'choose-profile':
        return <ChooseProfile />
      case 'match-page':
        return <MatchPage />
      default:
        return <ChooseProfile />
    }
  }

  const goToChoosePfrofile = () => {
    setSelecionarPage('choose-profile')
  }

  const goToMatchPage = () => {
    setSelecionarPage('match-page')
  }

  return (
    <StyleMain>
      <AppBar
        goToChoosePfrofile={goToChoosePfrofile}
        goToMatchPage={goToMatchPage}
      />
      {mudarPaginas()}
    </StyleMain>
  )
}
