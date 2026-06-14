import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Logout from './components/Logout'
import {useSelector, useDispatch} from 'react-redux'
function App() {
  const [count, setCount] = useState(0)
  const cheaker = useSelector((state)=>state.logChecker);
  const dispatch = useDispatch();
  console.log(cheaker)
  return (
      <div>
        <h1></h1>
      </div>
      )
}

export default App
