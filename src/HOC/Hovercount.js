import React, { Component } from 'react'
import EnComponent from './HOCex'
class Hovercount extends Component {

    render() {
        const{name,count,inc}=this.props
    return (
      <div>
      <h1 onMouseLeave={inc}>
            Clickcount{count}
            {name}
      </h1>
      </div>
    )
  }
}
export default EnComponent(Hovercount)