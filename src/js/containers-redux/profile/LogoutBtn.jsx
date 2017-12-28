import { connect } from 'react-redux'
import { LogoutButton } from '../../components/profile/LogoutBtn'
import { sharedLogoutUser } from '../../actions/shared/sharedLogoutUser'

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(sharedLogoutUser())
})

const enhancer = connect(undefined, mapDispatchToProps)
const connectedComponent = enhancer(LogoutButton)

export { connectedComponent as LogoutBtn }
