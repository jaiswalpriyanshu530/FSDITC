import React from 'react'
import Student from './Student'
import StateHandling from './StateHandling'

const App = () => {
  // const Studentdata=[{
  //   image:"https://cdn.dummyjson.com/recipe-images/1.webp",
  //   name:"Priyanshu Jaiswal",
  //   roll:"2200320130126",
  //   college:"ABES ENGINEERING COLLEGE"
  // },
  // {
  //   image:"https://cdn.dummyjson.com/recipe-images/2.webp",
  //   name:"Rohan",
  //   roll:"2200320130127",
  //   college:"ABES ENGINEERING COLLEGE"
  // },
  // {
  //   image:"https://cdn.dummyjson.com/recipe-images/3.webp",
  //   name:"Akash",
  //   roll:"2200320130128",
  //   college:"ABES ENGINEERING COLLEGE"
  // }]
  // return (
  //   <div>
  //   <div><h2 style={{color:'red'}}> Hello React JS </h2>
  //   <div>
  //     {
  //       Studentdata.map((ele)=>{
  //         return(
  //           <Student data={ele}/>
  //         )
  //       })
  //     }
  //     {/* <Student image={<img src={'https://cdn.dummyjson.com/recipe-images/1.webp'} height={150}  width={150}/>} name="Priyanshu Jaiswal" roll="2200320130126" college="ABES ENGINEERING COLLEGE"/> */}
  //   </div>
  //   </div>
  //   </div>
  // )
  return(
    <StateHandling/>
  )
}

export default App