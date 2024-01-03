import React from 'react'
import logo from "../../assets/images/logo.png"
import './Header.css'
const Header = () => {
  return (
  <div>
    <div className='center-image'>
        <img src={logo} alt="" />
        <br/>
    </div>  
        <div className='center'>   
        <a>Home</a>
        <a>Menus</a>
        <a>Order Online</a>
        <a>Reservations</a>
        <a>Forum</a>
        <a>Members</a>
        <a>Book Online</a>
        <a>Log-In</a>
        </div>
  </div> 
  )
}

export default Header