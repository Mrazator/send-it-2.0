import * as actions from '../../constants/actionTypes'
import { errorActionFactory } from '../../utils/errorActionFactory'

export const profileUpdateProfileDetails = (email, customData) => ({
  type: actions.PROFILE_UPDATE_DETAILS,
  payload: {
    email,
    customData
  }
})

export const profileUpdateProfileAvatar = (avatarUri = null) => ({
  type: actions.PROFILE_UPDATE_AVATAR,
  payload: {
    avatarUri
  }
})

export const profileStartFetchingProfileAvatar = () => ({
  type: actions.PROFILE_AVATAR_FETCHING_STARTED
})

export const profileStartFetchingProfileDetails = () => ({
  type: actions.PROFILE_FETCHING_STARTED
})

export const profileStartUploadingProfileAvatar = () => ({
  type: actions.PROFILE_AVATAR_UPLOADING_STARTED
})

export const profileFailFetchingProfileDetails = id => errorActionFactory(id, actions.PROFILE_FETCHING_FAILED)

export const profileFailUploadingProfileDetails = id => errorActionFactory(id, actions.PROFILE_UPLOADING_FAILED)

export const profileFailUploadingProfileAvatar = id => errorActionFactory(id, actions.PROFILE_AVATAR_UPLOADING_FAILED)

export const profileFailFetchingProfileAvatar = id => errorActionFactory(id, actions.PROFILE_AVATAR_FETCHING_FAILED)
