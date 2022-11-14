import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, POSTER_BASE_URL } from '../../constants/baseURL'
import { KEY } from '../../constants/key'
import {
  ContainerActor,
  ContainerCard,
  ContainerCards
} from './CardActor.styled'

export default function CardActor() {
  const [actor, setActor] = useState({})
  const { id } = useParams()

  const getActor = () => {
    axios
      .get(`${BASE_URL}/movie/${id}/credits${KEY}`)
      .then(res => {
        setActor(res.data)
      })
      .catch(err => {
        alert(err.response)
      })
  }

  useEffect(() => {
    getActor()
  }, [])

  const infoActor = (
    <ContainerCards>
      {actor.cast?.map(actor => {
        return (
          <ContainerCard>
            <img src={`${POSTER_BASE_URL}/${actor?.profile_path}`} />
            <h3>{actor?.name}</h3>
            <p>{actor?.character}</p>
          </ContainerCard>
        )
      })}
    </ContainerCards>
  )

  return (
    <ContainerActor>
      <h2>Elenco Original</h2>

      {infoActor}
    </ContainerActor>
  )
}
