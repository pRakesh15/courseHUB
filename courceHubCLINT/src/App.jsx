import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Main/Home'
import Navbar from './components/Main/Navbar'
import Courses from './components/layouts/Courses'
import Footer from './components/Main/Footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Fpassword from './components/Auth/Fpassword'
const App = () => {
  return (
   
  <>
  <Navbar/>
  <Routes>
 
  <Route path='/' exact element={<Home/>}/>
  <Route path='/courses' exact element={<Courses/>}/>
  <Route path='/login' exact element={<Login/>}/>
  <Route path='/Signup' exact element={<Signup/>}/>
  <Route path='/forgotPassword' exact element={<Fpassword/>}/>

  </Routes>
  <Footer/>
  
  </>
  )
}

export default App
