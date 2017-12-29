import { channelsSavingStarted, channelsUpdateChannel } from './actionCreators'
import { actionEditChannelFactory } from './actionEditChannel'

test('edit channel dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()

  const getState = () => ({
    shared: {
      token: 'pretty please'
    }
  })

  const channel = {
    id: 'bc78e525-c9f7-4252-aae9-7242fcf096fe',
    name: 'Ahoj kamo privatni chat',
    customData: { owner: 'ahoj@kamo.cz', users: [] }
  }

  const editChannel = actionEditChannelFactory(() => Promise.resolve({}))

  const dispatchable = editChannel(channel)
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenCalledWith(channelsSavingStarted())
  expect(dispatch).toHaveBeenLastCalledWith(channelsUpdateChannel(channel))
  done()
})
