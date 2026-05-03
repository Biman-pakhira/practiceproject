import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import { createBrowserRouter, RouterProvider} from "react-router"
import Path from './components/Path'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Card/>
    },{
      path: "/cart",
      element: <Path/>
    },{}
  ]);
  
  const [user, setUser] = useState("");

  return (
    <>
      {/* <Card name={user} setUser={setUser}/> */}
      <RouterProvider router={router}/>
    
    </>
  )
}

export default App
