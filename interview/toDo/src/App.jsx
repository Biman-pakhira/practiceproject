import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addtask,deleted } from './redux/features/featureSlice';
function App() {
  const [count, setCount] = useState([]);
  const tsk = useSelector((state)=> (state.pathh.tasks));
  const dispatch = useDispatch();
  console.log(tsk);
  return (
    <>
    <input type="text" name="task" value={count} onChange={(e)=>setCount(e.target.value)}/>
    <button onClick={()=>dispatch(addtask(count))}>Add</button>
    {tsk.map((t, idx)=>(
      <div key={idx}>
        <h1>{t.taskName}</h1>
        <button onClick={()=>dispatch(deleted(t.id))}>Delete</button>
        </div>
    ))}
    </>
  )
}

export default App
