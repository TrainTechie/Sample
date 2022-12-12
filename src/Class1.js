import React, { Component } from 'react'
import Class2 from './Class2'
export default class Class1 extends Component {
  constructor(props) {
    super(props)
      this.state = {
        name:"Gokul"
    }
    console.log("Class1's Constructor")
  }
  static getDerivedStateFromProps(props,state){
    console.log("Class1 getDerivedStateFromProps")
    return null;
  }
  componentDidMount(){
     console.log("Class1 componentDidMount")
  }
shouldComponentUpdate()
{
  console.log("Class1 shouldComponentUpdate")
  return true;
}
getSnapshotBeforeUpdate(prevProps,prevState)
{
  console.log("Class1 getSnapshotBeforeUpdate")
  return null;
} 
componentDidUpdate()
{
  console.log("Class1 componentDidUpdate")
}
changeMyState=()=>{
  this.setState({
    name:"Prasath"
  })
}
  render() {
    console.log("Class1 Render method")
    console.log(this.state.name)
    return (
      <>
            <div>In Class 1</div>
            <button onClick={this.changeMyState}>Change State</button>
          <Class2/>
      </>
      )
  }
}
