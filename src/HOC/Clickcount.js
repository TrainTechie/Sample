import React, { Component } from 'react'
import EnComponent from './HOCex'
class Clickcount extends Component {

    render() {
    return (
      <div>
      <button onClick={this.props.inc}>
            Clickcount{this.props.count}
          {this.props.name}
      </button>
      </div>
    )
  }
}
export default EnComponent(Clickcount)