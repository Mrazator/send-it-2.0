import {
    savingFinished
} from './actionCreators'

export const saveChannels = () =>
    (dispatch, getState) => {
        localStorage.setItem('channels', JSON.stringify(getState().channelManagement.channels.toJS()))
        dispatch(savingFinished())
    }
