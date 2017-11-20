import React from 'react'

import Body from "../body/Body"
import Settings from "../settings/Settings"
import {ChannelsRedux} from '../../containers-redux/channels/Channels'

const App = () => {
    return (
        <div className="App">
            <ChannelsRedux/>
            <Body/>
            <Settings/>
        </div>
    )
}

export default App
