import React from "react";
import { useState } from "react";

const FavColor =()=>{

    const[color,setColor]=useState("green");

    return(
        <>
           <h3>my color is :  {color}</h3>
           <button onClick={()=>setColor("red")}>click1</button>
           <button onClick={()=>setColor("blue")}>click2</button>
           <button onClick={()=>setColor("yellow")}> click3</button>
        </>
    )

}
export default FavColor;