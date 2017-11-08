import { combineReducers } from 'redux'
import { channelList } from "./channelList"
import {editedItemId} from "./editedItemId"

export const channelManagement = combineReducers({
  channelList,
  editedItemId
})