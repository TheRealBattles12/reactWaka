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
        <br/>
        <a href="#">Menus</a>
        <br/>
        <a href="#">Order Online</a>
        <br/>
        <a href="#">Reservations</a>
        <br/>
        <a href="#">Forum</a>
        <br/>
        <a href="#">Members</a>
        <br/>
        <a href="#">Book Online</a>
        <br/>
        <a href="#">Log-In</a>
        </div>
  </div> 
  )
}

export default Header