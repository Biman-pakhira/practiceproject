import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {increase, deletee} from './redux/features/counterSlice'
function App() {
  const [count, setCount] = useState("");
  const cnt = useSelector((s)=>s.value);
  const dispatch = useDispatch();
  console.log(cnt)
  return (
    <>
    <input type="text" value={count} onChange={e=>setCount(e.target.value)}/>
    <button onClick={()=>dispatch(increase(count))}>+Add Task</button>
    {cnt.chker?(cnt.task.map((us, idx)=>(
      <div key={idx}>
        <h1>{us.list}</h1>
        <button onClick={()=>dispatch(deletee(us.id))}>Delete</button>
      </div>
    ))):(<h1>Nothing found</h1>)}
    
    </>
  )
}

export default App
