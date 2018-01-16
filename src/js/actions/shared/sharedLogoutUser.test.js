import { sharedLogoutUser } from './sharedLogoutUser'
import { resetState, sharedInvalidateToken } from './actionCreators'

test('sharedAuthenticatUser dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn(action => action)

  const dispatchable = sharedLogoutUser()
  await dispatchable(dispatch)

  expect(dispatch.mock.calls[0][0]).toEqual(sharedInvalidateToken())
  expect(dispatch.mock.calls[1][0]).toEqual(resetState())

  done()
})
