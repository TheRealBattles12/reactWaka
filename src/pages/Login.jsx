import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../comps/Footer/Footer';
import Header from '../comps/Header/Header';

const Login = () => {
    return (
      <>
          <Link to={"/Login"}></Link>
      <Header/>
     <div className="Login">
      <h1>Login</h1>
        <div className="Username">
        <h3>Username</h3>
        <input type="text" id="username" name="username" required></input>
        </div>
        <br/>
       <div className="Password">
       <h3>Password</h3>
       <input type="text" id="password" name="password" required></input>
       </div> 
       <button type="submit">Login</button>
       <div class="signup-option">
            <p>Don't have an account?</p>
            <a href="/Signup">Sign Up</a>
        </div>
      </div>
      <Footer/>
      </>
);
};

export default Login;
