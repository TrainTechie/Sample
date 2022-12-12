import React, { useState,useEffect } from 'react'
function HooksEx() {
  const[count,setCount]=useState(0)
  useEffect(()=>{
      setCount(count+0)
      console.log({count})
    })
    return (
    <div> 
    <h1>{count}</h1>
         <button onClick={()=>{setCount(count+1)}}>ClickMe </button>
         <button onClick={()=>{setCount(count-1)}}>ClickMe </button>
         <button onClick={()=>{setCount(count+5)}}>ClickMe </button>
    </div>
  )
}
export default HooksEx