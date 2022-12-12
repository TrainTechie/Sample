import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
    super();
    this.state={counter:0};
    }
    handleclick(){
        this.setState(({counter})=>(  
        {counter:counter+1})
        )
        console.log(this.state.counter)
    }
  render() {
    if(this.state.counter===5){
        throw new console.error("Reached 5 Error set manually");
    }
    return (
      <div>Counter : {this.state.counter}
      <button onClick={this.handleclick.bind(this)}>Increment</button></div>
    )
  }
}
