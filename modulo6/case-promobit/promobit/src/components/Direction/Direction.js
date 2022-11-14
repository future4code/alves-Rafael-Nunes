import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/baseURL'
import { KEY } from '../../constants/key'
import { CrewCard, DivCrewCards } from './Direction.styled'

export default function Direction() {
  const [direction, setDirection] = useState()
  const { id } = useParams()

  axios
    .get(`${BASE_URL}/movie/${id}/credits${KEY}`)
    .then(res => {
      setDirection(res.data.crew)
    })
    .catch(err => {
      alert(err)
    })

  const renderDirection = (
    <DivCrewCards>
      {direction
        ?.filter(i => {
          return (
            i.job === 'Screenplay' ||
            i.job === 'Director' ||
            i.job === 'Characters'
          )
        })
        .map(direct => {
          return (
            <CrewCard>
              <h3>{direct.name}</h3>
              <p>{direct.job}</p>
            </CrewCard>
          )
        })}
    </DivCrewCards>
  )

  return <div>{renderDirection}</div>
}
