import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'

import {channelManagement} from "./channels/channelManagement"
import {shared} from './shared/shared'
import {profile} from './profile/profile'

export const app = combineReducers({
    channelManagement,
    profile,
    shared,
    form
})