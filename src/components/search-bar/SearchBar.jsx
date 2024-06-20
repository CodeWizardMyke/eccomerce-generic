import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

import './SearchBar.css'

function SearchBar() {
  const [ searchValue, setSearchValue ] = useState('')

  const handdleSearch = (event) =>{
    event.preventDefault()
    alert(searchValue)

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
