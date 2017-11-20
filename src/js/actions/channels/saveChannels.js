import {
    savingFinished,
    savingStarted
} from './actionCreators'

export const saveChannels = () =>
    (dispatch, getState) => {
        dispatch(savingStarted())
        setTimeout(() => {
            localStorage.setItem('channels', JSON.stringify(getState().channelManagement.channels.toJS()))
            dispatch(savingFinished())

        }, 1000)
    }
