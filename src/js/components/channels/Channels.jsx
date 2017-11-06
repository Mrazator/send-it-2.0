import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import { Channel } from "./Channel";
import ChannelEdited from "../../containers/channels/ChannelEdited";

const Channels = (props) => {
    const channelElements = props.list.map(x => {
        if (x.id === props.editedItemId) {
            return <ChannelEdited
                key={x.id}
                item={x}
                onUpdateItem={props.onUpdateItem}
                onCancelEditing={props.onCancelEditing}
            />
        }

        return <Channel
            key={x.id}
            item={x}
            onDelete={() => props.onDelete(x.id)}
            onStartEditing={() => props.onStartEditing(x.id)}
        />
    })

    return (
        <div className="Channels">
            <div className="channels-manage">
                <h1>Channels.</h1>
                <i className="icon-plus" onClick={props.onCreateNew}/>
            </div>
            <ul>{channelElements}</ul>
        </div>
    )
}

Channels.PropTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    editedItemId: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onStartEditing: PropTypes.func.isRequired,
    onCancelEditing: PropTypes.func.isRequired,
    onCreateNew: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired
}

export {Channels}
