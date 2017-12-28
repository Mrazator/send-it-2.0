import {
  profileStartFetchingProfileAvatar,
  profileFailFetchingProfileAvatar,
  profileUpdateProfileAvatar
} from './actionCreators'
import { createFileUri } from '../../constants/api'
import { FAILED_FETCH_AVATAR_MESSAGE } from '../../constants/uiConstants'
import { performAuthorizedRequest } from './performAuthorizedRequest'

export const actionLoadUserAvatarFactory = fetchReceive => avatarId =>
  async (dispatch, getState) => {
    dispatch(profileStartFetchingProfileAvatar())

    const authToken = getState().shared.token
    const requestUri = createFileUri(avatarId)

    try {
      return await performAuthorizedRequest(dispatch, async () => {
        const avatarUri = await fetchReceive(requestUri, authToken)
        dispatch(profileUpdateProfileAvatar(avatarUri))
      })
    } catch (error) {
      return dispatch(profileFailFetchingProfileAvatar(FAILED_FETCH_AVATAR_MESSAGE, error))
    }
  }
