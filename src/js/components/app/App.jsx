import React from 'react'

import Settings from "../settings/Settings"
import {ChannelsRedux} from '../../containers-redux/channels/Channels'
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'
import {Errors} from "../../containers-redux/shared/Errors";
import {BodyRedux} from "../../containers-redux/body/Body";

const App = ({computedMatch}) => {
    const channelId = computedMatch.params.channelId

    return (
        <div className="App">
            <HeadInHelmet/>
            <ChannelsRedux/>
            { channelId ? <BodyRedux channelId={channelId}/> : <div className="Body"><h2>Choose a channel</h2></div>}
            <Settings/>
            <Errors/>
        </div>
    )
}

export default App
