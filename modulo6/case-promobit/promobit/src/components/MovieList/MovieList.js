import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL, LANGUAGE, POSTER_BASE_URL } from '../../constants/baseURL'
import { KEY } from '../../constants/key'
import { goToDatailPage } from '../../Router/Coordinator'
import { CardMovie, ContainerButtons, MainContainer } from './MovieList.styled'

export default function MovieList() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  const nextPage = page => setPage(page + 1)
  const backPage = page => setPage(page - 1)

  const getPopularMovies = () => {
    axios
      .get(`${BASE_URL}/movie/popular${KEY}${LANGUAGE}&page=${page}`)
      .then(res => {
        setMovies(res.data.results)
      })
      .catch(err => {
        alert(err)
      })
  }

  useEffect(() => {
    getPopularMovies()
  }, [page])

  const popularMovies = movies?.map(movie => {
    return (
      <CardMovie key={movie.id}>
        <img
          onClick={() => goToDatailPage(navigate, movie.id)}
          src={`${POSTER_BASE_URL}${movie.poster_path}`}
        />
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split('-').reverse().join('/')}</p>
        </div>
      </CardMovie>
    )
  })

  return (
    <div>
      <MainContainer>{popularMovies}</MainContainer>

      <ContainerButtons>
        <button onClick={() => backPage(page)}>Back</button>
        <p>{page}</p>
        <button onClick={() => nextPage(page)}>Next</button>
      </ContainerButtons>
    </div>
  )
}
