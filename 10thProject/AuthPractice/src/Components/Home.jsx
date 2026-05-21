import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

  return (
    <div>
      <button onClick={(e)=>navigate("/about")}>Click</button>
      
    </div>
  )
}

export default Home
