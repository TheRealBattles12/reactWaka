import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../comps/Footer/Footer'
import Header from '../comps/Header/Header'

const Signup = () => {
  const [emails, setEmail] = useState("Ben10@example.com")
  const [passwords, setPassword] = useState("123")
  const [names, setName] = useState("John")
  
  
  async function handleSubmit(event)  {
      try {
        const response = await fetch("localhost:3000/api/user/register", {
              method:"post", 
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
                email: emails, 
                password: passwords,
                name: names
              })
        })
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log("Failed to call API")
      }
 }
  return (
    <>
    <Link to={"/Signup"}></Link>
    <Header/>
    <div className="signup">
    <h1>Signup</h1>
        <div className="Mobile/Email">
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
       <button onClick={handleSubmit} type="submit">Signup</button>
    </div>
    <Footer/>
    </>  
  )
}

export default Signup