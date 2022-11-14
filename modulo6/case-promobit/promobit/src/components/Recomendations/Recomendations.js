import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, POSTER_BASE_URL } from '../../constants/baseURL'
import { KEY } from '../../constants/key'
import {
  CardRecommendationMovie,
  ContainerRecommendationsCards,
  MainRecomendtions
} from './Recomendations.styled'

export default function Recomendations() {
  const [recomend, setRecomend] = useState([])
  const { id } = useParams()

  const getRecomend = () => {
    axios
      .get(`${BASE_URL}/movie/${id}/recommendations${KEY}`)
      .then(res => {
        setRecomend(res.data.results)
      })
      .catch(err => {
        alert(err.response)
      })
  }

  useEffect(() => {
    getRecomend()
  }, [])

  const renderRecomend = (
    <ContainerRecommendationsCards>
      {recomend?.map(rec => {
        return (
          <CardRecommendationMovie>
            <img src={`${POSTER_BASE_URL}${rec.poster_path}`} />
            <div>
              <h3>{rec.title}</h3>
              <p>{rec.release_date?.split('-').reverse().join('/')}</p>
            </div>
          </CardRecommendationMovie>
        )
      })}
    </ContainerRecommendationsCards>
  )

  return (
    <MainRecomendtions>
      <h2>Recomendações</h2>
      {renderRecomend}
    </MainRecomendtions>
  )
}
