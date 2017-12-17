import * as actions from '../../constants/actionTypes'

export const editingChannelId = (previousState = null, action) => {
  switch (action.type) {
    case actions.CHANNELS_ITEM_START_EDITING:
      return action.payload.id

    case actions.CHANNELS_ITEM_CANCEL_EDITING:
    case actions.CHANNELS_ITEM_UPDATE:
    case actions.CHANNELS_ITEM_DELETE:
      return null

    default:
      return previousState
  }
}
