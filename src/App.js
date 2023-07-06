import { createContext, useReducer } from 'react';
import './App.css';
// import AuthContext from './components/AuthContext';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
// import CounterOne from './components/CounterOne';


const initialState = 0;

const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState
    default:
      return state;

  }
}

export const CountContext = createContext();

function App() {

 const [count, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA/>
        <ComponentB/>
      </CountContext.Provider>
    </div>
  );
}

export default App;
