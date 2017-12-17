import {messages} from "./messages";
import {combineReducers} from "redux";
import {isLoading} from "./isLoading";
import {channelSelectedId} from "./channelSelectedId";

export const selectedChannel = combineReducers({
    id: channelSelectedId,
    messages,
    isLoading
})