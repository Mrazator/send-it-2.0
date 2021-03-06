import {
  startSubmit,
  stopSubmit
} from 'redux-form'
import {
  profileFailUploadingProfileDetails, profileUpdateProfileDetails
} from './actionCreators'
import {
  createUserUri
} from '../../constants/api'
import {
  sharedDismissError
} from '../shared/actionCreators'
import { DETAILS_FORM_NAME } from '../../constants/formNames'

import {
  FAILED_UPDATE_DETAILS_MESSAGE,
  MILISECONDS_TO_AUTO_DISMISS_ERROR

} from '../../constants/uiConstants'
import { performAuthorizedRequest } from './performAuthorizedRequest'
import { convertFromServerDetails } from '../../utils/api/conversions/profileDetails'

export const actionUploadUserDetailsFactory = ({ fetchRequest }) => details =>
  async (dispatch, getState) => {
    dispatch(startSubmit(DETAILS_FORM_NAME))

    const authToken = getState().shared.token
    const requestUri = createUserUri(details.email)
    const serverDetails = details.customData

    try {
      await performAuthorizedRequest(dispatch, async () => {
        const receivedServerDetails = await fetchRequest(requestUri, authToken, 'PUT', JSON.stringify(serverDetails))
        const updatedDetails = convertFromServerDetails(receivedServerDetails)
        return dispatch(profileUpdateProfileDetails(updatedDetails.email, updatedDetails.customData))
      })
    } catch (error) {
      const dispatchedAction = dispatch(profileFailUploadingProfileDetails(FAILED_UPDATE_DETAILS_MESSAGE, error))
      setTimeout(() => dispatch(sharedDismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
    }

    return dispatch(stopSubmit(DETAILS_FORM_NAME))
  }
