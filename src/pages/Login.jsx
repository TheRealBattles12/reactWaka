import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../comps/Footer/Footer';
import Header from '../comps/Header/Header';

const Home = () => {
    return (
      <>
      <Link to={"/"}></Link>
      <Header/>
     <div className="Login">
      <h1>Login</h1>
        <div className="Username">
        <input type="text" id="username" name="username" required></input>
        </div>
       <div className="Password">
       <input type="text" id="password" name="password" required></input>
       </div> 
       <button type="submit">Login</button>
       <div class="signup-option">
            <p>Don't have an account?</p>
            <a href="/signup">Sign Up</a>
        </div>
      </div>
      <Footer/>
      </>
);
};

export default Home;
