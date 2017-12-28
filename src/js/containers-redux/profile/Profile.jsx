import { connect } from 'react-redux'
import { Profile } from '../../components/profile/Profile.jsx'
import { actionLoadUserDetails } from '../../actions/profile'

const mapDispatchToProps = dispatch => ({
  fetchDetails: () => dispatch(actionLoadUserDetails())
})

const stateEnhancer = connect(undefined, mapDispatchToProps)
const connectedComponent = stateEnhancer(Profile)

export { connectedComponent as Profile }
