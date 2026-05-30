import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './counterSlice';
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(
        (state)=> state.counter.value
    )
  return (
    <div>
      {count}
      <button onClick={()=>dispatch(increment())}>increment</button>
    </div>
  )
}

export default Counter
