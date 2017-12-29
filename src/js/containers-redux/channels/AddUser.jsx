import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { AddUser } from '../../components/channels/AddUser'
import { channelsAddingUserCancel } from '../../actions/channels/actionCreators'
import { actionLoadUsers, actionUploadChannelUsers } from '../../actions/channels'

const mapStateToProps = (state, ownProps) => ({
  channel: ownProps.channel,
  users: state.channelManagement.users,
  selected: ownProps.channel.id === state.channelManagement.selectedChannel.id
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadUsers: () => dispatch(actionLoadUsers()),
  onSubmit: values => (Object.keys(values).length !== 0
    ? dispatch(actionUploadChannelUsers(values, ownProps.channel))
    : dispatch(channelsAddingUserCancel()))
})

const formConfig = {
  form: 'ADD_USER',
  touchOnChange: true,
  enableReinitialize: true
}

const stateEnhancer = connect(mapStateToProps, mapDispatchToProps)
const formEnhancer = reduxForm(formConfig)
const connectedComponent = stateEnhancer(formEnhancer(AddUser))

export { connectedComponent as AddUserRedux }
