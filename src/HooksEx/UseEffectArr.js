import React from "react";
import { useState, useEffect } from "react";

const  EmptyArryaEffect=()=>{
    const[like,setLike]=useState("Gokul");

const inc =() =>{
    setLike(like+1);
}
return(
    <>
        <button onClick={inc}>clickme{like}</button>
    </>
)
}
export default EmptyArryaEffect;