import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency';

function CartItem({ data }) {
  const { thumbnail, title, price } = data
  return (
    <div className='cart-item'>
      <img 
        src={thumbnail}
        alt="imagem do produto"
        className='cart-item-image'
      />
      <div className="cart-item-content">
        <h3 className='cart-item-title'>{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
        <button
          type='button'
          className='button_remove-item'
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  )
}

export default CartItem
