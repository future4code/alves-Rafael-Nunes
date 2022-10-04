import BASE_URL from './baseURL'
import axios from 'axios'

export const getLotery = () => {
  axios
    .get(`${BASE_URL}/loterias`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
}

// console.log(getLotery())
