import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { Link } from 'react-router-dom'

import { Channel } from '../../containers-redux/channels/Channel'
import { ChannelEdited } from '../../containers-redux/channels/ChannelEdited'
import { SavingStatus } from '../../containers-redux/channels/SavingStatus'
import { ROOT } from '../../constants/routes'

class Channels extends React.Component {
  static propTypes = {
    channels: PropTypes.instanceOf(Immutable.List).isRequired,
    users: PropTypes.instanceOf(Immutable.List),
    editingChannelId: PropTypes.string,
    selectedChannelId: PropTypes.string,
    channelId: PropTypes.string,
    onCreateChannel: PropTypes.func.isRequired,
    onLoadChannels: PropTypes.func.isRequired,
    onSavingUsersFinished: PropTypes.func.isRequired
  }

  componentDidMount() {
    if (this.props.channels.size === 0) {
      this.props.onLoadChannels()
    }
  }

  componentWillUpdate(nextProps) {
    if (this.props.users !== nextProps.users) {
      this.props.onSavingUsersFinished()
    }
  }

  render() {
    const channelElements = this.props.channels.map((x) => {
      if (x.id === this.props.editingChannelId) {
        return (<ChannelEdited
          key={x.id}
          item={x}
          selected={this.props.channelId === x.id}
        />)
      }

      return <Channel key={x.id} item={x} selected={this.props.channelId === x.id} />
    })

    return (
      <div className="Channels">
        <div className="channels-manage">
          <Link to={ROOT}>
            <h1>Channels.</h1>
          </Link>
          <i
            className="icon-plus"
            onClick={this.props.onCreateChannel}
            title="create a new channel"
          />
        </div>
        <SavingStatus />
        <ul>{channelElements}</ul>
      </div>
    )
  }
}

export { Channels }
