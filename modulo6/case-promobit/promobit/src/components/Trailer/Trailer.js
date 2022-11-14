import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, LANGUAGE } from '../../constants/baseURL'
import { KEY } from '../../constants/key'
import ReactPlayer from 'react-player'
import { ContainerTrailers, DivTrailer, MainContainer } from './Trailer.styled'
import { useParams } from 'react-router-dom'

export default function Trailer() {
  const [trailer, setTrailer] = useState()
  const { id } = useParams()

  const getTrailers = () => {
    axios
      .get(`${BASE_URL}/movie/${id}/videos${KEY}${LANGUAGE}`)
      .then(res => {
        setTrailer(res.data.results)
      })
      .catch(err => {
        alert(err.response)
      })
  }

  useEffect(() => {
    getTrailers()
  }, [])

  const getVideos = (
    <ContainerTrailers>
      {trailer?.map(video => {
        return (
          <DivTrailer>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video?.key}`}
              width="500px"
              height="300px"
            />
          </DivTrailer>
        )
      })}
    </ContainerTrailers>
  )

  return (
    <MainContainer>
      <h2>Trailres</h2>

      {getVideos}
    </MainContainer>
  )
}
