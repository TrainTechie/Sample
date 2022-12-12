import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
      const{count,inc}=this.props
      return (
        <h3 onMouseEnter={inc}>Hovered {count} times</h3>
      )
  }
}
export default (HoverCounter)