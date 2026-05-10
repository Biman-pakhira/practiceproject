import React from 'react'

const box = ({id, tasknamee, deleteed}) => {
  return (
    <div>
      <h1>{tasknamee}</h1>
      <button onClick={()=>deleteed(id)}>Delete</button>
    </div>
  )
}

export default box
