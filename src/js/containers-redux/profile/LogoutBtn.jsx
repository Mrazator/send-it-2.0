import {connect} from 'react-redux'
import {LogoutButton} from '../../components/profile/LogoutBtn'
import {invalidateToken} from '../../actions/shared/actionCreators'

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(invalidateToken())
});

const enhancer = connect(undefined, mapDispatchToProps)
const connectedComponent = enhancer(LogoutButton)

export {connectedComponent as LogoutBtn}