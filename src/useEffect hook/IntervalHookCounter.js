import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        console.log("tick function");
        setCount(count => count + 1);
    }

    useEffect(() => {
        console.log("Interval hook")
        const interval = setInterval(tick, 1000);

        return () => {
           clearInterval(interval); 
        }  // unmounting phase
    }, []);

  return (
    <div>
        {count}
        </div>
  )
}

export default IntervalHookCounter