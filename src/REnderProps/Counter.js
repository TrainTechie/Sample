import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
      }
      inc=()=>{
        this.setState(({count:this.state.count+1}))
      }
  render() {
    return (
      <div>
      {this.props.render(this.state.count,this.inc)}
        </div>
    )
  }
}

// <Counter 
//   render={(count,inc)=>(
//     <HoverCounter count={count}
//     inc={inc}/>
//   )}
