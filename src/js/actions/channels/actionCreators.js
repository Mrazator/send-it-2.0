import {uuid} from "../../utils/uuid"
import {
  TODO_LIST_ITEM_CREATE,
  TODO_LIST_ITEM_DELETE,
  TODO_LIST_ITEM_UPDATE,
  TODO_LIST_ITEM_START_EDITING,
  TODO_LIST_ITEM_CANCEL_EDITING
} from "../../constants/actionTypes";


export const addChannel = () => ({
    type: TODO_LIST_ITEM_CREATE,
    payload: {
        channel: {
          id: uuid(),
          name: 'new channel',
          customData: ''
        }
    }
})

export const removeChannel = (id) => ({
    type: TODO_LIST_ITEM_DELETE,
    payload: {
        id
    }
})

export const updateChannel = (channel) => ({
    type: TODO_LIST_ITEM_UPDATE,
    payload: {
        channel
    }
})

export const startEditingItem = (id) => ({
    type: TODO_LIST_ITEM_START_EDITING,
    payload: {
        id
    }
})

export const cancelEditingItem = () => ({
    type: TODO_LIST_ITEM_CANCEL_EDITING
})
