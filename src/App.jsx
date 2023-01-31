import React, {  useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import RocketList from './components/RocketList'
import MissionList from './components/MissionList';
import { LIST_ROCKETS } from './redux/Rocket/rocket'
import { LIST_MISSIONS } from './redux/Missions/mission'

import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(LIST_ROCKETS())
    dispatch(LIST_MISSIONS())

   }, [dispatch])

   return (
    <div className="container">
      <BrowserRouter>
            <Navbar />
            <Routes>
            <Route exact path="/" element={<RocketList />} />
            <Route path="/mission" element={<MissionList />} />
            <Route path="/profile" element={<Profile />} />

            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
