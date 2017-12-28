import { isAddingUser } from './IsAddingUser'
import {
  channelsAddingUser,
  channelsAddingUserAdded,
  channelsAddingUserCancel
} from '../../actions/channels/actionCreators'

describe('IsAddingUser reducer', () => {
  test('channels adding user started', () => {
    const state = isAddingUser(false, channelsAddingUser())
    expect(state).toEqual(true)
  })

  test('channels adding user added', () => {
    const state = isAddingUser(true, channelsAddingUserAdded())
    expect(state).toEqual(false)
  })

  test('channels adding user canceled', () => {
    const state = isAddingUser(true, channelsAddingUserCancel())
    expect(state).toEqual(false)
  })
})
