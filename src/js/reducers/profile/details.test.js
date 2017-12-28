import { details } from './details'
import { profileUpdateProfileDetails } from '../../actions/profile/actionCreators'

describe('details reducer', () => {
  test('profile details update', () => {
    const email = 'email@neco.cz'
    const state = details(null, profileUpdateProfileDetails('email@neco.cz', {}))
    expect(state.email).toEqual(email)
  })
})
