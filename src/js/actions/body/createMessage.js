import {loadingStarted, saveMessage} from "./actionCreators";
import {API_MESSAGES_URI} from "../../constants/api";
import {fetchRequest} from "../../utils/api/fetchRequest";
import {convertFromServerMessage} from "../../utils/api/conversions/messages";

export const createMessage = (channelId, messageText) =>
    (dispatch, getState) => {
        dispatch(loadingStarted())

        const authToken = getState().shared.token
        const requestUri = API_MESSAGES_URI(channelId)
        const bodyJson = {
            value: messageText,
            customData: JSON.stringify([
                "somedata",
                "willbehere",
                "inthefuture"
            ])
        }

        return fetchRequest(requestUri, authToken, "POST", bodyJson)
            .then((server) => {
                const message = convertFromServerMessage(server)

                dispatch(saveMessage(message))
            })
            .catch(console.log("post message error"))
    }