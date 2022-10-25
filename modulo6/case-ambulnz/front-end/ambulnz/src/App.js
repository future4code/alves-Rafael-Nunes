import { useState } from 'react'
import styled from 'styled-components'
import Cart from './Pages/Cart/Cart'
import HomePage from './Pages/Home/HomePage'

export const AppMain = styled.div`
  display: flex;
  background-color: blue;
`

function App() {
  const [cart, setCart] = useState([])

  const addToCart = addPizza => {
    console.log(cart)
    console.log(addPizza)
    const foundIndex = cart.findIndex(
      pizzaInCart => pizzaInCart.name === addPizza.name
    )

    if (foundIndex >= 0) {
      const newCart = [...cart]
      newCart[foundIndex].quantity += 1

      setCart(newCart)
    } else {
      const newCart = [...cart]
      const newPizza = {
        name: addPizza.name,
        price: addPizza.price,
        quantity: 1
      }

      newCart.push(newPizza)
      setCart(newCart)
    }
  }

  return (
    <AppMain>
      <HomePage addToCart={addToCart} />
      <Cart cart={cart} />
    </AppMain>
  )
}

export default App
