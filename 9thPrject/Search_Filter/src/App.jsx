import React from 'react'
import Box from './Components/Box'
import { useState,useEffect } from 'react'
import axios from 'axios';
const App = () => {
  const [title,setTitle] = useState("");
  const [descpt,setDescpt] = useState("");
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/post")
    .then(response=>setTaskList(response.data.message))
    console.log(taskList);
    
  }, [])
  
 const submitt=(e)=>{
  e.preventDefault();
  setTaskList([...taskList,{
    name: title,
    description: descpt
  }])
  setDescpt("");
  setTitle("");
 }

 const deletee = (id) =>{
    setTaskList(taskList.filter((_,index)=> id!=index))
 }
  return (
    <div>
      <form onSubmit={submitt}>
        <input type="text" placeholder='Add Your Task-Name here' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder='Add Your Task-Dricption here' value={descpt} onChange={(e)=>setDescpt(e.target.value)}/>
        <button type="submit">+Add</button>
      </form>
      {taskList.map((user, id)=> <Box key={user._id} id = {user._id} name={user.name} description={user.description} deleted={deletee}/>)}
    </div>
  )
}
export default App
