import React from 'react'
import PropTypes from 'prop-types'
import "react-router-dom";
import {Message} from "./Message";

const Body = (props) => {
    // const messageElements = props.messages.map(x => <Message key={x.id} item={x}/>)

    return (
        <div className="Body">
            <div className="Messages">
                <ul>
                    {/*{messageElements}*/}
                </ul>
            </div>

            <div className="MessageManagement">
                <div className="InviteUsers"/>
                <div className="SendText"/>
            </div>

            1.{props.itemId}
            <br/>
            2.{props.channelId}
        </div>
    )
}

Body.propTypes = {
    itemId: PropTypes.string
}

export default Body
