import { useRef, useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addtask,deletetask } from './redux/features/todoSlice';
function App() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const allTask = useSelector((u)=> u.tasks);
  const fc = useRef();

  
  const submission = (e)=>{
    e.preventDefault();
    if(task.length){
      dispatch(addtask(task));
      setTask("");
      fc.current.focus();
    }else{
      alert("enter task")
    }
  }
  return (
    <>
      <form onSubmit={submission}>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} ref={fc}/>
        <button type="submit">+Add</button>
      </form>
        {allTask.map((e,idx)=>(
          <div key={idx}>
          <h1>
            {e.task}
          </h1>
          <button onClick={(()=> dispatch(deletetask(e.id)))}>Delete</button>
          </div>
        ))}
    </>
  )
}

export default App
