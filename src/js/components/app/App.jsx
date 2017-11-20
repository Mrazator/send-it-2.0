import React from 'react'

import Body from "../body/Body"
import Settings from "../settings/Settings"
import {ChannelsRedux} from '../../containers-redux/channels/Channels'
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'

const App = () => {
    return (
        <div className="App">
            <HeadInHelmet/>
            <ChannelsRedux/>
            <Body/>
            <Settings/>
        </div>
    )
}

export default App
