import {
  channelsSavingFinished
} from './actionCreators'

export const actionSaveChannels = () =>
  (dispatch) => {
    dispatch(channelsSavingFinished())
  }
