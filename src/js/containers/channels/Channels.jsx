import React, {Component} from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'
import { Channels as ChannelsComponent } from "../../components/channels/Channels"

class Channels extends Component {

      static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        onCreate: PropTypes.func.isRequired,
        editedItemId: PropTypes.string,
      }

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            localStorage.setItem('channelList', JSON.stringify(nextProps.list.toJS()))
        }
    }

    render() {
        return (
            <ChannelsComponent
                list={this.props.list}
                editedItemId={this.props.editedItemId}
                onCreate={this.props.onCreate}
            />
        )
    }
}

export default Channels
