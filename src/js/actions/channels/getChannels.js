import {updateChannels} from "./actionCreators";
import {API_CHANNEL_URI} from "../../constants/api";
import {fetchReceive} from "../../utils/api/fetchReceive";
import {convertFromServerChannels} from "../../utils/api/conversions/channel";

export const getChannels = () =>
    (dispatch, getState) => {
        const authToken = getState().shared.token
        const requestUri = API_CHANNEL_URI()

        return fetchReceive(requestUri, authToken)
            .then(async (server) => {
                const owner = getState().profile.details.email

                return dispatch(updateChannels(convertFromServerChannels(server, owner)))
            })
            .catch((error) => console.log("error1"))
    }