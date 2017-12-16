import Immutable from 'immutable'
import {fetchReceive} from "../../utils/api/fetchReceive";
import {API_MESSAGES_URI} from "../../constants/api";
import {convertFromServer} from "../../utils/api/conversions/messages";
import {loadingStarted, saveMessages} from "./actionCreators";

export const loadMessages = (channelId) =>
    (dispatch, getState) => {
        dispatch(loadingStarted())

        const authToken = getState().shared.token
        const requestUri = API_MESSAGES_URI(channelId)

        return fetchReceive(requestUri, authToken)
            .then((server) => {
                const messages = server.length !== 0
                    ? convertFromServer(server).sort((x, y) => x.createdAt > y.createdAt)
                    : Immutable.List()

                dispatch(saveMessages(messages))
            })
            .catch(error => console.log("load messages error"))
    }