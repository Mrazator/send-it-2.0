import {fetchReceive} from "../../utils/api/fetchReceive";
import {API_MESSAGES_URI} from "../../constants/api";
import {convertFromServer} from "../../utils/api/conversions/messages";
import {loadingStarted, saveMessages} from "./actionCreators";

export const loadMessages = (channelId) =>
    (dispatch, getState) => {
        dispatch(loadingStarted())

        const authToken = getState().shared.token
        const requestUri = API_MESSAGES_URI()

        return fetchReceive(requestUri, authToken)
            .then((server) => {
                const messages = convertFromServer(server)
                messages.sort((x,y) => x.createdAt > y.createdAt)


                dispatch(saveMessages(messages))
            })
            .catch(console.log("load messages error"))
    }