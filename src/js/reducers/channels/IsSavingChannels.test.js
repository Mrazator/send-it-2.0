import { isSavingChannels } from './isSavingChannels'
import { channelsSavingFinished, channelsSavingStarted } from '../../actions/channels/actionCreators'

describe('IsSavingChannels reducer', () => {
  test('channels saving started', () => {
    const state = isSavingChannels(false, channelsSavingStarted())
    expect(state).toEqual(true)
  })

  test('channels saving finished', () => {
    const state = isSavingChannels(true, channelsSavingFinished())
    expect(state).toEqual(false)
  })
})
