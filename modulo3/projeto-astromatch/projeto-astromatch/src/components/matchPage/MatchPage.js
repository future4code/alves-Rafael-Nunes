import React from 'react'
import ListaDeMatches from './ListaDeMatches'
import styled from 'styled-components'

const MatchContainer = styled.div`
  padding: 10px;
`

export default function MatchPage() {
  return (
    <MatchContainer>
      <ListaDeMatches />
      <ListaDeMatches />
      <ListaDeMatches />
      <ListaDeMatches />
    </MatchContainer>
  )
}
