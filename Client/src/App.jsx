import React from 'react'


import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Profile from './assets/pages/Profile'
import SignIn from './assets/pages/SignIn'
import Header from './assets/component/Header'
import SignUp from './assets/pages/SignUp'

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='sign-in' element={<SignIn/>}/>
    <Route path='sign-up' element={<SignUp/>}/>
  </Routes> 
  
  </BrowserRouter>
}
