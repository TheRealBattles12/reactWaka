import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'
import './App.css'
function App(){
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/*" element={"This page does not exist"}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App