import React from 'react';
import logo from "../../assets/images/logo.png";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='center-image'>
        <img src={logo} alt="" />
        <br />
      </div>
      <div className='center'>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
