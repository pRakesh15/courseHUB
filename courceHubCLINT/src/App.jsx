import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/layouts/Home'
import Navbar from './components/layouts/Navbar'
import Courses from './components/Courses/Courses'
import Footer from './components/layouts/Footer'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import Fpassword from './components/Auth/Fpassword'
import Contactpg from './components/layouts/Contactpg'
import About from './components/layouts/About'
import Subscriibe from './components/Payments/Subscriibe'
import NoteFound from './components/layouts/NoteFound'
import PaymentFAiled  from './components/Payments/PaymentFAiled'
import Paymentsuccess  from './components/Payments/Paymentsuccess'
import Course from './components/Courses/Course'
import Profile from './components/Profile/Profile'
import ChangePassword from './components/Profile/ChangePassword'
import UpdateProfile from './components/Profile/UpdateProfile'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import CreateCourse from './components/Admin/CreateCourse'
import AdminCourse from './components/Admin/AdminCourse'
import Users from './components/Admin/Users'
const App = () => {

  // window.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault()
  // })
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
  <Route path='/profile' exact element={<Profile/>}/>
  <Route path='/changePassword' exact element={<ChangePassword/>}/>
  <Route path='/updateProfile' exact element={<UpdateProfile/>}/>
  <Route path='/subscribe' exact element={<Subscriibe/>}/>
  <Route path='/paySuccess' exact element={<Paymentsuccess/>}/>
  <Route path='/payFailed' exact element={<PaymentFAiled/>}/>
  <Route path='/*' exact element={<NoteFound/>}/>

   {/*AdminRouts*/}

  <Route path='/admin/dasbord' exact element={<Dashboard/>}/>
  <Route path='/admin/createcourse' exact element={<CreateCourse/>}/>
  <Route path='/admin/courses' exact element={<AdminCourse/>}/>
  <Route path='/admin/users' exact element={<Users/>}/>

  </Routes>
  <Footer/>
  
  </>
  )
}

export default App
