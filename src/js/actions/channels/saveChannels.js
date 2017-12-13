import {
    savingFinished
} from './actionCreators'

export const saveChannels = () =>
    (dispatch) => {
        // localStorage.setItem('channels', JSON.stringify(getState().channelManagement.channels.toJS()))
        dispatch(savingFinished())
    }
