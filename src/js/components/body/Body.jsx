import React from 'react'
import PropTypes from 'prop-types'
import 'react-router-dom'
import Immutable from 'immutable'

import { MessageRedux } from '../../containers-redux/body/Message'

class Body extends React.Component {
  static propTypes = {
    channel: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      customData: PropTypes.shape({
        owner: PropTypes.string.isRequired,
        users: PropTypes.array.isRequired
      })
    }),
    selectedChannel: PropTypes.shape({
      id: PropTypes.string,
      isLoading: PropTypes.bool.isRequired,
      messages: PropTypes.instanceOf(Immutable.List).isRequired
    }).isRequired,
    channelId: PropTypes.string.isRequired,
    onLoadMessages: PropTypes.func.isRequired,
    onCreateMessage: PropTypes.func.isRequired,
    onLoadedMessage: PropTypes.func.isRequired
  }

  static defaultProps = {
    channel: undefined
  }

  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }

    this._onTextChange = this._onTextChange.bind(this)
    this._handleEnterKey = this._handleEnterKey.bind(this)
    this._LoadMessages = this._LoadMessages.bind(this)
  }

  async componentDidMount() {
    await this._LoadMessages()
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.text !== nextState.text
  //     || this.props.channel !== nextProps.channel
  //     || this.props.selectedChannel.messages !== nextProps.selectedChannel.messages
  // }

  async _LoadMessages(lastN) {
    await this.props.onLoadMessages(this.props.channelId, lastN)
    this.props.onLoadedMessage()
  }

  _onTextChange(event) {
    const { target: { value } } = event
    this.setState({ text: value })
  }

  async _handleEnterKey(e) {
    if (e.keyCode === 13) { // Enter key
      await this.props.onCreateMessage(this.props.channelId, this.state.text)
      this.setState({ text: '' })
    }
  }

  render() {
    const channelName = this.props.channel !== undefined
      && (
        <div className="channel-name">
          <h2>{this.props.channel.name}</h2>
        </div>
      )

    const loadMoreBtn = this.props.selectedChannel.isLoading
      ? (
        <span>loading...</span>
      )
      : (
        <button
          onClick={() => this._LoadMessages(this.props.selectedChannel.messages.size + 10)}
        >
          Load more
        </button>
      )

    const users = this.props.channel !== undefined
      && this.props.channel.customData.users.map(x => <span key={x} className="channel-user">{x}</span>)

    const messageElements = this.props.selectedChannel.messages !== []
      && this.props.selectedChannel.messages.map(x => (<MessageRedux
        key={x.id}
        item={x}
        selectedChannelId={this.props.channelId}
      />))

    const admin = this.props.channel !== undefined &&
      <span
        key={this.props.channel.customData.owner}
        className="channel-user admin"
      >
        admin | {this.props.channel.customData.owner}
      </span>

    return (
      <div className="Body">
        <div className="header">
          {channelName}
          <div className="channel-users">
            {admin}
            {users}
          </div>
        </div>
        <div className="messages-container">
          <div className="btn-load-more">
            {loadMoreBtn}
          </div>
          <div className="Messages">
            <ul>
              {messageElements}
            </ul>
          </div>
        </div>

        <div className="send-it">
          <form>
            <input
              type="text"
              value={this.state.text}
              onChange={this._onTextChange}
              onKeyDown={this._handleEnterKey}
              placeholder="Type a message..."
            />
            <i
              className="icon-chat"
              title="send it."
              onClick={() =>
                this.props.onCreateMessage(this.props.channelId, this.state.text)}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Body
