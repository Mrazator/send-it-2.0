import {push} from 'connected-react-router'
import {receiveValidToken} from './actionCreators'

export const authenticateUser = (destinationLocation) =>
    (dispatch) => {
        dispatch(receiveValidToken())
        dispatch(push(destinationLocation))
    }
