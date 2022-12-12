import React, { Component } from 'react'
import EnComponent from './HOCex'
class ClickCounter extends Component {

    render() {    
    return (
      <button onClick={this.props.inc}>ClickCounter {this.props.count}</button>
    )
  }
}
export default EnComponent(ClickCounter)