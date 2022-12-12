import React,{useState} from 'react'

function HooksCounter() {
    const [like,setLike]=useState(0)//Array Destructuring
  
  
    return (
    <div>
    Hooks Counter<br/>
    {like}
    <button onClick={()=>setLike(prevLike=>prevLike+1)}>Increase</button>
    
    <button onClick={()=>setLike(prevLike=>prevLike+1)}>Decrease</button>
    
    <button onClick={()=>setLike(prevLike=>prevLike+5)}>Inc By 5</button>
    </div>
  )
}
export default HooksCounter



// function HooksCounter() {
//   const [Like,setLike]=useState(0)//Array Destructuring


//   return (
//   <div>
//   Hooks Counter<br/>
//   <button onClick={()=>setLike(Like+1)}>Increase{Like}</button>
//   <button onClick={()=>setLike(Like-1)}>Decrease{Like}</button>
//   </div>
// )
// }