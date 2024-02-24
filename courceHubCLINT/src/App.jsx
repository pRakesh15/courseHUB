import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Main/Home'
import Navbar from './components/Main/Navbar'
import Courses from './components/layouts/Courses'
import Footer from './components/Main/Footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Fpassword from './components/Auth/Fpassword'
import Contactpg from './components/layouts/Contactpg'
import About from './components/Main/About'
import Subscriibe from './components/Payments/Subscriibe'
import NoteFound from './components/layouts/NoteFound'
import PaymentFAiled  from './components/Payments/PaymentFAiled'
import Paymentsuccess  from './components/Payments/Paymentsuccess'
import Course from './components/Main/Course'
const App = () => {

  window.addEventListener("contextmenu",(e)=>{
    e.preventDefault()
  })
  return (
   
  <>
  <Navbar/>
  <Routes>
 
  <Route path='/' exact element={<Home/>}/>
  <Route path='/courses' exact element={<Courses/>}/>
  <Route path='/course/:id' exact element={<Course/>}/>
  <Route path='/login' exact element={<Login/>}/>
  <Route path='/Signup' exact element={<Signup/>}/>
  <Route path='/forgotPassword' exact element={<Fpassword/>}/>
  <Route path='/contact' exact element={<Contactpg/>}/>
  <Route path='/about' exact element={<About/>}/>
  <Route path='/subscribe' exact element={<Subscriibe/>}/>
  <Route path='/paySuccess' exact element={<Paymentsuccess/>}/>
  <Route path='/payFailed' exact element={<PaymentFAiled/>}/>
  <Route path='/*' exact element={<NoteFound/>}/>

  </Routes>
  <Footer/>
  
  </>
  )
}

export default App
