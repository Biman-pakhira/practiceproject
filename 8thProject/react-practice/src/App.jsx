import React, { useState,useRef } from 'react'
import Box from '../src/Components/Box'
const App = () => {
  const [taskk, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const first = useRef(null)
  const submitt = (e) =>{
    e.preventDefault()
    setTaskList([...taskList,taskk])
    first.current.value="";    
  }
  const deleteed = (index) => {
    const newlist = taskList.filter((_, i) => i !== index)
    setTaskList(newlist)
  }
  return (
    <>
      <div>
        <form action="get" onSubmit={submitt}>
          <input type="text" name="task" id="task" placeholder='Add Task' ref={first} onChange={(e)=> setTask(e.target.value)}/>
          <button type="submit">+Add</button>
        </form>
      </div>
      {
        taskList.map((val, index)=> (<Box key={index} id={index} tasknamee={val} deleteed={deleteed}/>))
      }
    </>
  )
}

export default App
