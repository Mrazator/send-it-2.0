import Immutable from 'immutable'
import * as actions from '../../constants/actionTypes'

export const channels = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case actions.CHANNELS_UPDATE:
            return Immutable.List(action.payload.channels)

        case actions.CHANNELS_ITEM_CREATE:
            return previousState.push({...action.payload.channel})

        case actions.CHANNELS_ITEM_DELETE:
            return previousState.filterNot(item => item.id === action.payload.id)

        case actions.CHANNELS_ITEM_UPDATE: {
            const channel = action.payload.channel
            const itemIndex = previousState.findIndex(i => i.id === channel.id)
            return itemIndex >= 0 && channel.name.length > 0
                ? previousState.update(itemIndex, previousItem => ({...previousItem, ...channel}))
                : previousState
        }

        default:
            return previousState
    }
}
