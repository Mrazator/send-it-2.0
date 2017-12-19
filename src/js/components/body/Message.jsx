import * as React from 'react'
import PropTypes from 'prop-types'

export class Message extends React.PureComponent {
  render() {
    return (
      <div className="Message">
        {this.props.item.value}
      </div>
    )
  }
}

Message.propTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUri: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired
}).isRequired
