import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Profile from '../pages/profile/Profile'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Navigation = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Navigation