import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { BASE_URL, LANGUAGE, POSTER_BASE_URL } from '../../constants/baseURL'
import { KEY } from '../../constants/key'
import { CardMovie, MainContainer } from './MovieList.styled'

export default function Home() {
  const [movies, setMovies] = useState([])

  const getPopularMovies = () => {
    axios
      .get(`${BASE_URL}/movie/popular${KEY}`)
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  useEffect(() => {
    getPopularMovies()
  }, [])
  console.log(movies)
  const popularMovies = movies?.map(movie => {
    return (
      <CardMovie>
        <img src={`${POSTER_BASE_URL}${movie.poster_path}`} />
        <div>
          <h3>{movie.title}</h3>
          <span>{movie.release_date.split('-').reverse().join('/')}</span>
        </div>
      </CardMovie>
    )
  })

  return (
    <div>
      <MainContainer>{popularMovies}</MainContainer>
    </div>
  )
}
