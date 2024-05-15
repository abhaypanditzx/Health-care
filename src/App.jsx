import React,{} from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from './pages/Home'
import CareServices from './pages/CareServices'
import About from './pages/About'
import Contact from './pages/Contact'
import JoinHealthCare from './pages/JoinHealthCare'
import Error from './pages/Error'
import Nav from "./Components/Nav"
const App = () => {
 
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/CareServices' element={<CareServices/>}/>
        <Route path='/ContactUs' element={<Contact/>}/>
        <Route path='/AboutUs' element={<About/>}/>
        <Route path='/JoinHealthCare' element={<JoinHealthCare/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>
    </>
  )
}

export default App