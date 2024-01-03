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
        <a href="/">Home</a>
        
        <a href="/Menu">Menus</a>
        
        <a href="/login">Order Online</a>
        
        <a href="/login">Reservations</a>
        
        <a href="/login">Forum</a>
        
        <a href="/login">Members</a>
        
        <a href="/login">Book Online</a>
        
        <a href="/login">Log-In</a>
        </div>
  </div> 
  )
}

export default Header