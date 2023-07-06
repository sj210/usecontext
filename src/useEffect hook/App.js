import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
import HookCounterOne from './HookCounterOne';
import IntervalHookCounter from './IntervalHookCounter';

function App() {

  const [boolean, setboolean] = useState(true);

  // useEffect(() => {
  //   console.log(buttonType, "empty bracket");
  // }, []) // if the dependency aaray is empty then the function is only called on initial rendering.(mounting phase)

  // useEffect(() => {
  //   console.log(buttonType, "dependency passed");
  // }, [buttonType]); // this callback is called in initial rendering + updation calls. (mounting + updation)
  

  return (
    <div className="App">
        {/* <button onClick={() => setButtonType('Home')}> Home </button>
        <button onClick={() => setButtonType('About')}> About </button>
        <button onClick={() => setButtonType('Contact')}> Contact </button>
    <h3> {buttonType}</h3> */}
    <HookCounterOne/>
    {/* <button onClick={() => setboolean(false)}> Remove Interval Hook</button>
      {boolean && <IntervalHookCounter/>} */}
    </div>
  );
}

export default App;
