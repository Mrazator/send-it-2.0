import { actionLoadUserDetailsFactory } from './actionLoadUserDetails'
import { profileStartFetchingProfileDetails, profileUpdateProfileDetails } from './actionCreators'

test('actionLoadUserDetails dispatches actions in correct order', async (done) => {
  const expectedAvatar = 'pretty avatar promised'
  const expectedAvatarId = 'pretty fly identified'
  const dispatch = jest.fn(action => action)
  const actionLoadUserAvatar = jest.fn(() => expectedAvatar)

  const getState = () => ({
    shared: {
      token: 'pretty please'
    }
  })

  const servedDetails = {
    email: 'on@the.phone',
    customData: `{ "avatarId": "${expectedAvatarId}" }`
  }

  const expectedDetails = {
    email: servedDetails.email,
    customData: JSON.parse(servedDetails.customData)
  }
  const loadUserDetails = actionLoadUserDetailsFactory({
    fetchReceive: () => Promise.resolve(servedDetails),
    actionLoadUserAvatar
  })

  const dispatchable = loadUserDetails()
  await dispatchable(dispatch, getState)

  // toHaveBeenCalledWith cannot be used since order matters
  expect(dispatch.mock.calls[0][0]).toEqual(profileStartFetchingProfileDetails())
  expect(dispatch.mock.calls[1][0]).toEqual(profileUpdateProfileDetails(expectedDetails.email, expectedDetails.customData))
  expect(dispatch.mock.calls[2][0]).toEqual(expectedAvatar)
  expect(actionLoadUserAvatar).toHaveBeenLastCalledWith(expectedAvatarId)
  done()
})
