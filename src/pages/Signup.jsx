import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../comps/Footer/Footer'
import Header from '../comps/Header/Header'
import "./Signup.css"

const Signup = () => {
  const [emails, setEmail] = useState("")
  const [passwords, setPassword] = useState("")
  const [repeat, setRepeat] = useState("")
  const [names, setName] = useState("")
  const [errors, setError] = useState("")
  
  
  async function handleSubmit(event)  {
    if (passwords != repeat) {
      setError("Oops, the passwords do not match!")
    return 0
  }
    try {
        const response = await fetch("http://127.0.0.1:3000/api/user/register", {
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
        <h3>Email</h3>
        <input type="text" id="email" name="email" required value={emails}
          onChange={(event)=> {setEmail(event.target.value)}}
        />
        </div>
        <div className="Name">
        <h3>Name</h3>
        <input type="text" id="name" name="name" required value={names}
          onChange={(event)=> {setName(event.target.value)}}
        />
        </div>
        <br/>
       <div className="Password">
       <h3>Password</h3>
         <input type="text" id="password" name="password" required value={passwords}
          onChange={(event)=> {setPassword(event.target.value)}}
        />
       </div> 
       <div className="RepeatPassword">
       <h3>Repeat Password</h3>
         <input type="text" id="repeat" name="repeat" required value={repeat}
          onChange={(event)=> {setRepeat(event.target.value)}}
        />
       </div> 
       <br/>
       {errors && <p> {errors}
        </p>}
       <button onClick={handleSubmit} type="submit">Signup</button>
    </div>
    <Footer/>
    </>  
  )
}

export default Signup