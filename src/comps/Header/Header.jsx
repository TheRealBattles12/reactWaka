import React from 'react'
import logo from "src\assets\images\GoWaka-removebg-preview (1).png"
const Header = () => {
  return (
    <div>
        <img src={logo} />
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