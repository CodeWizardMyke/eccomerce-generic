import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";

import './SearchBar.css'
import AppContext from '../../context/AppContext';
import apiProducts from '../../api/apiProducts';

function SearchBar() {
  const [ searchValue, setSearchValue ] = useState('')

  const {setProducts} = useContext(AppContext)

  const handdleSearch = async (event) =>{
    event.preventDefault()
    const {results} = await apiProducts(searchValue)

    setProducts(results)
    setSearchValue('')
  }

  return (
    <form className='search-bar' onSubmit={handdleSearch}>
      <input 
        type="search" 
        name="searchBar"
        placeholder="Buscar produtos"
        onChange={ ({target}) => setSearchValue(target.value) }
        required
      />
      <button type='submit'><CiSearch /></button>
    </form>
  )
}

export default SearchBar
