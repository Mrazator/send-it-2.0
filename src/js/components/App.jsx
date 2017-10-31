import React, { Component } from 'react'
// import logo from '../assets/logo.svg'
import '../../styles/components/App.css'

import Channels from "./Channels";
import Body from "./Body";

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
