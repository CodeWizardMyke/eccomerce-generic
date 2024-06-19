import React, { useState, useEffect } from 'react'
import apiProducts from '../../api/apiProducts'
import ProductCard from '../product-card/ProductCard'

import './Products.css'
import Loading from '../loading/Loading'

function Products() {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        apiProducts('roupas academia').then( ({results})=>{
            setProducts(results)
            setLoading(false)
        } )
    },[])

    return (
        (loading && <Loading/>) || (
            <section className='products'>
                {
                    products.map( (product) => <ProductCard data={product} key={product.id} />)
                }
            </section>
        )
    )
}

export default Products
