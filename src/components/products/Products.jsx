import React, { useState, useEffect } from 'react'
import apiProducts from '../../api/apiProducts'
import ProductCard from '../product-card/ProductCard'

import './Products.css'

function Products() {
    const [ products, setProducts ] = useState([])

    useEffect(()=>{
        apiProducts('roupas academia').then( ({results})=>{
            setProducts(results)
        } )
    },[])

    return (
        <section className='products'>
            {
                products.map( (product) => <ProductCard data={product} key={product.id} />)
            }
        </section>
    )
}

export default Products
