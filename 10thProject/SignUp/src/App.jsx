import React from 'react'
import Header from './components/header'
import Card from './components/Card'
import data from './data/carddata.json'
import './App.css'
const App = () => {

  return (
    <div>
      <Header/>
      <div id='cardsbody'>
        {data.map((user)=>(
          <Card key={user.id} rname={user.rname} imgdata={user.imgdata} price={user.price}/>))}

      </div>
    </div>
  )
}

export default App
