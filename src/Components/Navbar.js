import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg' 


export const Navbar = () => {
  return (
    <div className='navbox' >
      <div className='leftside'> 
        <img src={logo} alt=""/>
      </div>
      <div className='rightside'> </div>
        <Link to='/signup' className='navlinks'>Sign Up</Link>
        <Link to='/login' className='navlinks'>Login</Link> 


    </div>
  )
}
