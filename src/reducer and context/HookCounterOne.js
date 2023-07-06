import React, { useEffect, useState } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("")

    useEffect(()=>{
        console.log("useefect - updating the document title");

        document.title = `You clicked ${count} times`;
    },[count]) // mounting + updating

  return (
    <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}> useEffect - click {count} times </button>
    </div>
  )
}

export default HookCounterOne