import React, { Component } from 'react'
import Immutable from 'immutable'
import '../../styles/components/Channels.css'
import {uuid} from '../utils/uuid'
import Channel from "./Channel";

class Channels extends Component {
  constructor(){
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

    this._onCreateNew= this._onCreateNew.bind(this)
  }

  _onCreateNew() {

  }


  render() {
    const { list } = this.state

    const channelElements = list.map(x => <Channel key={x.id} item={x}/>)

    return (
      <div className="Channels">
        <h1>Channels</h1>
        <ul>{channelElements}</ul>
        <button type="button" className="btn btn--channel" onClick={() => {}}>Create new</button>
      </div>
    )
  }
}

export default Channels
