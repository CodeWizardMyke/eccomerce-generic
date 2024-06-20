import React from 'react'
import { IoMenu } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";

import './Header.css'
import SearchBar from '../search-bar/SearchBar';

function Header() {
  return (
    <header className='container'>
      <div className='header'>
      <button type='button' className='btn-menu'><IoMenu /></button>
      <div className='content-logo'>
        <RxGithubLogo />
        <span>E-eccomerce</span>
      </div>
      <button type='button' className='btn-cart'><BsCart3 /></button>
      </div>
      <SearchBar/>
    </header>
  )
}

export default Header
