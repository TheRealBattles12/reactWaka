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
        <Link to="/">Home</Link>
        <Link to="/Menu">Menus</Link>
        <Link to="/Login">Order Online</Link>
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
