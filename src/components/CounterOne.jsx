import React, { useReducer } from 'react';


const initialState = {
    firsCounter: 0,
    secondCounter: 10,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': 
            return {...state, firsCounter: state.firsCounter + action.value};
        case 'decrement': 
            return {...state, firsCounter: state.firsCounter - action.value};
        case 'increment2': 
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2': 
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset': 
            return initialState;
        default:
            return state
    }
}

function CounterOne() {

    const [count , dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <div> Count = {count.firsCounter} </div>
        

        <button onClick={() => dispatch({type:'increment' , value: 1})}> Increment  </button>
        <button onClick={() => dispatch({type:'decrement' , value: 1})}> Decrement  </button>
        <button onClick={() => dispatch({type:'increment' , value: 3})}> IncrementBy3  </button>
        <button onClick={() => dispatch({type:'decrement' , value: 3})}> DecrementBy3  </button>
        <div> Count = {count.secondCounter} </div>
        <button onClick={() => dispatch({type:'increment2' , value: 5})}> Increment2  </button>
        <button onClick={() => dispatch({type:'decrement2' , value: 5})}> Decrement2  </button>
        <button onClick={() => dispatch({type:'reset'})}> Reset  </button>
    </div>
  )
}

export default CounterOne