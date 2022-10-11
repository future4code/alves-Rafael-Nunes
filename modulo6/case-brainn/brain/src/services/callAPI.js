import BASE_URL from './baseURL'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const Lotery = () => {
  const [lotery, setLotery] = useState([])

  useEffect(() => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then(res => {
        setLotery(res.data)
      })
      .catch(err => {
        alert(err.message)
      })
  }, [setLotery])

  return lotery.nome
}

//   export const getContestLotery = () => {
//     axios
//       .get(`${BASE_URL}/loterias-concursos`)
//       .then(res => {
//         console.log(res.data)
//       })
//       .catch(err => {
//         alert(err.message)
//       })
//   }

//   export const getContestLoteryByID = () => {
//     axios
//       .get(`${BASE_URL}/concursos/${'2359'}`)
//       .then(res => {
//         console.log(res.data)
//       })
//       .catch(err => {
//         alert(err.message)
//       })
//   }

//   return <div>callAPI</div>
// }
