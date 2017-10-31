import React, {Component} from 'react'
import Immutable from 'immutable'
import '../../styles/components/Channels.css'
import {uuid} from '../utils/uuid'
import Channel from "./Channel";

class Channels extends Component {
    constructor() {
        super()

        this.state = {
            list: Immutable.List([
                {
                    id: uuid(),
                    name: "#channel1",
                    customData: "custom data of channel1"
                },
                {
                    id: uuid(),
                    name: "#channel2",
                    customData: "custom data of channel2"
                },
                {
                    id: uuid(),
                    name: "#channel3",
                    customData: "custom data of channel3"
                },
            ])
        }

        this._onCreateNew = this._onCreateNew.bind(this)
        this._onDelete = this._onDelete.bind(this)
    }

    _onCreateNew() {
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: uuid(),
                name: 'New item',
                customData: ''
            })
        }));
    }

    _onDelete(deletedItemId) {
        this.setState((previousState) => ({
            list: previousState.list.filterNot(item => item.id === deletedItemId)
        }));
    };


    render() {
        const {list} = this.state

        const channelElements = list.map(x => <Channel key={x.id} item={x} onDelete={this._onDelete}/>)

        return (
            <div className="Channels">
                <div className="channels--manage">
                    <h1>Channels</h1>
                    <i className="icon-plus" onClick={this._onCreateNew}/>
                </div>
                <ul>{channelElements}</ul>
            </div>
        )
    }
}

export default Channels
