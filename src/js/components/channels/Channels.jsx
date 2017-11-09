import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { Channel } from "../../containers-redux/channels/Channel";
import { ChannelEdited } from "../../containers-redux/channels/ChannelEdited";

const Channels = (props) => {
    const channelElements = props.list.map(x => {
        if (x.id === props.editedItemId) {
            return <ChannelEdited
                key={x.id}
                item={x}
            />
        }

        return <Channel
            key={x.id}
            item={x}
        />
    })

    return (
        <div className="Channels">
            <div className="channels-manage">
                <h1>Channels.</h1>
                <i className="icon-plus" onClick={props.onCreate}/>
            </div>
            <ul>{channelElements}</ul>
        </div>
    )
}

Channels.PropTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    editedItemId: PropTypes.string,
    onCreate: PropTypes.func.isRequired
}

export {Channels}
