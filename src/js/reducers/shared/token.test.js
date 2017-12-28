import { token } from './token'
import { failAuthentication, sharedInvalidateToken, sharedReceiveValidToken } from '../../actions/shared/actionCreators'

describe('token reducer', () => {
  test('shared receive token', () => {
    const tokenExp = 'token'
    const state = token(undefined, sharedReceiveValidToken(tokenExp))
    expect(state).toBe(tokenExp)
  })

  test('shared authentication failed', () => {
    const state = token(undefined, failAuthentication(1)('error message', {}))
    expect(state).toBeNull()
  })

  test('shared invalidate token', () => {
    const state = token(undefined, sharedInvalidateToken())
    expect(state).toBeNull()
  })
})
