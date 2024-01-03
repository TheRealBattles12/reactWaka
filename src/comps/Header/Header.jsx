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
        <a href="#">Home</a>
        <a href="#">Menus</a>
        <a href="#">Order Online</a>
        <a href="#">Reservations</a>
        <a href="#">Forum</a>
        <a href="#">Members</a>
        <a href="#">Book Online</a>
        <a href="#">Log-In</a>
        </div>
  </div> 
  )
}

export default Header