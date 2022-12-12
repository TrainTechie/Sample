import React, { useState } from 'react'

function HooksEx3() {
    const [name,setName]=useState({fname:"",lname:""})
  return (
    <div>HooksEx3
    <form>
    <input type="text"
    value={name.fname}
    onChange={e=>setName({...name,fname:e.target.value})}>
    </input><br/>
    <input type="text"
    value={name.lname}
    onChange={e=>setName({...name,lname:e.target.value})}>
    </input>
    <h1> Your Fname: {name.fname}</h1>
    <h1> Your Lname: {name.lname}</h1>
    <h1>{JSON.stringify(name).lname}</h1>
    </form>
    </div>
  )
}

export default HooksEx3