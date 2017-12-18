import { combineReducers } from 'redux'

import { messages } from './messages'
import { isLoading } from './isLoading'
import { channelSelectedId } from './channelSelectedId'

export const selectedChannel = combineReducers({
  id: channelSelectedId,
  messages,
  isLoading
})
