import { channelsAddingUserAdded, channelsSavingStarted, channelsUpdateChannel } from './actionCreators'
import { actionUploadChannelUsersFactory } from './actionUploadChannelUsers'

test('upload channel users dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()

  const getState = () => ({
    shared: {
      token: 'pretty please'
    }
  })

  const values = {
    users: ['neco@neco.cz', 'zaseneco@123.com']
  }

  const channel = {
    id: 'bc78e525-c9f7-4252-aae9-7242fcf096fe',
    name: 'Ahoj kamo privatni chat',
    customData: { owner: 'ahoj@kamo.cz', users: [] }
  }

  const editChannel = actionUploadChannelUsersFactory(() => Promise.resolve({}))

  const dispatchable = editChannel(values, channel)
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenCalledWith(channelsSavingStarted())
  expect(dispatch.mock.calls[1][0]).toEqual(channelsUpdateChannel(channel))
  expect(dispatch).toHaveBeenLastCalledWith(channelsAddingUserAdded())
  done()
})
