import React, { useEffect, useState } from 'react'
import ListaDeMatches from './ListaDeMatches'
import styled from 'styled-components'
import { baseURL } from '../constants'
import axios from 'axios'

const MatchContainer = styled.div`
  padding: 10px;
`

export default function MatchPage() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios.get(`${baseURL}/matches`).then(response => {
      console.log(response)
      setMatches(response.data.matches)
    })
  }, [])

  return (
    <MatchContainer>
      {matches.map(profile => {
        return <ListaDeMatches profile={profile} />
      })}
    </MatchContainer>
  )
}
