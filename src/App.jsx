import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreateTask from './components/CreateTask';

const App = () => {
  return (

    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/task" element={<CreateTask />} />
     
  </Routes>
   
  )
}

export default App
