import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
function App() {
const [obj,setobj]=useState([])
  // const [count, setCount] = useState(0)
  const formsubmition=(e)=>{
    e.preventDefault();
    let val =e.target[0].value;
    if (!obj.includes(val)) {
      let objval = {
        name,roll
      };
      setobj([...obj,objval]);
      console.log(obj);

    }else{
      console.log("exits");
      
    }

    
  }

  return (
    <>
    <form onSubmit={formsubmition}>
      <input type="text" name="name" id="namee" />
      <input type="number"/>
      <button type="submit">Save</button>

    </form>
      {obj.map((user,id)=>(
        <Card key={id} name={obj} roll={user.roll}/>
      ))}
    </>
  )
}

export default App
