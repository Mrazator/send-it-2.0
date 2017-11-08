import {
  TODO_LIST_ITEM_CANCEL_EDITING,
  TODO_LIST_ITEM_START_EDITING,
} from '../../constants/actionTypes'

export const editedItemId = (prevState = null, action) => {
  switch(action.type) {
    case TODO_LIST_ITEM_START_EDITING:
      return action.payload.id;

    case TODO_LIST_ITEM_CANCEL_EDITING:

    default:
      return null
  }
}