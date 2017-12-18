import {
  channelsSavingFinished
} from './actionCreators'

export const actionSaveChannels = () =>
  (dispatch) => {
    // localStorage.setItem('channels', JSON.stringify(getState().channelManagement.channels.toJS()))
    dispatch(channelsSavingFinished())
  }
