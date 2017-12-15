import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import {Link} from 'react-router-dom'

import {Channel} from "../../containers-redux/channels/Channel"
import {ChannelEdited} from "../../containers-redux/channels/ChannelEdited"
import {SavingStatus} from "../../containers-redux/channels/SavingStatus"
import {ROOT} from "../../constants/routes"

class Channels extends React.PureComponent {
    static propTypes = {
        channels: PropTypes.instanceOf(Immutable.List).isRequired,
        editedItemId: PropTypes.string,
        selectedItemId: PropTypes.string,
        onCreate: PropTypes.func.isRequired
    }

    componentWillMount() {
        this.props.getChannels()
    }

    render() {
        const channelElements = this.props.channels.map(x => {
            if (x.id === this.props.editedItemId) {
                return <ChannelEdited
                    key={x.id}
                    item={x}
                />
            }

            return <Channel key={x.id} item={x}/>
        })

        return (
            <div className="Channels">
                <div className="channels-manage">
                    <Link to={ROOT}><h1>Channels.</h1></Link>
                    <i className="icon-plus" onClick={this.props.onCreate}/>
                </div>
                <SavingStatus/>
                <ul>{channelElements}</ul>
            </div>
        )
    }
}

export {Channels}
