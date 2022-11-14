import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardActor from '../../components/CardActor/CardActor'
import { ContainerLogo } from '../../components/Header/Header.styled'
import Recomendations from '../../components/Recomendations/Recomendations'
import Trailer from '../../components/Trailer/Trailer'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {
  BASE_URL,
  LANGUAGE,
  LOGO_URL,
  POSTER_BASE_URL
} from '../../constants/baseURL'
import { KEY } from '../../constants/key'
import {
  ContainerAvaliation,
  ContainerHead,
  DatailPoster,
  Expecification,
  InformationContainer,
  Porcentage,
  Sinopse
} from './MovieDatail.styled'
import Direction from '../../components/Direction/Direction'

export default function MovieDatails() {
  const [sumary, setSumary] = useState({})
  const { id } = useParams()

  const convertTime = runtime => {
    const hours = Math.floor(runtime / 60)
    let minutes = runtime % 60
    minutes = minutes < 10 ? '0' + minutes : minutes
    return `${hours}h${minutes}m`
  }

  const convertPorcent = number => {
    return (number / 10) * 100
  }

  const getSumary = () => {
    axios
      .get(`${BASE_URL}/movie/${id}${KEY}${LANGUAGE}`)
      .then(res => {
        setSumary(res.data)
      })
      .catch(err => {
        alert(err.response)
      })
  }

  useEffect(() => {
    getSumary()
  }, [])

  const informations = (
    <ContainerHead>
      <DatailPoster src={`${POSTER_BASE_URL}/${sumary.poster_path}`} />

      <InformationContainer>
        <section>
          <h1>{sumary.title}</h1>
          <h2>({sumary.release_date?.substring(0, 4)})</h2>
        </section>
        <Expecification>
          <p>{sumary.release_date?.split('-').reverse().join('/')} (BR)</p>
          <p>•</p>

          {sumary.genres?.map(genre => {
            return <p>{genre.name}, </p>
          })}
          <p>•</p>

          <p>{convertTime(sumary.runtime)}</p>
        </Expecification>

        <ContainerAvaliation>
          <Porcentage>
            <CircularProgressbar
              key={sumary.vote_average}
              value={convertPorcent(sumary.vote_average)}
              text={`${convertPorcent(sumary.vote_average)}%`}
              styles={buildStyles({
                pathColor: `#14FF00`,
                textColor: '#14FF00',
                trailColor: '#42246D',
                backgroundColor: '#42246D'
              })}
            />
          </Porcentage>
          <p>
            Avaliação
            <br /> dos usuarios
          </p>
        </ContainerAvaliation>
        <Sinopse>
          <h3>Sinopse</h3>
          <p>{sumary.overview}</p>
        </Sinopse>
        <Direction />
      </InformationContainer>
    </ContainerHead>
  )

  return (
    <div>
      <ContainerLogo>
        <img src={LOGO_URL} />
      </ContainerLogo>
      {informations}

      <CardActor />
      <Trailer />
      <Recomendations />
    </div>
  )
}
