import * as actionTypes from '../../constants/actionTypes'
import { errorActionFactory } from '../../utils/errorActionFactory'

export const updateProfileDetails = (email, customData) => ({
  type: actionTypes.PROFILE_UPDATE_DETAILS,
  payload: {
      email,
      customData
  }
})

export const startFetchingProfileDetails = () => ({
    type: actionTypes.PROFILE_FETCHING_STARTED,
});


export const failUploadingProfileDetails = errorActionFactory(actionTypes.PROFILE_UPLOADING_FAILED)
export const failFetchingProfileDetails = errorActionFactory(actionTypes.PROFILE_FETCHING_FAILED)
