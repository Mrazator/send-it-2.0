import React from 'react'

import Settings from "../settings/Settings"
import {ChannelsRedux} from '../../containers-redux/channels/Channels'
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'
import {Errors} from "../../containers-redux/shared/Errors";
import {BodyRedux} from "../../containers-redux/body/Body";

const App = ({computedMatch}) => {
    return (
        <div className="App">
            <HeadInHelmet/>
            <ChannelsRedux/>
            <BodyRedux channelId={computedMatch.params.channelId}/>
            <Settings/>
            <Errors/>
        </div>
    )
}

export default App
