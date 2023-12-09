import React from 'react'
import logo from "../../assets/images/logo.png"
const Header = () => {
  return (
    <div>
        <img src={logo} alt="" />
        <br/>
        <li>Home</li>
        <li>Menus</li>
        <li>Order Online</li>
        <li>Reservations</li>
        <li>Forum</li>
        <li>Members</li>
        <li>Book Online</li>
    </div>
  )
}

export default Header