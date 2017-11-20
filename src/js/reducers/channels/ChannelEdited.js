import * as actions from '../../constants/actionTypes'

export const channelEditedId = (previousState = null, action) => {
    switch (action.type) {
        case actions.TODO_LIST_ITEM_START_EDITING:
            return action.payload.id;

        case actions.TODO_LIST_ITEM_CANCEL_EDITING:
        case actions.TODO_LIST_ITEM_UPDATE:
        case actions.TODO_LIST_ITEM_DELETE:
            return null

        default:
            return previousState
    }
}