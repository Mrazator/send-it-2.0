import {savingStarted} from "./actionCreators";
import {API_CHANNEL_URI} from "../../constants/api";
import {convertToServerChannelEdit} from "../../utils/api/conversions/channel";

export const uploadChannelUsers = (channel) =>
    (dispatch, getState) => {

        dispatch(savingStarted())
        console.log(channel)
        //
        // const authToken = getState().shared.token
        // const requestUri = API_CHANNEL_URI()
        // const bodyJson = convertToServerChannelEdit(channel)
        // console.log(channel)
        // console.log(bodyJson)

        // return fetchRequest(requestUri, authToken, "PATCH", bodyJson)
        //     .then((server) => dispatch(updateChannel(channel)))
        //     .catch((error) => {
        //         if (error.statusCode === 401) {
        //             dispatch(invalidateToken());
        //             return dispatch(failAuthentication(EXPIRED_AUTHENTICATION_MESSAGE));
        //         }
        //         throw error
        //     })
        //     .catch((error) => dispatch(failFetchingProfileDetails(FAILED_FETCH_DETAILS_MESSAGE, error)))
    }