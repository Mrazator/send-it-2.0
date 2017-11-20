import React from 'react'
import { ChannelsRedux } from '../../containers-redux/channels/Channels'
import Body from "../body/Body"
import Profile from "../settings/Settings"


const App = () => {
    return (
        <div className="App">
          <ChannelsRedux/>
          <Body/>
          <Profile/>
        </div>
    )
}

export default App
