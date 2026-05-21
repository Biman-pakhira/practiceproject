import React from 'react'
import {useNavigate} from 'react-router-dom'
const PageNotfound = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>404 Page not found</h1>
      <button onClick={(e)=> navigate("/login")}>Login</button>
    </div>
  )
}

export default PageNotfound
