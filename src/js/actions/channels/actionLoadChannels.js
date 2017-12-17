import {channelsSavingStarted, channelsUpdate} from "./actionCreators";
import {API_CHANNEL_URI} from "../../constants/api";
import {fetchReceive} from "../../utils/api/fetchReceive";
import {convertFromServerChannels} from "../../utils/api/conversions/channel";

export const actionLoadChannels = () =>
    (dispatch, getState) => {
        const authToken = getState().shared.token
        const requestUri = API_CHANNEL_URI

        dispatch(channelsSavingStarted())

        return fetchReceive(requestUri, authToken)
            .then((server) => {
                const owner = getState().shared.email

                return dispatch(channelsUpdate(convertFromServerChannels(server, owner)))
            })
            .catch((error) => console.log("actionLoadChannels - Failed"))
    }