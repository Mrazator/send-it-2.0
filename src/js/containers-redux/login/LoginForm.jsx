import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { LoginForm } from '../../components/login/LoginForm.jsx'
import { sharedAuthenticateUser } from '../../actions/shared/sharedAuthenticateUser'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: reduxFormResult => dispatch(sharedAuthenticateUser(ownProps.from, reduxFormResult.email))
})

const formConfig = {
  form: 'LOGIN_FORM',
  touchOnChange: true,
  enableReinitialize: true
}

const stateEnhancer = connect(null, mapDispatchToProps)
const formEnhancer = reduxForm(formConfig)
const connectedComponent = stateEnhancer(formEnhancer(LoginForm))

connectedComponent.propTypes = {
  from: PropTypes.object.isRequired
}

export { connectedComponent as LoginForm }
