import React from 'react'
import styled from 'styled-components'

const StyleCardAdm = styled.div`
  margin: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  :hover {
    background-color: gray;
  }
`

const StyleButtonCardAdm = styled.button`
  :hover {
    background-color: black;
    color: white;
  }
`

export default function CardsAdm() {
  return (
    <StyleCardAdm>
      <h5>Planeta Vegeta</h5>
      <StyleButtonCardAdm>Apagar</StyleButtonCardAdm>
    </StyleCardAdm>
  )
}
