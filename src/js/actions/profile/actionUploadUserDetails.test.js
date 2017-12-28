import { startSubmit, stopSubmit } from 'redux-form'
import { actionUploadUserDetailsFactory } from './actionUploadUserDetails'
import { DETAILS_FORM_NAME } from '../../constants/formNames'
import { profileUpdateProfileDetails } from './actionCreators'

test('actionLoadUserDetails dispatches actions in correct order', async (done) => {
  const expectedAvatarId = 'pretty fly identified'
  const dispatch = jest.fn(action => action)

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
  const uploadUserDetails = actionUploadUserDetailsFactory({
    fetchRequest: () => Promise.resolve(servedDetails)
  })

  const dispatchable = uploadUserDetails(expectedDetails)
  await dispatchable(dispatch, getState)

  // toHaveBeenCalledWith cannot be used since order matters
  expect(dispatch.mock.calls[0][0]).toEqual(startSubmit(DETAILS_FORM_NAME))
  expect(dispatch.mock.calls[1][0]).toEqual(profileUpdateProfileDetails(expectedDetails.email, expectedDetails.customData))
  expect(dispatch).toHaveBeenLastCalledWith(stopSubmit(DETAILS_FORM_NAME))
  done()
})
