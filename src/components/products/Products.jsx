import React, { useState, useEffect, useContext } from 'react'
import apiProducts from '../../api/apiProducts'
import ProductCard from '../product-card/ProductCard'

import './Products.css'
import Loading from '../loading/Loading'
import AppContext from '../../context/AppContext'

function Products() {

    const {products, setProducts} =  useContext(AppContext)

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
