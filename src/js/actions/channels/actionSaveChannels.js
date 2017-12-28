import {
  channelsSavingFinished
} from './actionCreators'

export const actionSaveChannels = () =>
  (dispatch, getState) => {
    localStorage.setItem('channels', JSON.stringify(getState().channelManagement.channels.toJS()))
    dispatch(channelsSavingFinished())
  }
