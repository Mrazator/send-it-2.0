import { messagesRemoveMessage } from './actionCreators'
import { actionDeleteMessageFactory } from './actionDeleteMessage'

test('actionDeleteMessageFactory dispatches actions in correct order', async (done) => {
  const dispatch = jest.fn()
  const channelId = '1'
  const messageId = '2'

  const getState = () => ({
    shared: {
      token: 'pretty please'
    }
  })

  const deleteMessage = actionDeleteMessageFactory(() => Promise.resolve())

  const dispatchable = deleteMessage(channelId, messageId)
  await dispatchable(dispatch, getState)

  expect(dispatch).toHaveBeenLastCalledWith(messagesRemoveMessage(messageId))
  done()
})
