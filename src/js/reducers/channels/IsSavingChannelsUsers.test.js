import { isSavingChannelsUsers } from './isSavingChannelsUsers'
import {
  channelsUsersSavingFinished,
  channelsUsersSavingStarted
} from '../../actions/channels/actionCreators'

describe('IsSavingChannelsUsers reducer', () => {
  test('channels users saving started', () => {
    const state = isSavingChannelsUsers(false, channelsUsersSavingStarted())
    expect(state).toEqual(true)
  })

  test('channels users saving finished', () => {
    const state = isSavingChannelsUsers(true, channelsUsersSavingFinished())
    expect(state).toEqual(false)
  })
})
