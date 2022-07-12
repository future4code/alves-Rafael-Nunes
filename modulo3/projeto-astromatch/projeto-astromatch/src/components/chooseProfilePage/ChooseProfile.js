import React, { useEffect, useState } from 'react'
import Botoes from './Botoes'
import CardPerfil from './CardPerfil'
import axios from 'axios'
import { baseURL } from '../constants'

export default function ChooseProfile() {
  const [profileToChoose, setProfileToChoose] = useState({})

  const getProfilesToChoose = () => [
    axios.get(`${baseURL}/person`).then(response => {
      console.log(response)
      setProfileToChoose(response.data.profile)
    })
  ]

  useEffect(() => {
    getProfilesToChoose()
  }, [])

  const chooseProfile = choice => {
    const body = {
      choice: choice,
      id: profileToChoose.id
    }
    axios.post(`${baseURL}/choose-person`, body).then(response => {
      console.log(response)
      getProfilesToChoose()
    })
  }

  const nao = () => {
    console.log('nao')
    chooseProfile(false)
  }
  const sim = () => {
    console.log('sim')
    chooseProfile(true)
  }

  return (
    <div>
      <CardPerfil profile={profileToChoose} />
      <Botoes nao={nao} sim={sim} />
    </div>
  )
}
