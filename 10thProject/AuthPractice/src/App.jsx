import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Box from './Components/Box';
// import {RouterProvider, } from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Heder from './Components/Heder';
import Footer from './Components/Footer';
import PageNotfound from './PageNotfound';

const App = () => {

  return (
    <GoogleOAuthProvider clientId="557422010052-ri52ggve23ib4doucra051hf3rqbe88b.apps.googleusercontent.com">
      <BrowserRouter>
        <Heder/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/about" element={<About/>} />
              <Route path="*" element={<PageNotfound/>}/>
              <Route path="/login" element={<Box/>}/>
          </Routes>
        <Footer/>  
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
