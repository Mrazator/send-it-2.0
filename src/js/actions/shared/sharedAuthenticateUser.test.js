import { push } from 'connected-react-router'

import { sharedAuthenticateUserFactory } from './sharedAuthenticateUser'
import { sharedReceiveValidEmail, sharedReceiveValidToken, sharedStartAuthentication } from './actionCreators'
import { profileUpdateProfileDetails } from '../profile/actionCreators'

test('sharedAuthenticatUser dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn(action => action)
  const email = 'email@email.com'
  const token = 'token'
  const destination = '/destination'

  const authenticateUser = sharedAuthenticateUserFactory({
    fetchPostUser: () => Promise.resolve({ email }),
    fetchAuthToken: () => Promise.resolve(token)
  })
  const dispatchable = authenticateUser(destination, email)
  await dispatchable(dispatch)

  expect(dispatch.mock.calls[0][0]).toEqual(sharedStartAuthentication())
  expect(dispatch.mock.calls[1][0]).toEqual(sharedReceiveValidEmail(email))
  expect(dispatch.mock.calls[2][0]).toEqual(sharedReceiveValidToken(token))
  expect(dispatch.mock.calls[3][0]).toEqual(push(destination))
  expect(dispatch.mock.calls[4][0]).toEqual(profileUpdateProfileDetails('email@email.com', {
    nickName: 'email',
    avatarId: ''
  }))
  done()
})
