import React from 'react'
import data from "../data/data.json"
const Box = ({id}) => {
  return (
    <div>
    
      <img style={{width:"100vw", height: "100vh", objectFit:"cover"}} src={data[id].profileImage} alt="img" srcSet={data[id].profileImage} />
    </div>

  )
}

export default Box
