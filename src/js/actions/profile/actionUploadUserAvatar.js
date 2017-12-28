import {
  profileFailUploadingProfileAvatar,
  profileStartUploadingProfileAvatar
} from './actionCreators'
import {
  sharedDismissError
} from '../shared/actionCreators'
import { performAuthorizedRequest } from './performAuthorizedRequest'
import {
  FAILED_UPDATE_AVATAR_MESSAGE,
  MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants'

export const actionUploadUserAvatarFactory = ({ fetchFileUpload, actionUploadUserDetails, actionLoadUserAvatar }) => file =>
  async (dispatch, getState) => {
    dispatch(profileStartUploadingProfileAvatar())

    const authToken = getState().shared.token

    try {
      return await performAuthorizedRequest(dispatch, async () => {
        if (!file) {
          throw new Error('Avatar type is not supported or the system could not load the file.')
        }

        const uploadResult = await fetchFileUpload(authToken, file)
        if (!uploadResult || !uploadResult[0] || !uploadResult[0].id) {
          throw new Error('Avatar uploaded to the server, however, server did not store the file.')
        }

        const state = getState()

        const updatedDetails = {
          ...state.profile.details,
          customData: {
            ...state.profile.details.customData,
            avatarId: uploadResult[0].id
          }
        }

        await dispatch(actionUploadUserDetails(updatedDetails))
        await dispatch(actionLoadUserAvatar(updatedDetails.customData.avatarId))
      })
    } catch (error) {
      const dispatchedAction = dispatch(profileFailUploadingProfileAvatar(FAILED_UPDATE_AVATAR_MESSAGE, error))
      setTimeout(() => dispatch(sharedDismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR)
      return dispatchedAction
    }
  }
