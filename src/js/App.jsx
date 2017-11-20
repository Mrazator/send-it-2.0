import React, { Component } from 'react'
import { ChannelsRedux } from './containers-redux/channels/Channels'
import Body from "./components/body/Body"
import Profile from "./components/profile/Profile"


class App extends Component {
  render() {
    return (
        <div className="App">
          <ChannelsRedux/>
          <Body/>
          <Profile/>
        </div>
    )
  }
}

export default App
