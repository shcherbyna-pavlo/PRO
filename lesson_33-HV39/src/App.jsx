import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Users from './pages/Users'
import Albums from './pages/Albums'
import Photos from './pages/Photos'
import './App.css'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/albums' element={<Albums />}></Route>
        <Route path='/photos' element={<Photos />}></Route>
      </Routes>
    </div>
  )
}

export default App
