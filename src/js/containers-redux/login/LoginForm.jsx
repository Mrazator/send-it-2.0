import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { LoginForm } from '../../components/login/LoginForm.jsx'
import { sharedAuthenticateUser } from '../../actions/shared/sharedAuthenticateUser'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (userEmail) => dispatch(sharedAuthenticateUser(ownProps.from, userEmail))
})

const enhancer = connect(undefined, mapDispatchToProps)
const connectedComponent = enhancer(LoginForm)

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired
}

export { connectedComponent as LoginForm }