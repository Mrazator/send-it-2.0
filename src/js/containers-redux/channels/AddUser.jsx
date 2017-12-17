import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { AddUser } from '../../components/channels/AddUser'
import { actionLoadUsers } from '../../actions/channels/actionLoadUsers'
import { actionUploadChannelUsers } from '../../actions/channels/actionUploadChannelUsers'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

const mapStateToProps = (state, ownProps) => ({
  channel: ownProps.channel,
  users: state.channelManagement.users,
  selected: ownProps.channel.id === state.channelManagement.selectedChannel.id
})

const mapDispatchToProps = dispatch => ({
  onLoadUsers: () => dispatch(actionLoadUsers()),
  onSubmit: channel => dispatch(actionUploadChannelUsers(channel))
})

const formConfig = {
  form: 'ADD_USER',
  touchOnChange: true,
  enableReinitialize: true
}

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps)
const formEnhancer = reduxForm(formConfig)
const connectedComponent = stateEnhancer(formEnhancer(AddUser))

connectedComponent.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    users: PropTypes.instanceOf(Immutable.List())
  }).isRequired
}
export { connectedComponent as AddUserRedux }
