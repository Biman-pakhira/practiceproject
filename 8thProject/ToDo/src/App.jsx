import React, { useState } from 'react'

const App = () => {
  const [task,setTask] =useState("");
  const [taskList, setTaskList]=useState([]);

  // console.log(task);
  const submited=(e)=>{
    if(task.length>0){
      setTaskList([...taskList,task]);
      console.log(taskList);
      setTask("");
    }
    e.preventDefault();

  }
  const dlt = (idx)=>{
    let newList = taskList.filter((_,id)=> id !== idx);
    setTaskList(newList);
    
  }
  return (
    <div>
      <form onSubmit={submited}>
        <input type="text" placeholder='Add Task Here' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type="submit">+ Add Task</button>
      </form>
      {taskList.map((user,id)=>(
        <div key={id}>
          {user}
          <button onClick={()=>dlt(id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App
