import React, { Component } from 'react'
export default class ClassCounter extends Component {
  constructor(){
    super();
    this.state=({
        count:0,
        name:"Pradeep",
    })
  }
  increment=()=>{
    this.setState(({count:this.state.count+1}))
  }
    render() {
    return (
      <div>
      <p>Claass Counter</p>
      <button onClick={this.increment}>Count{this.state.count}
      </button>
      </div>
    )
  }
}
