import React from 'react'
import PropTypes from 'prop-types'
import 'react-router-dom'
import Immutable from 'immutable'

import { Message } from './Message'

class Body extends React.PureComponent {
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
  }

  async componentDidMount() {
    await this.props.onLoadMessages(this.props.channelId)
    this.props.onLoadedMessage()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel.messages !== nextProps.selectedChannel.messages) {
      this.setState({ text: '' })
    }
  }

  _onTextChange(event) {
    const { target: { value } } = event
    this.setState({ text: value })
  }

  render() {
    const channelName = this.props.channel !== undefined
      && (
        <div className="channel-name">
          <h2>{this.props.channel.name}</h2>
        </div>
      )

    const users = this.props.channel !== undefined
      && this.props.channel.customData.users.map(x => <span key={x} className="channel-user">{x}</span>)

    const messageElements = this.props.selectedChannel.messages !== []
      && this.props.selectedChannel.messages.map(x => <Message key={x.id} item={x} />)

    return (
      <div className="Body">
        <div className="header">
          {channelName}
          <div className="channel-users">
            {users}
          </div>
        </div>

        <div className="Messages">
          <ul>
            {messageElements}
          </ul>
        </div>

        <div className="send-it">
          <form>
            <input
              type="text"
              value={this.state.text}
              onChange={this._onTextChange}
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
