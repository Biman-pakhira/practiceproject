import React from 'react'

const Card = (props) => {
    if(props.roll>=50){
        return (
          <div>
            <h1>{props.name}</h1>
            <p>{props.roll}</p>
          </div>
        )
    }
}

export default Card
