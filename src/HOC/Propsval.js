import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Propsval extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}
Propsval.propTypes={
    name:PropTypes.string,
    num:PropTypes.number.isRequired
}
Propsval.defaultProps={
    name:"Gokul"
}