import React, { Component, Fragment } from 'react'

export default class Class2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        name:"Gokul"
    }
    console.log("Class2's Constructor")
  }
  static getDerivedStateFromProps(props,state){
    console.log("class2 getDerivedStateFromProps")
    return null;
  }
  componentDidMount(){
     console.log("Class2 componentDidMount")
  }
shouldComponentUpdate()
{
  console.log("Class2 shouldComponentUpdate")
  return true;
}
getSnapshotBeforeUpdate(prevProps,prevState)
{
  console.log("Class2 getSnapshotBeforeUpdate")
  return null;
} 
componentDidUpdate()
{
  console.log("Class2 componentDidUpdate")
}

  render() {
    console.log("Class2 Render method")
    return (
            <div>In Class 2</div>
      )
  }
}
