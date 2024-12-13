import React,{ useEffect, useState } from 'react'

function UseEffectWork(){
const[count,setcount]=useState(10);
const[pointer,setPointer]=useState(100);
function doIncrement(){
    setcount(count+20);
}
function doPointer(){
    setPointer(Pointer-10);
}

    useEffect(()=>{
        console.log("Component is rendered"+count);
        console.log("Component is rendered using pointer"+pointer);
    },[count,pointer])
  return (
    <div>
count value:{count}
<br></br>
pointer value:{count}
<div>
    <button onClick={doIncrement}>Increment</button>
    <button onClick={doPointer}>Pointer</button>
</div>
    </div>
    // <div>UseEffectWork</div>
  )
}
export default UseEffectWork