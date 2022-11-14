import React from 'react'
import CardCart from '../../components/CardCart/CardCart'
import { MainCart } from './Cart.style'

export default function Cart(props) {
  const { cart } = props

  const calculateTotal = () => {
    const total = cart.reduce(
      (acumulator, item) => acumulator + item.price * item.quantity,
      0
    )

    return total.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })
  }

  return (
    <MainCart>
      <h2>Resumo do pedido</h2>
      <div>
        {cart.map(pizza => {
          return <CardCart key={pizza.price} pizza={pizza} />
        })}
      </div>
      <h3>Total: {calculateTotal()}</h3>
      <button>finalizar pedido</button>
    </MainCart>
  )
}
