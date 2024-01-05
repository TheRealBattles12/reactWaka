import React from 'react';
import logo from "../../assets/images/logo.png";
import './Header.css';
import { a } from 'react-router-dom';

const Header = () => {
  return (
    <div className="naviGation">
      <div className='center-image'>
        <img src={logo} alt="" />
        <br />
      </div>
      <div className='center'>
        <a to="/">Home</a>
        <a to="/Menu">Menus</a>
        <a to="/Login">Order Online</a>
        <a to="/Login">Reservations</a>
        <a to="/Login">Forum</a>
        <a to="/Login">Members</a>
        <a to="/Login">Book Online</a>
        <a to="/Login">Log-In</a>
      </div>
    </div>
  );
};

export default Header;
