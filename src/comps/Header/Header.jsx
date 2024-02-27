import React from 'react';
import logo from "../../assets/images/logo.png";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="naviGation">
      <marquee behavior="smooth" direction="left" >Welcome to GoWaka, 
      the home of authentic Nigerian cusisine!</marquee>
      <div className='center'>
        <div className='center-image'>
        <img src={logo} alt="" />
        </div>
      <a href="/">Home</a>
      <Link to="/Menu">Order Online</Link>
        <Link to="/Login">Reservations</Link>
        <Link to="/Login">Forum</Link>
        <Link to="/Login">Members</Link>
        <Link to="/Login">Book Online</Link>
        <Link to="/Login">Log-In</Link>
      </div>
    </div>
  );
};

export default Header;
