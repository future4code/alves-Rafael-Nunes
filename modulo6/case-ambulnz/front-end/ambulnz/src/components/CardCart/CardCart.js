import React from 'react'
import { DelButton, DivDelButton, StyleCardCart } from './CardCart.styled'

export default function CardCart(props) {
  const { pizza } = props

  console.log(pizza.name)

  return (
    <div>
      <StyleCardCart>
        <h4>pizza :{pizza.name}</h4>
        <h4>price: ${pizza.price}</h4>
        <h4>quantidade: {pizza.quantity}</h4>

        <DivDelButton>
          <DelButton>X</DelButton>
        </DivDelButton>
      </StyleCardCart>
    </div>
  )
}
