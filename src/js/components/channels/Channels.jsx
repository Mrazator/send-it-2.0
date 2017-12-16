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
        channelId: PropTypes.string,
        users: PropTypes.array,
        onCreate: PropTypes.func.isRequired,
        getChannels: PropTypes.func.isRequired,
        savingEnded: PropTypes.func.isRequired
    }

    componentWillUpdate(nextProps) {
        if(this.props.users !== nextProps.users){
            this.props.savingEnded()
        }
    }

    componentDidMount() {
        this.props.getChannels()
    }

    render() {
        const channelElements = this.props.channels.map(x => {
            if (x.id === this.props.editedItemId) {
                return <ChannelEdited
                    key={x.id}
                    item={x}
                    selected={this.props.channelId === x.id}
                />
            }

            return <Channel key={x.id} item={x} selected={this.props.channelId === x.id}/>
        })

        return (
            <div className="Channels">
                <div className="channels-manage">
                    <Link to={ROOT}><h1>Channels.</h1></Link>
                    <i
                        className="icon-plus"
                        onClick={this.props.onCreate}
                        title="create a new channel"
                    />
                </div>
                <SavingStatus/>
                <ul>{channelElements}</ul>
            </div>
        )
    }
}

export {Channels}
