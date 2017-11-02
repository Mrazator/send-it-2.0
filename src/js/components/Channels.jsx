import React, {Component} from 'react'
import Immutable from 'immutable'
import '../../styles/components/Channels.css'
import {uuid} from '../utils/uuid'
import Channel from "./Channel";
import ChannelEdited from "./ChannelEdited";

class Channels extends Component {
  constructor() {
    super()

    this.state = {
      list: this._loadInitialTodoList(),
      editedItemId: null
    }
    this._getDefaultTodoList = this._getDefaultTodoList.bind(this)
    this._loadInitialTodoList = this._loadInitialTodoList.bind(this)
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


  _getDefaultTodoList() {
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

  _loadInitialTodoList() {
    const storedListJSON = localStorage.getItem('channelList');
    return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : this._getDefaultTodoList();
  }

  _onCreateNew() {
    this.setState((previousState) => ({
      list: previousState.list.push({
        id: uuid(),
        name: 'New item',
        customData: ''
      })
    }))
  }

  _onDelete(deletedItemId) {
    this.setState((previousState) => ({
      list: previousState.list.filterNot(item => item.id === deletedItemId)
    }))
  }

  _startEditing(itemId){
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
      if(itemIndex >= 0 && item.name.length > 0){
        newState.list = previousState.list.update(itemIndex, previousItem => ({ ...previousItem, ...item}))
      }

      return newState
    })
  }

  render() {
    const {list} = this.state

    const channelElements = list.map(x => {
      if(x.id === this.state.editedItemId){
        return <ChannelEdited
          key={x.id}
          item={x}
          onSave={this._updateItem}
          onCancelEditing={this._cancelEditing}
        />
      }

      return <Channel
        key={x.id}
        item={x}
        onDelete={this._onDelete}
        onStartEditing={this._startEditing}
      />
    })

    return (
      <div className="Channels">
        <div className="channels--manage">
          <h1>Channels.</h1>
          <i className="icon-plus" onClick={this._onCreateNew}/>
        </div>
        <ul>{channelElements}</ul>
      </div>
    )
  }
}

export default Channels
