import Immutable from 'immutable'
import { users } from './users'
import { channelsLoadRegisteredUsers } from '../../actions/channels/actionCreators'

describe('users reducer', () => {
  test('channels load users', () => {
    const usersArray = [{ id: 1 }, { id: 2 }]
    const state = users(Immutable.List(), channelsLoadRegisteredUsers(usersArray))
    expect(state).toEqual(Immutable.List(usersArray))
  })
})
