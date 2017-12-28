import { actionLoadUserAvatarFactory } from './actionLoadUserAvatar'
import { profileStartFetchingProfileAvatar, profileUpdateProfileAvatar } from './actionCreators'

test('actionLoadUserAvatar dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()

  const getState = () => ({
    shared: {
      token: 'pretty please'
    }
  })

  const expectedUri = 'http://blob/avatar.png'

  const loadUserAvatar = actionLoadUserAvatarFactory(() => Promise.resolve(expectedUri))
  const dispatchable = loadUserAvatar(3)
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenCalledWith(profileStartFetchingProfileAvatar())
  expect(dispatch).toHaveBeenLastCalledWith(profileUpdateProfileAvatar(expectedUri))
  done()
})
