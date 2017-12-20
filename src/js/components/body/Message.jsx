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
    const isLoggedIn = this.props.loggedInUserEmail === this.props.item.createdBy

    const deleteBtn = isLoggedIn
      && (
        <div className="delete">
          <i
            className="icon-trash"
            title="delete"
            onClick={this.props.onDeleteMessage}
          />
        </div>
      )

    const voteBtn = !isLoggedIn
    && (
      <div className="vote">
        <i
          className="icon-plus"
          onClick={this.props.onVoteMessage}
        />
      </div>
    )

    const voteNmb = !isLoggedIn
    && (
      <div className="vote-number">
        +{this.props.item.customData.vote || 0}
      </div>
    )

    return (
      <div
        className={isLoggedIn ? 'Message logged-in-user' : 'Message'}
      >
        <div className="col-1">
          {voteNmb}
          <div className="profile-img" />
        </div>
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
        {voteBtn}
        {deleteBtn}
      </div>
    )
  }
}

