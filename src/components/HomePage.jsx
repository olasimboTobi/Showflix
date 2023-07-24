import React from 'react'
import "./HomePage.css"
import SideBar from './SideBar'
import Body from './Body'
import MovieDetailsSubPage from './MovieDetailsSubPage';
import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';



const HomePage = () => {
  const[flix, setFlix] =useState(false)

  return (
    <div className='homepage'>
      <div className='homepage1'>
        <SideBar flix={flix}/>
        <Body/>
      </div>
        
      <Routes>
        <Route path="/:imdbID" element={<MovieDetailsSubPage/>}/>
      </Routes>
      
    </div>
  )
}

export default HomePage