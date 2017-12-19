import * as React from 'react'
import PropTypes from 'prop-types'

export class Message extends React.PureComponent {
  static propTypes = {
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
    selectedChannelId: PropTypes.string.isRequired,
    loggedInUserEmail: PropTypes.string.isRequired,
    onDeleteMessage: PropTypes.func.isRequired,
    onVoteMessage: PropTypes.func.isRequired
  }

  render() {
    const deleteBtn = this.props.loggedInUserEmail === this.props.item.createdBy
      && (
        <div className="delete">
          <i
            className="icon-trash"
            title="delete"
            onClick={this.props.onDeleteMessage}
          />
        </div>
      )

    return (
      <div
        className={this.props.loggedInUserEmail === this.props.item.createdBy ? 'Message logged-in-user' : 'Message'}
      >
        <div className="profile-img" />
        <div className="body">
          <div className="user-name">
            {this.props.item.createdBy}
          </div>
          <div
            className="text"
            title={new Date(this.props.item.createdAt).toLocaleString()}
          >
            {this.props.item.value}
          </div>
        </div>
        {deleteBtn}
      </div>
    )
  }
}

