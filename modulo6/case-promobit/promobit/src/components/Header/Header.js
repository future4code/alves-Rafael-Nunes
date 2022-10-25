import React from 'react'
import { LOGO_URL } from '../../constants/baseURL'
import { ContainerLogo, Principal } from './Header.styled'

export default function Header() {
  return (
    <div>
      <ContainerLogo>
        <img src={LOGO_URL} />
      </ContainerLogo>
      <Principal>
        <div>
          <p>Milhões de filmes, séries e pessoas</p>
          <p> para descobrir. Explore já.</p>
        </div>
      </Principal>
    </div>
  )
}
