import React, {Component} from 'react'
import Immutable from 'immutable'
import {uuid} from '../../utils/uuid'
import { Channels as ChannelsComponent } from "../../components/channels/Channels"

class Channels extends Component {
    constructor() {
        super()

        this.state = {
            list: Channels._loadInitialTodoList(),
            editedItemId: null
        }

        Channels._getDefaultTodoList = Channels._getDefaultTodoList.bind(this)
        Channels._loadInitialTodoList = Channels._loadInitialTodoList.bind(this)
        this._onCreateNew = this._onCreateNew.bind(this)
        this._onDelete = this._onDelete.bind(this)
        this._startEditing = this._startEditing.bind(this)
        this._cancelEditing = this._cancelEditing.bind(this)
        this._updateItem = this._updateItem.bind(this)
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.list !== nextState.list) {
            localStorage.setItem('channelList', JSON.stringify(nextState.list.toJS()))
        }
    }


    static _getDefaultTodoList() {
        return Immutable.List([
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
            }
        ])
    }

    static _loadInitialTodoList() {
        const storedListJSON = localStorage.getItem('channelList');
        return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : Channels._getDefaultTodoList();
    }

    _onCreateNew() {
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: uuid(),
                name: 'new channel',
                customData: ''
            })
        }))
    }

    _onDelete(deletedItemId) {
        this.setState((previousState) => ({
            list: previousState.list.filterNot(item => item.id === deletedItemId)
        }))
    }

    _startEditing(itemId) {
        this.setState({
            editedItemId: itemId
        })
    }

    _cancelEditing() {
        this.setState({
            editedItemId: null
        })
    }

    _updateItem(item) {
        this.setState(previousState => {

            let newState = {
                editedItemId: null
            }

            const itemIndex = previousState.list.findIndex(i => i.id === item.id)
            if (itemIndex >= 0 && item.name.length > 0) {
                newState.list = previousState.list.update(itemIndex, previousItem => ({...previousItem, ...item}))
            }

            return newState
        })
    }

    render() {
        return (
            <ChannelsComponent
                list={this.state.list}
                editedItemId={this.state.editedItemId}
                onDelete={this._onDelete}
                onUpdateItem={this._updateItem}
                onStartEditing={this._startEditing}
                onCancelEditing={this._cancelEditing}
                onCreateNew={this._onCreateNew}
            />
        )
    }
}

export default Channels
