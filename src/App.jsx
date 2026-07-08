import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'
import CheckOut from './pages/CheckOut.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>

  )
}
export default App
