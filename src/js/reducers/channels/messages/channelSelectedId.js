import * as actions from '../../../constants/actionTypes'

export const channelSelectedId = (previousState = null, action) => {
  switch (action.type) {
    case actions.CHANNELS_ITEM_SELECT:
      return action.payload.id

    default:
      return previousState
  }
}
