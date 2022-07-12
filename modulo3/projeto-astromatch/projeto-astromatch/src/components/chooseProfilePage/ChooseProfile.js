import React from 'react'
import Botoes from './Botoes'
import CardPerfil from './CardPerfil'

export default function ChooseProfile() {
  const profileToChoose = {
    id: 'xUrxMGvODWZa4ZASbfwx',
    age: 26,
    name: 'Carol Danvers',
    photo:
      'https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp',
    bio: 'Gosto de voar e de gatos. Procuro relações que respeitem minha independência.'
  }

  return (
    <div>
      <CardPerfil profile={profileToChoose} />
      <Botoes />
    </div>
  )
}
