import PropTypes  from 'prop-types'
import React, { Component } from 'react'
class Greetings extends Component {
  render() {
    return (
      <div>Greetings: {this.props.num}</div>
    );
  }
}
  Greetings.propTypes={
    num:PropTypes.number.isRequired
}
Greetings.default={
    num:1
}

export default Greetings