import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Details } from '../../components/profile/Details.jsx'

import { DETAILS_FORM_NAME } from '../../constants/formNames'
import { actionUploadUserDetails } from '../../actions/profile'

const mapStateToProps = state => ({
  initialValues: state.profile.details
})

const mapDispatchToProps = dispatch => ({
  onSubmit: details => details.customData.nickName && dispatch(actionUploadUserDetails(details))
})

const formConfig = {
  form: DETAILS_FORM_NAME,
  touchOnChange: true,
  enableReinitialize: true
}

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps)
const formEnhancer = reduxForm(formConfig)
const connectedComponent = stateEnhancer(formEnhancer(Details))

export { connectedComponent as Details }
