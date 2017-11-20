import {uuid} from "../../utils/uuid"
import * as actions from "../../constants/actionTypes";

export const addChannel = () => ({
    type: actions.TODO_LIST_ITEM_CREATE,
    payload: {
        channel: {
          id: uuid(),
          name: 'new channel',
          customData: ''
        }
    }
})

export const removeChannel = (id) => ({
    type: actions.TODO_LIST_ITEM_DELETE,
    payload: {
        id
    }
})

export const updateChannel = (channel) => ({
    type: actions.TODO_LIST_ITEM_UPDATE,
    payload: {
        channel
    }
})

export const startEditingItem = (id) => ({
    type: actions.TODO_LIST_ITEM_START_EDITING,
    payload: {
        id
    }
})

export const cancelEditingItem = () => ({
    type: actions.TODO_LIST_ITEM_CANCEL_EDITING
})

export const savingStarted = () => ({
    type: actions.TODO_LIST_SAVING_STARTED,
})

export const savingFinished = () => ({
    type: actions.TODO_LIST_SAVING_FINISHED,
})

