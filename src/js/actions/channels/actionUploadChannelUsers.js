import { channelsSavingStarted } from './actionCreators'

export const actionUploadChannelUsers = channel =>
  (dispatch, getState) => {
    dispatch(channelsSavingStarted())
    console.log(channel)
    //
    // const authToken = getState().shared.token
    // const requestUri = API_CHANNEL_URI()
    // const bodyJson = convertToServerEditChannel(channel)
    // console.log(channel)
    // console.log(bodyJson)

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
