import React, { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa";

import './ProductCard.css'
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({data}) {

  const {title, price, thumbnail} = data

  const {cartItems, setCartItems, } = useContext(AppContext)

  const handdleAddCart = () =>{
    setCartItems([ ...cartItems, data ])
  }

  return (
    <section className='product-card'>
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className='card_image'
      />
      <div className="card_infos">
        <h2 className="card_title">{title}</h2>
        <h2 className="card_price">{formatCurrency(price)}</h2>
      </div>
      <button 
        type='button' 
        className='card_cart'
        onClick={handdleAddCart}
      >
        <FaCartPlus />
      </button>
    </section>
  )
}

export default ProductCard
