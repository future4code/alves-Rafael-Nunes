import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import MovieDatail from '../pages/MovieDatail/MovieDatails'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="datails/:id" element={<MovieDatail />} />
      </Routes>
    </BrowserRouter>
  )
}
