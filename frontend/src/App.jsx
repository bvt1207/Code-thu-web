import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestPage from './pages/TestPage/TestPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from './pages/Personal/Personal'

function App() {
 return(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/personal' element={<Personal/>}/>
    <Route path='/home' element={<Personal/>}/>
  </Routes>
  </BrowserRouter>
  </>
 )
}

export default App
