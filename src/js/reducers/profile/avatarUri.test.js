import { avatarUri } from './avatarUri'
import { profileUpdateProfileAvatar } from '../../actions/profile/actionCreators'

describe('avatarUri reducer', () => {
  test('profile update avatar', () => {
    const uri = 'avatar uri'
    const state = avatarUri(null, profileUpdateProfileAvatar(uri))
    expect(state).toEqual(uri)
  })
})
