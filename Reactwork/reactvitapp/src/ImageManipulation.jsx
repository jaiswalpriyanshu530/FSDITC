import React, { useState } from 'react'
import cat from './cat.jpg';
import './imgman.css';
function ImageManipulation() {
const[height,setHeight]=useState(100);
const[angle,setAngle]=useState(30);

function enhancHeight(){
    setHeight(height+20)
    
}
function doRotate(){
    setAngle(angle+30);
}
return (
    <div className='container'>
    <div className='imgdiv' style={{marginTop:'70px',marginLeft:'200px',height:'200px',width:'200px', border:'2px solid red'}}>
        <img src={cat} height={height} width={200} style={{transform:`rotate(${angle}deg)`}}  alt='cat image'/>
    </div>
    <div style={{border:'2px solid red', marginTop:'100px', paddingLeft:'60px'}}>

        <button onClick={enhancHeight} style={{backgroundColor:'cyan',color:'red'}}>Enhance Height</button>
        &nbsp;&nbsp;&nbsp;
        <button>EnhanceWidth</button>
        &nbsp;&nbsp;&nbsp;
        <button>ColorChange</button>
        &nbsp;&nbsp;&nbsp;
        <button>Rotate</button>
    </div>


    </div>
  )
}

export default ImageManipulation