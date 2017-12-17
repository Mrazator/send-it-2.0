import {savingStarted, updateChannels} from "./actionCreators";
import {API_CHANNEL_URI} from "../../constants/api";
import {fetchReceive} from "../../utils/api/fetchReceive";
import {convertFromServerChannels} from "../../utils/api/conversions/channel";

export const getChannels = () =>
    (dispatch, getState) => {
        const authToken = getState().shared.token
        const requestUri = API_CHANNEL_URI()

        dispatch(savingStarted())

        return fetchReceive(requestUri, authToken)
            .then((server) => {
                const owner = getState().shared.email

                return dispatch(updateChannels(convertFromServerChannels(server, owner)))
            })
            .catch((error) => console.log("get channels error"))
    }