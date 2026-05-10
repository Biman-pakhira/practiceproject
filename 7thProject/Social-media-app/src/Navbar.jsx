import React, { useEffect } from 'react'
import './App.css'
import { MdHomeFilled } from "react-icons/md";import { IoIosNotifications } from "react-icons/io";
import { FaBookmark,FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Navbar = () => {
  const navigation = useNavigate();
 useEffect(()=>{
   axios.get("http://localhost:8080/")
   .then(vest=>console.log(vest.data[2].name))
  },[])
  return (
    <div className='navv'>
      <input type="checkbox" name="" id="" defaultChecked={true}/>
      <h3>Travelmedia.com</h3>
      <div className='navvb'>
        <MdHomeFilled onClick={()=>navigation('/')} className='iconn'/>
        <IoIosNotifications onClick={()=>navigation('/nofication')} className='iconn'/>
        <FaBookmark className='iconn'/>
        <FaUser className='iconn'/>
        
      </div>
    </div>
  )
}

export default Navbar
