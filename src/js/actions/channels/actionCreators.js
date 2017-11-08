import {uuid} from "../../utils/uuid"
import {
TODO_LIST_ITEM_CREATE,
TODO_LIST_ITEM_DELETE,
TODO_LIST_ITEM_UPDATE
} from "../../constants/actionTypes";


export const addChannel = (channel) => ({
    type: TODO_LIST_ITEM_CREATE,
    payload: {
        item: {
            ...channel,
            id: uuid()
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
