import {
  profileStartFetchingProfileAvatar,
  profileFailFetchingProfileAvatar,
  profileUpdateProfileAvatar
} from './actionCreators'
import { createApiFilerUri } from '../../constants/api'
import { fetchReceive } from '../../utils/api/fetchReceive'
import { FAILED_FETCH_AVATAR_MESSAGE } from '../../constants/uiConstants'
import { performAuthorizedRequest } from './performAuthorizedRequest'

export const actionLoadUserAvatar = avatarId =>
  async (dispatch, getState) => {
    dispatch(profileStartFetchingProfileAvatar())

    const authToken = getState().shared.token
    const requestUri = createApiFilerUri(avatarId)

    try {
      return await performAuthorizedRequest(dispatch, async () => {
        const avatarUri = await fetchReceive(requestUri, authToken)
        dispatch(profileUpdateProfileAvatar(avatarUri))
      })
    } catch (error) {
      return dispatch(profileFailFetchingProfileAvatar(FAILED_FETCH_AVATAR_MESSAGE, error))
    }
  }
