import React from 'react'
import '../components/card.css'
const Card = ({rname,imgdata, price}) => {
  return (
    <div id='singlecard'>
        <div id='imgd'>
            <img src={imgdata} alt="" />
        </div>
      <h5>{rname}</h5>
      <h2>${price}</h2>
    </div>
  )
}

export default Card
