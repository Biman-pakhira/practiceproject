import React, { useState } from 'react'
import Box from './Components/Box'
import './App.css'
import data from "./data/data.json"

import { useEffect } from 'react'
const App = () => {
  let[i,setI]=useState(0);
  
        useEffect(() => {
      const interv = setInterval(async() => {
        setI((e)=>{
        console.log(e);
        if(e > data.length-2){
           return 0
          }else return e+1;
      })
      }, 500);
        return () => clearInterval(interv);
      }, [])
      
  return (
    <div>

      <Box id={i}/>
    </div>
  )
}

export default App
