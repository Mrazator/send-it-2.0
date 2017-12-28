import Immutable from 'immutable'
import { messages } from './messages'
import { messageSave, messagesRemoveMessage, messagesSave, messageVote } from '../../../actions/body/actionCreators'

describe('messages reducer', () => {
  const message1 = {
    id: 'ID - message1',
    value: 'message1'
  }

  const message2 = {
    id: 'ID - message2',
    value: 'message2',
    customData: {
      vote: 0
    }
  }

  test('messages load', () => {
    const messagesArray = [message1, message2]
    const state = messages(Immutable.List(), messagesSave(messagesArray))
    expect(state).toEqual(Immutable.List(messagesArray))
  })

  test('messages create', () => {
    const state = messages(Immutable.List([message1]), messageSave(message2))
    expect(state).toEqual(Immutable.List([message1, message2]))
  })

  test('messages delete', () => {
    const state = messages(Immutable.List([message1, message2]), messagesRemoveMessage(message2.id))
    expect(state).toEqual(Immutable.List([message1]))
  })

  test('messages vote', () => {
    const message3 = { ...message2, customData: { ...message2.customData } }
    message3.customData.vote = 1
    const state = messages(Immutable.List([message2]), messageVote(message3))
    expect(state.first().customData.vote).toEqual(1)
  })
})
