import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <>

    <nav className='navbar'>
      <h3 className="logo">Logo</h3>
      <ul className="nav-links">
        <Link to='/' className='home'> 
          <li>Home</li>
        </Link>
        <Link to='/about' className='about'>
          <li>About</li>
        </Link>
        <Link to='/products' className='skills'>
          <li>Products</li>
        </Link>
        <Link to='/cart' className='contact'>
          <li>Cart</li>
        </Link>
        <Link to='/blog' className='blog'>
          <li>Blog</li>
        </Link>
        <Link to='/signup' className='signup'>
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>

    </>
  )
}

export default Header