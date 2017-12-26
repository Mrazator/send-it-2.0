import {messagesLoadingFinished, messagesLoadingStarted} from "../../../actions/body/actionCreators";
import {isLoading} from "./isLoading";

describe('messages isLoading reducer', () => {
  test('loading started', () => {
    const state = isLoading(false, messagesLoadingStarted())
    expect(state).toEqual(true)
  })
  test('loading finished', () => {
    const state = isLoading(true, messagesLoadingFinished())
    expect(state).toEqual(false)
  })
})