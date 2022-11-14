import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Services/baseURL'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import { DivCard } from './HomePage.styled'

export default function HomePage(props) {
  const [pizzas, setPizzas] = useState([])

  const { addToCart } = props

  useEffect(() => {
    axios
      .get(`${BASE_URL}/pizzas`)
      .then(res => {
        setPizzas(res.data.pizzas)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <DivCard>
        {pizzas.map(pizza => {
          return (
            <PizzaCard pizza={pizza} key={pizza.name} addToCart={addToCart} />
          )
        })}
      </DivCard>
    </div>
  )
}
