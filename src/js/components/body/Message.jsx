import * as React from 'react'
import PropTypes from 'prop-types'

export class Message extends React.PureComponent {

  render() {
    console.log(this.props)
    return (
      <div className={this.props.loggedInUserEmail === this.props.item.createdBy ? 'Message logged-in-user' : 'Message'}>
        <div className="profile-img" />
        <div className="body">
          <div className="user-name">
            {this.props.item.createdBy}
          </div>
          <div className="text">
            {this.props.item.value}
          </div>
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
    createdBy: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    customData: PropTypes.shape({
      avatarUri: PropTypes.string,
      vote: PropTypes.number.isRequired
    })
  }).isRequired,
  loggedInUserEmail: PropTypes.string.isRequired
}

