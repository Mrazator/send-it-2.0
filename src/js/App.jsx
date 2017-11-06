import React, { Component } from 'react'
// import logo from '../assets/logo.svg'

import Channels from "./containers/channels/Channels";
import Body from "./components/body/Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Channels/>
        <Body/>
      </div>
    )
  }
}

export default App
