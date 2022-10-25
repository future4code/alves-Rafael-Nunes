import React from 'react'
import { CardContainer, DivCardButton, CardButton } from './PizzaCard.styled'

export default function PizzaCard(props) {
  const { pizza, addToCart } = props

  return (
    <div>
      <CardContainer>
        <h3>{pizza.name}</h3>
        <p>
          {pizza.price.toLocaleString('na-us', {
            style: 'currency',
            currency: 'USD'
          })}
        </p>
        <p>
          {pizza.ingredients.map(item => {
            return <span key={item}>{`${item}, `}</span>
          })}
        </p>
        <DivCardButton>
          <CardButton onClick={() => addToCart(pizza)}>
            adicionar no carrinho
          </CardButton>
        </DivCardButton>
      </CardContainer>
    </div>
  )
}
