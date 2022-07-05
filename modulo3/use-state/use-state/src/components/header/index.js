import React from 'react'
import styled from 'styled-components'

const StyleImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

function Header() {
  return (
    <div>
      <h1>Post</h1>
      <StyleImg src="https://picsum.photos/200/150"></StyleImg>
      <p>Usuario</p>
    </div>
  )
}

export default Header
