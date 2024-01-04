import React from 'react'
import logo from "../../assets/images/logo.png"
import './Header.css'
import { Link } from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
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
        
        <a href="/Login">Order Online</a>
        
        <a href="/Login">Reservations</a>
        
        <a href="/Login">Forum</a>
        
        <a href="/Login">Members</a>
        
        <a href="/Login">Book Online</a>
        
        <a href="/Login">Log-In</a>
        </div>
  </div> 
  )
}

export default Header