import React from 'react'
import {Link}from 'react-router-dom'
import Box from './Box'
const About = () => {
  return (
    <div>
      This is about section<br></br>
      <Box/>
      <Link to="/">Go to Home Page</Link>
    </div>
  )
}

export default About
