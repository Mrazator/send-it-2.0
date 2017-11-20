import {uuid} from "../../utils/uuid"
import * as action from "../../constants/actionTypes";


export const addChannel = () => ({
    type: action.TODO_LIST_ITEM_CREATE,
    payload: {
        channel: {
          id: uuid(),
          name: 'new channel',
          customData: ''
        }
    }
})

export const removeChannel = (id) => ({
    type: action.TODO_LIST_ITEM_DELETE,
    payload: {
        id
    }
})

export const updateChannel = (channel) => ({
    type: action.TODO_LIST_ITEM_UPDATE,
    payload: {
        channel
    }
})

export const startEditingItem = (id) => ({
    type: action.TODO_LIST_ITEM_START_EDITING,
    payload: {
        id
    }
})

export const cancelEditingItem = () => ({
    type: action.TODO_LIST_ITEM_CANCEL_EDITING
})

export const savingStarted = () => ({
    type: action.TODO_LIST_SAVING_STARTED,
})

export const savingFinished = () => ({
    type: action.TODO_LIST_SAVING_FINISHED,
})

