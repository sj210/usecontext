import React, { useContext } from 'react'
import { CountContext } from '../App';

function ComponentA() {

    const context = useContext(CountContext);

  return (
    <div> ComponentA  {context.countState} 
        <button onClick={() => context.countDispatch('increment')}> Increment </button>
        <button onClick={() => context.countDispatch('decrement')}> Decrement </button>
        <button onClick={() => context.countDispatch('reset')}> Reset </button>

    </div>
  )
}

export default ComponentA