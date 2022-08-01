import React from 'react'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  background-color: orange;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 120px;
`

export default function Header() {
  return (
    <ContainerHeader>
      <h1>LabeForms</h1>
    </ContainerHeader>
  )
}
