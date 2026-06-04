import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../app/features/search';

const SearchBar = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    
    const searchs = (e)=>{
        e.preventDefault();
        dispatch(setQuery(text))
    }
  return (
    <div>
      <form onSubmit={(e)=> searchs(e)}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
