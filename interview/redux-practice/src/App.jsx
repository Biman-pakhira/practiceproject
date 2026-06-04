import { useState } from "react";
import "./App.css";
// import Counter from "./features/Counter";
// import Navbar from "./components/Navbar";
import { fetchPhotos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import Tab from "./components/Tab";

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
      <SearchBar/>
      <Tab/>
      <button onClick={()=>getph("radha")}>hello</button>
      {user.map((p,id)=>(
          <img key={id} src={p.urls.raw} alt="img" srcSet={p.urls.raw} style={{height:'100px', width:'100px'}}/>
      ))}
    </>
  );
}

export default App;
