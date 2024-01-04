import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/menu'
import Home from './pages/home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import './App.css'
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/*" element={"This page does not exist"}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App