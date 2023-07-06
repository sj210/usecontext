import React, { useContext } from 'react'
import { CountContext } from '../App';

function ComponentD() {

    const context = useContext(CountContext);
  return (
    <div> ComponentD  {context.countState} 
        <button onClick={() => context.countDispatch('increment')}> Increment </button>
        <button onClick={() => context.countDispatch('decrement')}> Decrement </button>
        <button onClick={() => context.countDispatch('reset')}> Reset </button>
    </div>
  )
}

export default ComponentD