import React,{useState} from 'react'
import AppContext from './AppContext'

function Provider({children}) {

  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ cartItems, setCartItems ] = useState([])

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
