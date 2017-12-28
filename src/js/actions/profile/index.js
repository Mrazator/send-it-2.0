import { actionLoadUserAvatarFactory } from './actionLoadUserAvatar'
import { actionLoadUserDetailsFactory } from './actionLoadUserDetails'
import { actionUploadUserAvatarFactory } from './actionUploadUserAvatar'
import { actionUploadUserDetailsFactory } from './actionUploadUserDetails'
import { fetchFileUpload as FileUpload } from '../../utils/api/fetchFileUpload'
import { fetchReceive, fetchRequest } from '../shared'

export const fetchFileUpload = FileUpload(fetch)
export const actionLoadUserAvatar = actionLoadUserAvatarFactory(fetchReceive)
export const actionLoadUserDetails = actionLoadUserDetailsFactory({ fetchReceive, actionLoadUserAvatar })
export const actionUploadUserDetails = actionUploadUserDetailsFactory({ fetchRequest })
export const actionUploadUserAvatar = actionUploadUserAvatarFactory({ fetchFileUpload, actionUploadUserDetails, actionLoadUserAvatar })
