import {
    savingFinished,
    savingStarted
} from './actionCreators'

export const saveChannels = () =>
    (dispatch, getState) => {
        dispatch(savingStarted())
        setTimeout(() => {
            localStorage.setItem('channels', JSON.stringify(getState().channelManagement.channelList.toJS()))
            dispatch(savingFinished())

        }, 1000)
    }
