import Immutable from 'immutable'
import {MESSAGES_LOAD} from "../../../constants/actionTypes";

export const Messages = (prevState = Immutable.List(), action) => {
    switch(action.type){
        case MESSAGES_LOAD:
            return Immutable.List(action.payload.messages)
    }
}