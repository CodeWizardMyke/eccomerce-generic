import React from 'react'
import { IoMenu } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

import './Header.css'

function Header() {
  return (
    <header className='conteiner'>
      <div className='header'>
      <button type='button' className='btn-menu'><IoMenu /></button>
      <div className='content-logo'>
        <RxGithubLogo />
        <span>E-eccomerce</span>
      </div>
      <button type='button' className='btn-cart'><BsCart3 /></button>
      </div>
      <div className="search-bar">
        <input type="search" name="searchBar"  />
        <button type='submit'><CiSearch /></button>
      </div>
    </header>
  )
}

export default Header
