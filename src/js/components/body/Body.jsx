import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import "react-router-dom"

import {Message} from "./Message"

class Body extends React.PureComponent {
    static propTypes = {
        itemId: PropTypes.string,
        channelId: PropTypes.string,
        messages: PropTypes.instanceOf(Immutable.List()).isRequired
    }

    render() {
        const messageElements = this.props.messages.map(x => <Message key={x.id} item={x}/>)

        return (
            <div className="Body">
                <div className="Messages">
                    <ul>
                        {messageElements}
                    </ul>
                </div>

                <div className="MessageManagement">
                    <div className="InviteUsers"/>
                    <div className="SendText"/>
                </div>

                1.{this.props.itemId}
                <br/>
                2.{this.props.channelId}
            </div>
        )
    }
}

export default Body
