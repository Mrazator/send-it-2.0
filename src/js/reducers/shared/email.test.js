import { email } from './email'
import { failAuthentication, sharedInvalidateToken, sharedReceiveValidEmail } from '../../actions/shared/actionCreators'
import { uuid } from '../../utils/uuid'

describe('email reducer', () => {
  const emailExp = 'expected@email.com'
  test('shared reveive email', () => {
    const state = email(undefined, sharedReceiveValidEmail(emailExp))
    expect(state).toEqual(emailExp)
  })

  test('shared authentication failed', () => {
    const id = uuid()
    const state = email(emailExp, failAuthentication(id)('error message', {}))
    expect(state).toBeNull()
  })

  test('shared invalidate token', () => {
    const state = email(emailExp, sharedInvalidateToken())
    expect(state).toBeNull()
  })
})
