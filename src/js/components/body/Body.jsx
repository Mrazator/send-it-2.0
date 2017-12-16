import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import "react-router-dom"

import {Message} from "./Message"

class Body extends React.PureComponent {
    static propTypes = {
        itemId: PropTypes.string,
        channelId: PropTypes.string,
        messages: PropTypes.instanceOf(Immutable.List()).isRequired,
        onLoadMessages: PropTypes.func.isRequired,
        onCreateMessage: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            text: ""
        }

        this._onTextChange = this._onTextChange.bind(this)
    }

    componentWillMount() {
        this.props.onLoadMessages(this.props.channelId)
    }

    _onTextChange(event) {
        const value = event.target.value

        this.setState({text: value})
    }

    render() {
        const messageElements = this.props.messages !== []
            ? this.props.messages.map(x => <Message key={x.id} item={x}/>)
            : null

        return (
            <div className="Body">
                <div className="Messages">
                    <ul>
                        {messageElements}
                    </ul>
                </div>

                <div className="MessageManagement">
                    <div className="InviteUsers"/>
                    <div className="SendText">
                        <form>
                            <input
                                type="text"
                                value={this.state.text}
                                onChange={this._onTextChange}
                                placeholder="Type some message..."
                            />
                            <button onClick={() => this.props.onCreateMessage(this.props.channelId, this.state.text)}>
                                send it
                            </button>
                        </form>
                    </div>
                </div>

                1.{this.props.itemId}
                <br/>
                2.{this.props.channelId}
            </div>
        )
    }
}

export default Body
