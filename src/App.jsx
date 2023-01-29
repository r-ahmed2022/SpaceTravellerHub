import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Mission from './components/Mission'
import Profile from './components/Profile'
import Rocket from './components/Rocket'
import { LIST_ROCKETS } from './redux/Rocket/rocket'
import './App.css'

function App() {
   return (
    <div className="container">
      <BrowserRouter>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<Rocket />} />
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
