import React, { useContext } from 'react'

import './Cart.css'
import CartItem from '../cart-item/CartItem'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

function Cart() {

  const {cartItems } = useContext(AppContext)

  const totPriceCart = cartItems.reduce( (acc, item) =>  item.price + acc , 0 )

  return (
    <section className='cart'>
      <div className='cart-items'>
        {
          cartItems.map( (cartItem) => <CartItem key={cartItem.id+ Math.random()} data={cartItem}/> )
        }
      </div>
      <div className='cart-resume'>{formatCurrency(totPriceCart)}</div>
    </section>
  )
}

export default Cart
