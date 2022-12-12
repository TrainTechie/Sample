import React, { Component } from 'react'
class ClickCounter extends Component {

    render() {    
    return (
      <button onClick={this.props.inc}>ClickCounter {this.props.count}</button>
    )
  }
}
export default (ClickCounter)