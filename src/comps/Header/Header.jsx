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
        <li>Home</li>
        <li>Menus</li>
        <li>Order Online</li>
        <li>Reservations</li>
        <li>Forum</li>
        <li>Members</li>
        <li>Book Online</li>
        </div>
  </div> 
  )
}

export default Header