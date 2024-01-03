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
    </div>
    <Footer/>
    </>  
  )
}

export default Signup