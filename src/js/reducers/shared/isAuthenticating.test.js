import { isAuthenticating } from './isAuthenticating'
import {
  failAuthentication, sharedReceiveValidToken,
  sharedStartAuthentication
} from '../../actions/shared/actionCreators'

describe('isAuthenticating reducer', () => {
  test('shared authentication started', () => {
    const state = isAuthenticating(false, sharedStartAuthentication())
    expect(state).toBeTruthy()
  })

  test('shared receive token', () => {
    const state = isAuthenticating(true, sharedReceiveValidToken('token'))
    expect(state).toBeFalsy()
  })

  test('shared authentication finished', () => {
    const state = isAuthenticating(true, failAuthentication(1)('error message', { }))
    expect(state).toBeFalsy()
  })
})
