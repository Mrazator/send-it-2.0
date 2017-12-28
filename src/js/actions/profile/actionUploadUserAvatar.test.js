import { profileStartUploadingProfileAvatar } from './actionCreators'
import { actionUploadUserAvatarFactory } from './actionUploadUserAvatar'

test('actionUploadUserAvatarFactory dispatches actions in correct order', async (done) => {
  const expectedAvatar = 'pretty avatar promised'
  const expectedAvatarId = 'pretty fly identified'
  const dispatch = jest.fn(action => action)

  const getState = () => ({
    profile: {
      details: {

      }
    },
    shared: {
      token: 'pretty please'
    }
  })

  const actionUploadUserDetails = jest.fn(() => 'Well done')
  const actionLoadUserAvatar = jest.fn(() => expectedAvatar)

  const uploadUserAvatar = actionUploadUserAvatarFactory({
    fetchFileUpload: () => Promise.resolve([{ id: expectedAvatarId }]),
    actionUploadUserDetails,
    actionLoadUserAvatar
  })

  const dispatchable = uploadUserAvatar('file')
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenCalledWith(profileStartUploadingProfileAvatar())
  expect(dispatch.mock.calls[1][0]).toEqual(actionUploadUserDetails())
  expect(dispatch.mock.calls[2][0]).toEqual(actionLoadUserAvatar(expectedAvatarId))
  done()
})
