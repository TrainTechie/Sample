import React,{useEffect,useState,} from 'react'

function UseEffectEx(){

    let [count,setCount]=useState(0);
    
    const handler=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        document.title=count  //check with title bar
        document.getElementById("ptag").innerText="Naga"+count
        console.log("Am USe Effect")
    })

    return(
        <>
          <h2>clikcme {count}</h2>
          <button onClick={handler}>change</button>
          <p id="ptag"></p>
        </>
    )
}
export default UseEffectEx