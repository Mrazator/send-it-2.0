import * as actions from '../../constants/actionTypes'

export const isAddingUser = (previousState = false, action) => {
  switch (action.type) {
    case actions.CHANNELS_ADDING_USER_STARTED:
      return true

    case actions.CHANNELS_ADDING_USERS_ADDED:
    case actions.CHANNELS_ADDING_USERS_CANCELED:
      return false

    default:
      return previousState
  }
}
