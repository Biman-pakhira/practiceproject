import { useState } from "react";
import "./App.css";
// import Counter from "./features/Counter";
// import Navbar from "./components/Navbar";
import { fetchPhotos } from "./api/mediaApi";

function App() {
  const [user,setUser]=useState([]);
  async function getph(query) {

    let res = await fetchPhotos(query)
    setUser(res);
    console.log(user);
    
    
  }
  return (
    <>
      {/* <Navbar /> */}
      {/* <Counter /> */}
      <button onClick={()=>getph("radha")}>hello</button>
      {user.map((p)=>(
          <img src={p.urls.raw} alt="img" srcSet={p.urls.raw} style={{height:'100px', width:'100px'}}/>
      ))}
    </>
  );
}

export default App;
