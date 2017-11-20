import {combineReducers} from 'redux'

import {channelManagement} from "./channels/ChannelManagement"
import {shared} from './shared/shared'

export const app = combineReducers({
    channelManagement,
    shared
})