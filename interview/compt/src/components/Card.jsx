import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type="text" name="name" id="name" onChange={(e)=>(props.setUser(e.target.value))}/>
        <h1>{props.name}</h1>
    </div>
  )
}

export default Card
