import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<Signin/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />

        <Route element={<PrivateRoutes/>}>
            <Route path='/profile' element={<Profile/>} />
        </Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
