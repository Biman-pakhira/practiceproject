import React from 'react'


const Box = ({id, name,description, deleted}) => {
  console.log(id);
  return (
    <div>
      <h1>{name}</h1>
      <h5>{description}</h5>
      <button onClick={()=> deleted(id)}>delete</button>
      
      
    </div>
  )
}

export default Box
