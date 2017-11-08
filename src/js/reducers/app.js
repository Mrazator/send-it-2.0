import { combineReducers } from 'redux'
import { channelManagement } from "./channels/channelManagement"

export const app = combineReducers({
  channelManagement
})