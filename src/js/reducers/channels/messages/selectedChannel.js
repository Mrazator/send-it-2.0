import {Messages} from "./Messages";
import {combineReducers} from "redux";
import {isLoading} from "./isLoading";

export const selectedChannel = () => combineReducers({
    Messages,
    isLoading
})