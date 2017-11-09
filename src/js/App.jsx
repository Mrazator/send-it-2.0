import React, { Component } from 'react'
import { ChannelsRedux } from './containers-redux/channels/Channels'
import Body from "./components/body/Body"


class App extends Component {
  render() {
    return (
        <div className="App">
          <ChannelsRedux/>
          <Body/>
        </div>
    )
  }
}

export default App
