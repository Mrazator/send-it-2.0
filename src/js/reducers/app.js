import { combineReducers } from 'redux'
import { channelManagement } from "./channels/ChannelManagement"

export const app = combineReducers({
  channelManagement
})