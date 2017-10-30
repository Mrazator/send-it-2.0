import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/Channel.css'

class Channel extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      customData: PropTypes.string
    }).isRequired
  }

  render() {
    return (
      <li>{this.props.item.name}</li>
    )
  }
}

export default Channel