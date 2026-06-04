import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setActive } from '../app/features/search';
const Tab = () => {
    const tabs = ['photos', 'video', 'gif'];
    const dispatch = useDispatch()
    const currTab = useSelector((state)=> state.slice.activeTab)
  return (
    <div >
      {tabs.map(function(elem,idx){
        return <button key={idx} style={{padding:'20px', background:`${(currTab==elem?'blue':'white')}`}} onClick={()=>dispatch(setActive(elem))}>{elem}</button>
      })}
    </div>
  )
}

export default Tab
