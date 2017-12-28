import { combineReducers } from 'redux'

import { details } from './details'
import { avatarUri } from './avatarUri'
import { isLoadingDetails } from './isLoadingDetails'
import { isLoadingAvatar } from './isLoadingAvatar'
import { isUploadingAvatar } from './isUploadingAvatar'

export const profile = combineReducers({
  details,
  avatarUri,
  isLoadingDetails,
  isLoadingAvatar,
  isUploadingAvatar
})
