import * as actions from '../../constants/actionTypes'

export const token = (prevState = null, action) => {
  switch (action.type) {
    case actions.SHARED_RECEIVE_TOKEN:
      return action.payload.token

    case actions.SHARED_AUTHENTICATION_FAILED:
    case actions.SHARED_INVALIDATE_TOKEN:
      return null

    default:
      return prevState
  }
}
