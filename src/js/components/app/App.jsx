import React from 'react'

import Settings from "../settings/Settings"
import {ChannelsRedux} from '../../containers-redux/channels/Channels'
import {HeadInHelmet} from '../../containers-redux/shared/HeadInHelmet'
import {Errors} from "../../containers-redux/shared/Errors";
import {BodyRedux} from "../../containers-redux/body/Body";

const App = () => {
    return (
        <div className="App">
            <HeadInHelmet/>
            <ChannelsRedux/>
            <BodyRedux/>
            <Settings/>
            <Errors/>
        </div>
    )
}

export default App
