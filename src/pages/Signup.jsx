import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../comps/Footer/Footer'
import Header from '../comps/Header/Header'

const Signup = () => {
  return (
    <>
    <Link to={"/Signup"}></Link>
    <Header/>
    <div className="signup">
    <h1>Signup</h1>
        <div className="Username">
        <h3>Username</h3>
        <input type="text" id="username" name="username" required></input>
        </div>
        <br/>
       <div className="Password">
       <h3>Password</h3>
       <input type="text" id="password" name="password" required></input>
       </div> 
       <div className="RepeatPassword">
       <h3>Repeat Password</h3>
       <input type="text" id="password" name="password" required></input>
       </div> 
       <button type="submit">Signup</button>
       <div class="login-option">
            <p>Already have an account?</p>
            <a href="/Login">Log In</a>
        </div>
    </div>
    <Footer/>
    </>  
  )
}

export default Signup