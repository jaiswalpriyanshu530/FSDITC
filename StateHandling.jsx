import React, { useState } from 'react'

function Statehandling() {
  
    const[count,setCount]=useState(20);
    function doIncrement(){
        setCount(count+20)
    }
    return(
        <div>
    <div>Statehandling
        <h2>Counter Value :{count}</h2>
    </div>
    <div>
        <button onClick={doIncrement}>Increment</button>
    </div>
</div>
    )
}

export default Statehandling