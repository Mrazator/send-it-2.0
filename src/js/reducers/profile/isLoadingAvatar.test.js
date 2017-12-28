import { isLoadingAvatar } from './isLoadingAvatar'
import { profileStartFetchingProfileAvatar, profileUpdateProfileAvatar } from '../../actions/profile/actionCreators'

describe('isLoadingAvatar reducer', () => {
  test('avatar fetching started update', () => {
    const state = isLoadingAvatar(false, profileStartFetchingProfileAvatar())
    expect(state).toBeTruthy()
  })
  test('avatar fetching finished update', () => {
    const state = isLoadingAvatar(true, profileUpdateProfileAvatar())
    expect(state).toBeFalsy()
  })
})
