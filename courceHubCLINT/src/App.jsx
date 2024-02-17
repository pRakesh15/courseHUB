import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Main/Home'
import Navbar from './components/Main/Navbar'
import Courses from './components/layouts/Courses'
import Footer from './components/Main/Footer'
const App = () => {
  return (
   
  <>
  <Navbar/>
  <Routes>
 
  <Route path='/' exact element={<Home/>}/>
  <Route path='/courses' exact element={<Courses/>}/>

  </Routes>
  <Footer/>
  
  </>
  )
}

export default App
