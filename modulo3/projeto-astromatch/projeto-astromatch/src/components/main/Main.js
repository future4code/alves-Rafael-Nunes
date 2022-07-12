import React from 'react'
import AppBar from '../AppBar/AppBar'
import ChooseProfile from '../chooseProfilePage/ChooseProfile'
import MatchPage from '../matchPage/MatchPage'
import styled from 'styled-components'

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
  return (
    <StyleMain>
      <AppBar />
      <ChooseProfile />
      {/* <MatchPage /> */}
    </StyleMain>
  )
}
