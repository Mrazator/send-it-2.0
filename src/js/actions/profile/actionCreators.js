import * as actionTypes from '../../constants/actionTypes'

export const updateProfileDetails = (details) => ({
  type: actionTypes.PROFILE_UPDATE_DETAILS,
  payload: {
    details
  }
})