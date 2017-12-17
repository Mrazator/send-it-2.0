import {channelsSavingStarted} from "./actionCreators";
import {API_CHANNEL_URI} from "../../constants/api";
import {convertToServerEditChannel} from "../../utils/api/conversions/channel";

export const actionAddUserToChannel = (channel) =>
    (dispatch, getState) => {

        // dispatch(channelsSavingStarted())

        const authToken = getState().shared.token
        const requestUri = API_CHANNEL_URI
        const bodyJson = convertToServerEditChannel(channel)

        // return fetchRequest(requestUri, authToken, "PATCH", bodyJson)
        //     .then((server) => dispatch(channelsUpdateChannel(channel)))
        //     .catch((error) => {
        //         if (error.statusCode === 401) {
        //             dispatch(sharedInvalidateToken());
        //             return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
        //         }
        //         throw error
        //     })
        //     .catch((error) => dispatch(profileFailFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)))
}