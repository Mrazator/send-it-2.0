import Immutable from 'immutable'
import {
    TODO_LIST_ITEM_CREATE,
    TODO_LIST_ITEM_DELETE,
    TODO_LIST_ITEM_UPDATE
} from '../../constants/actionTypes'

export const channelList = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case TODO_LIST_ITEM_CREATE:
            return previousState.push({ ...action.payload.channel });

        case TODO_LIST_ITEM_DELETE:
            return previousState.filterNot(item => item.id === action.payload.id)

        case TODO_LIST_ITEM_UPDATE: {
            const channel = action.payload.channel
            const itemIndex = previousState.findIndex(i => i.id === channel.id)
            return itemIndex >= 0 && channel.name.length > 0
                ? previousState.update(itemIndex, previousItem => ({ ...previousItem, ...channel }))
                : previousState
        }

        default:
            return previousState
    }
};