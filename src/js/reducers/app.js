/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import { channelManagement } from './channels/channelManagement'
import { shared } from './shared/shared'
import { profile } from './profile/profile'
import { SHARED_USER_LOGOUT } from '../constants/actionTypes'

export const app = combineReducers({
  channelManagement,
  profile,
  shared,
  form
})

export const rootReducer = (state, action) => {
  if (action.type === SHARED_USER_LOGOUT) {
    state = undefined
  }

  return app(state, action)
}
