import React, { useEffect, useState } from 'react'
import Botoes from './Botoes'
import CardPerfil from './CardPerfil'
import axios from 'axios'
import { baseURL } from '../constants'

export default function ChooseProfile() {
  const [profileToChoose, setProfileToChoose] = useState(undefined)

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

    setProfileToChoose(undefined)

    axios
      .post(`${baseURL}/choose-person`, body)
      .then(response => {
        console.log(response)
        getProfilesToChoose()
      })
      .catch(err => {
        console.log('erro choosePerson', err)
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
      {profileToChoose ? (
        <>
          <CardPerfil profile={profileToChoose} />
          <Botoes nao={nao} sim={sim} />
        </>
      ) : (
        <p>...Carregando</p>
      )}
    </div>
  )
}
