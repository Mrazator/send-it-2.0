import * as actions from '../../constants/actionTypes'
import {errorActionFactory} from '../../utils/errorActionFactory'

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
    type: actions.PROFILE_AVATAR_FETCHING_STARTED,
})

export const profileStartFetchingProfileDetails = () => ({
    type: actions.PROFILE_FETCHING_STARTED,
})

export const profileStartUploadingProfileAvatar = () => ({
    type: actions.PROFILE_AVATAR_UPLOADING_STARTED
})

export const profileFailFetchingProfileDetails = errorActionFactory(actions.PROFILE_FETCHING_FAILED)

export const profileFailUploadingProfileDetails = errorActionFactory(actions.PROFILE_UPLOADING_FAILED)

export const profileFailUploadingProfileAvatar = errorActionFactory(actions.PROFILE_AVATAR_UPLOADING_FAILED)

export const profileFailFetchingProfileAvatar = errorActionFactory(actions.PROFILE_AVATAR_FETCHING_FAILED)
