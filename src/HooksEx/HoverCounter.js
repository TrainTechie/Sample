import React, { Component } from 'react'
import EnComponent from './HOCex'

class HoverCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {count:0}
  }
  inc=()=>{this.setState(
    {count:this.state.count+1})}
    
    render() {
      const{count,inc}=this.props
      return (
        <>
      <h3 onMouseEnter={inc}>Hovered {count} times</h3>
      
      </>
    )
  }
}
export default EnComponent(HoverCounter)