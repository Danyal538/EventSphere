import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './pages/SignUp'
import { useLocation } from 'react-router-dom'
import Login from './pages/Login'
import EventDescription from './pages/EventDescription'
import ScrollToTop from './components/ScrollToTop'
import TicketBooking from './pages/TicketBooking'
import TicketDetail from './pages/TicketDetail'
import TicketSummary from './pages/TicketSummary'
import Account from './pages/Account'
import RegisteredUserNavbar from './components/RegisteredUserNavbar'
import CreateEventEdit from './pages/CreateEventEdit'

function App() {
  const location = useLocation();
  const hideLayoutPaths = ['/signup', '/login', '/booking', '/details', '/summary'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <RegisteredUserNavbar />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/event-description' element={<EventDescription />} />
        <Route path="/booking" element={<TicketBooking />} />
        <Route path='/details' element={<TicketDetail />} />
        <Route path='/summary' element={<TicketSummary />} />
        <Route path='/profile' element={<Account />} />
        <Route path='/createPageEdit' element={<CreateEventEdit />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  )
}

export default App
